import { Module } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { AssessmentController } from './assessment.controller';
import { UserAssessmentRepository } from './assessmentRepogitory/userAssessment.repository';
import { PrismaService } from '../../prisma/prisma.service';
import { ServiceAssessmentRepository } from './assessmentRepogitory/serviceAssessment.repository';

@Module({
  controllers: [AssessmentController],
  providers: [
    AssessmentService,
    UserAssessmentRepository,
    ServiceAssessmentRepository,
    PrismaService,
  ],
})
export class AssessmentModule {}
