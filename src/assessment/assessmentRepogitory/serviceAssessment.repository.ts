import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { $Enums } from '@prisma/client';
import {
  Service,
  Using,
  Wants,
  Eligibility,
  DisabilityNotebook,
  SpecialEducationRecordBook,
  MentalDisabilityCertificate,
  IndependenceSupportMedicalExpenses,
  DailyLifeIndependenceLevel,
  AtHome,
  Level as TLevel,
} from 'src/protogen/assessment';

@Injectable()
export class ServiceAssessmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  // 新しい評価を作成
  async createAssessment(
    insuredId: number,
    name: string,
    date: string,
    athome: AtHome,
    dailylifeindependenceLevel: DailyLifeIndependenceLevel,
    disabilitynotebook: DisabilityNotebook,
    eligibility: Eligibility,
    independencesupportmedicalexpenses: IndependenceSupportMedicalExpenses,
    mentaldisabilitycertificate: MentalDisabilityCertificate,
    specialeducationrecordbook: SpecialEducationRecordBook,
    using: Using,
    wants: Wants,
  ): Promise<Service> {
    const service_data = await this.prisma.service.create({
      data: {
        insuredId,
        name,
        date,
      },
    });
    const atHome_data = await this.prisma.atHome.create({
      data: {
        userId: service_data.id,
        ...athome,
      },
    });
    const dailyLifeIndependenceLevel_data =
      await this.prisma.dailyLifeIndependenceLevel.create({
        data: {
          userId: service_data.id,
          ...dailylifeindependenceLevel,
        },
      });
    const disabilityNotebook_data = await this.prisma.disabilityNotebook.create(
      {
        data: {
          userId: service_data.id,
          ...disabilitynotebook,
        },
      },
    );
    const eligibility_data = await this.prisma.eligibility.create({
      data: {
        serviceId: service_data.id,
        ...eligibility,
        level: eligibility.level as unknown as $Enums.Level,
      },
    });
    const independenceSupportMedicalExpenses_data =
      await this.prisma.independenceSupportMedicalExpenses.create({
        data: {
          userId: service_data.id,
          ...independencesupportmedicalexpenses,
        },
      });
    const mentalDisabilityCertificate_data =
      await this.prisma.mentalDisabilityCertificate.create({
        data: {
          userId: service_data.id,
          ...mentaldisabilitycertificate,
        },
      });
    const specialEducationRecordBook_data =
      await this.prisma.specialEducationRecordBook.create({
        data: {
          userId: service_data.id,
          ...specialeducationrecordbook,
        },
      });
    const using_data = await this.prisma.using.create({
      data: {
        userId: service_data.id,
        ...using,
      },
    });
    const wants_data = await this.prisma.wants.create({
      data: {
        userId: service_data.id,
        ...wants,
      },
    });

    return {
      ...service_data,
      date: service_data.date.toISOString(),
      athome: {
        ...atHome_data,
        date: atHome_data.date.toISOString(),
      },
      dailylifeindependenceLevel: dailyLifeIndependenceLevel_data,
      disabilitynotebook: {
        ...disabilityNotebook_data,
        date: disabilityNotebook_data.date.toISOString(),
      },
      eligibility: {
        ...eligibility_data,
        level: eligibility.level as unknown as TLevel,
        date: eligibility_data.date.toISOString(),
      },
      independencesupportmedicalexpenses:
        independenceSupportMedicalExpenses_data,
      mentaldisabilitycertificate: {
        ...mentalDisabilityCertificate_data,
        date: mentalDisabilityCertificate_data.date.toISOString(),
      },
      specialeducationrecordbook: {
        ...specialEducationRecordBook_data,
        date: specialEducationRecordBook_data.date.toISOString(),
      },
      using: using_data,
      wants: wants_data,
    };
  }
}
