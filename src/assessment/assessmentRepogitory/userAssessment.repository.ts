import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
// import {
//   EmergencyContact,
//   Consulter,
//   Family,
//   Home,
//   Room,
//   Movement,
//   Equipment,
//   Toilet,
//   Bathroom,
// } from '@prisma/client';
import {
  User,
  EmergencyContact,
  Consulter,
  Family,
  Home,
  Room,
  Movement,
  Equipment,
  Toilet,
  Bathroom,
} from 'src/protogen/assessment';

@Injectable()
export class UserAssessmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  // すべての評価を取得
  // async findAll(): Promise<Assessment[]> {
  //   return this.prisma.assessment.findMany({
  //     include: {
  //       user: true,
  //       emergencyContact: true,
  //       consulter: true,
  //       family: true,
  //       home: true,
  //       room: true,
  //       movement: true,
  //       equipment: true,
  //       toilet: true,
  //       bathroom: true,
  //       service: true,
  //       using: true,
  //       wants: true,
  //       eligibility: true,
  //       disabilityNotebook: true,
  //       specialEducationRecordBook: true,
  //       mentalDisabilityCertificate: true,
  //       independenceSupportMedicalExpenses: true,
  //       dailyLifeIndependenceLevel: true,
  //       atHome: true,
  //     },
  //   });
  // }

  // 被保険者番号で評価を取得
  async findByInsuranceNumber(insuranceNumber: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { insuredId: insuranceNumber },
      include: {
        emergencyContact: true,
        consulter: true,
        family: true,
        home: true,
        room: true,
        movement: true,
        equipment: true,
        toilet: true,
        bathroom: true,
      },
    });

    if (user) {
      return {
        ...user,
        requestedDate: user.requestedDate.toISOString(),
      };
    }
    return null;
  }

  // 新しい評価を作成
  async createAssessment(
    insuredId: number,
    name: string,
    telephoneNumber: string,
    mobileNumber: string,
    age: number,
    sex: boolean,
    address: string,
    requestedDate: string,
    emergencyId: number,
    consulterId: number,
    bathroom: Bathroom,
    equipment: Equipment,
    family: Family,
    home: Home,
    movement: Movement,
    room: Room,
    toilet: Toilet,
    consulter: Consulter,
    emergencyContact: EmergencyContact,
  ): Promise<User> {
    const user_data = await this.prisma.user.create({
      data: {
        insuredId,
        name,
        telephoneNumber,
        mobileNumber,
        age,
        sex,
        address,
        requestedDate,
        emergencyId,
        consulterId,
      },
    });

    const bathroom_data = await this.prisma.bathroom.create({
      data: {
        userId: user_data.id,
        ...bathroom,
      },
    });

    const equipment_data = await this.prisma.equipment.create({
      data: {
        userId: user_data.id,
        ...equipment,
      },
    });

    const family_data = await this.prisma.family.create({
      data: {
        userId: user_data.id,
        ...family,
      },
    });

    const home_data = await this.prisma.home.create({
      data: {
        userId: user_data.id,
        ...home,
      },
    });

    const movement_data = await this.prisma.movement.create({
      data: {
        userId: user_data.id,
        ...movement,
      },
    });

    const room_data = await this.prisma.room.create({
      data: {
        userId: user_data.id,
        ...room,
      },
    });

    const toilet_data = await this.prisma.toilet.create({
      data: {
        userId: user_data.id,
        ...toilet,
      },
    });

    const consulter_data = await this.prisma.consulter.create({
      data: {
        ...consulter,
      },
    });

    const emergencyContact_data = await this.prisma.emergencyContact.create({
      data: {
        ...emergencyContact,
      },
    });

    return {
      ...user_data,
      requestedDate: user_data.requestedDate.toISOString(),
      bathroom: bathroom_data,
      equipment: equipment_data,
      family: family_data,
      home: home_data,
      movement: movement_data,
      room: room_data,
      toilet: toilet_data,
      consulter: consulter_data,
      emergencyContact: emergencyContact_data,
    };
  }

  // 評価を削除
  // async deleteAssessment(id: number): Promise<Assessment> {
  //   return this.prisma.assessment.delete({ where: { id } });
  // }
}
