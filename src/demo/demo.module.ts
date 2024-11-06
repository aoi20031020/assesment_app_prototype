import { Module } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { DemoRepository } from './demo.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [DemoController],
  providers: [DemoService, DemoRepository, PrismaService],
})
export class DemoModule {}
