import { Injectable } from '@nestjs/common';
import { UserAssessmentRepository } from './assessmentRepogitory/userAssessment.repository';
import { ServiceAssessmentRepository } from './assessmentRepogitory/serviceAssessment.repository';
import {
  CreateAssessmentRequest,
  CreateAssessmentResponse,
  GetAssessmentByInsuranceNumberRequest,
  GetAssessmentByInsuranceNumberResponse,
  User,
} from 'src/protogen/assessment';

@Injectable()
export class AssessmentService {
  constructor(
    private readonly userAssessmentRepository: UserAssessmentRepository,
    private readonly serviceAssessmentRepository: ServiceAssessmentRepository,
  ) {}

  async getAssessmentByInsuranceNumber(
    data: GetAssessmentByInsuranceNumberRequest,
  ): Promise<GetAssessmentByInsuranceNumberResponse> {
    const user = await this.userAssessmentRepository.findByInsuranceNumber(
      data.insuranceNumber,
    );
    return {
      user: user,
    };
  }

  async createAssessment(
    data: CreateAssessmentRequest,
  ): Promise<CreateAssessmentResponse> {
    const user_data: User =
      await this.userAssessmentRepository.createAssessment(
        data.user.insuredId,
        data.user.name,
        data.user.telephoneNumber,
        data.user.mobileNumber,
        data.user.age,
        data.user.sex,
        data.user.address,
        data.user.requestedDate,
        data.user.emergencyId,
        data.user.consulterId,
        data.user.bathroom,
        data.user.equipment,
        data.user.family,
        data.user.home,
        data.user.movement,
        data.user.room,
        data.user.toilet,
        data.user.consulter,
        data.user.emergencyContact,
      );
    const service_data =
      await this.serviceAssessmentRepository.createAssessment(
        user_data.insuredId,
        data.service.name,
        data.service.date,
        data.service.athome,
        data.service.dailylifeindependenceLevel,
        data.service.disabilitynotebook,
        data.service.eligibility,
        data.service.independencesupportmedicalexpenses,
        data.service.mentaldisabilitycertificate,
        data.service.specialeducationrecordbook,
        data.service.using,
        data.service.wants,
      );
    return {
      user: user_data,
      service: service_data,
    };
  }
}
