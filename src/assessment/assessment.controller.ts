// import { Controller } from '@nestjs/common';
// import { GrpcMethod } from '@nestjs/microservices';
// import { AssessmentService } from './assessment.service'; // Import AssesmentService
// import {
//   CreateAssessmentRequest,
//   CreateAssessmentResponse,
//   GetAssessmentByInsuranceNumberRequest,
//   GetAssessmentByInsuranceNumberResponse,
// } from 'src/protogen/assessment';

// @Controller()
// export class AssessmentController {
//   constructor(private readonly assessmentService: AssessmentService) {}

//   @GrpcMethod('AssessmentService', 'GetAssessmentByinsuranceNumber') // メソッド名を指定
//   async getAssessmentByinsuranceNumber(
//     data: GetAssessmentByInsuranceNumberRequest,
//   ): Promise<GetAssessmentByInsuranceNumberResponse> {
//     const assessment =
//       await this.assessmentService.getAssessmentByInsuranceNumber(data); // UserService の getUserById メソッドを呼び出し
//     return assessment; // UserService の getUserById メソッドが既に GetUserByIdResponse を返すと仮定
//   }

//   @GrpcMethod('AssessmentService', 'CreateAssessment')
//   async createAssessment(
//     data: CreateAssessmentRequest,
//   ): Promise<CreateAssessmentResponse> {
//     return this.assessmentService.createAssessment(data); // UserService の createUser メソッドを呼び出し
//   }
// }
