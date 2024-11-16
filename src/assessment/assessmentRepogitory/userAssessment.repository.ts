import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
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
    console.log('UserRepository');
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
    console.log('UserRepository');

    // Consulterをupsert
    const consulter_data = await this.prisma.consulter.upsert({
      where: { consulterId: consulterId },
      update: { ...consulter },
      create: { ...consulter },
    });
    // EmergencyContactをupsert
    const emergencyContact_data = await this.prisma.emergencyContact.upsert({
      where: { emergencyId: emergencyId },
      update: { ...emergencyContact },
      create: { ...emergencyContact },
    });
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

    const [
      bathroom_data,
      equipment_data,
      family_data,
      home_data,
      movement_data,
      room_data,
      toilet_data,
    ] = await Promise.all([
      this.prisma.bathroom.create({
        data: {
          userId: user_data.id,
          ...bathroom,
        },
      }),
      this.prisma.equipment.create({
        data: {
          userId: user_data.id,
          ...equipment,
        },
      }),
      this.prisma.family.create({
        data: {
          userId: user_data.id,
          ...family,
        },
      }),
      this.prisma.home.create({
        data: {
          userId: user_data.id,
          ...home,
        },
      }),
      this.prisma.movement.create({
        data: {
          userId: user_data.id,
          ...movement,
        },
      }),
      this.prisma.room.create({
        data: {
          userId: user_data.id,
          ...room,
        },
      }),
      this.prisma.toilet.create({
        data: {
          userId: user_data.id,
          ...toilet,
        },
      }),
    ]);

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
