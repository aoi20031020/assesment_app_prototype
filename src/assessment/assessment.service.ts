// import { Injectable } from '@nestjs/common';
// import {
//   AssessmentServiceController,
//   CreateAssessmentRequest,
//   CreateAssessmentResponse,
//   GetAssessmentByInsuranceNumberRequest,
//   GetAssessmentByInsuranceNumberResponse,
// } from 'src/protogen/assessment';
// import { PrismaService } from '../../prisma/prisma.service';
// import { AssessmentRepository } from './assessment.repository'; // AssessmentRepository を適切にインポート
// import { mapAssessmentToProto } from './assessment-mapper';

// @Injectable()
// export class AssessmentService implements AssessmentServiceController {
//   constructor(
//     private readonly assessmentRepository: AssessmentRepository,
//     private readonly prisma: PrismaService,
//   ) {}

//   // 被保険者番号で評価を取得
//   async getAssessmentByInsuranceNumber(
//     request: GetAssessmentByInsuranceNumberRequest,
//   ): Promise<GetAssessmentByInsuranceNumberResponse> {
//     const assessment = await this.assessmentRepository.findByInsuranceNumber(
//       request.insuranceNumber,
//     );
//     if (!assessment) {
//       throw new Error('User not found');
//     }
//     return mapAssessmentToProto(assessment); // マッピング関数を使用
//   }

//   // 新しい評価を作成
//   async createAssessment(
//     request: CreateAssessmentRequest,
//   ): Promise<CreateAssessmentResponse> {
//     try {
//       await this.assessmentRepository.createAssessment({
//         insuredPerson: request.insuredPerson,
//         emergencyContact: request.emergencyContact,
//         contact: request.contact,
//         familyStructure: request.familyStructure,
//         residenceInfo: request.residenceInfo,
//         toiletInfo: request.toiletInfo,
//         bathroomInfo: request.bathroomInfo,
//         mobilityInfo: request.mobilityInfo,
//       });

//       return { success: true }; // 成功時
//     } catch (error) {
//       console.error('Error creating assessment:', error);
//       return { success: false }; // エラー時
//     }
//   }
// }
