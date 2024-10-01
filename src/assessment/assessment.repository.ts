import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
// import {
//   Assessment,
//   InsuredPerson,
//   EmergencyContact,
//   Contact,
//   FamilyStructure,
//   ResidenceInfo,
//   ToiletInfo,
//   BathroomInfo,
//   MobilityInfo,
// } from '@prisma/client';

@Injectable()
export class AssessmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  // // すべての評価を取得
  // async findAll(): Promise<Assessment[]> {
  //   return this.prisma.assessment.findMany({
  //     include: {
  //       insuredPerson: true,
  //       emergencyContact: true,
  //       contact: true,
  //       familyStructure: true,
  //       residenceInfo: true,
  //       toiletInfo: true,
  //       bathroomInfo: true,
  //       mobilityInfo: true,
  //     },
  //   });
  // }

  // // 被保険者番号で評価を取得
  // async findByInsuranceNumber(
  //   insuranceNumber: string,
  // ): Promise<Assessment | null> {
  //   return this.prisma.assessment.findUnique({
  //     where: { insuranceNumber },
  //     include: {
  //       insuredPerson: true,
  //       emergencyContact: true,
  //       contact: true,
  //       familyStructure: true,
  //       residenceInfo: true,
  //       toiletInfo: true,
  //       bathroomInfo: true,
  //       mobilityInfo: true,
  //     },
  //   });
  // }

  // // 新しい評価を作成
  // async createAssessment(data: {
  //   insuredPerson: InsuredPerson;
  //   emergencyContact: EmergencyContact;
  //   contact: Contact;
  //   familyStructure: FamilyStructure;
  //   residenceInfo: ResidenceInfo;
  //   toiletInfo: ToiletInfo;
  //   bathroomInfo: BathroomInfo;
  //   mobilityInfo: MobilityInfo;
  // }): Promise<Assessment> {
  //   return this.prisma.assessment.create({
  //     data,
  //   });
  // }

  // // 評価を削除
  // async deleteAssessment(id: number): Promise<Assessment> {
  //   return this.prisma.assessment.delete({ where: { id } });
  // }
}
