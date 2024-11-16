import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Demo } from '@prisma/client';

@Injectable()
export class DemoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Demo[]> {
    console.log('repository');
    return this.prisma.demo.findMany();
  }

  async findById(id: number): Promise<Demo | null> {
    console.log('repository');
    return this.prisma.demo.findUnique({
      where: { id },
    });
  }

  async createUser(name: string, age: number, email: string): Promise<Demo> {
    console.log('repository');
    return this.prisma.demo.create({
      data: {
        name,
        age,
        email,
      },
    });
  }

  async deleteUser(id: number): Promise<Demo> {
    console.log('repository');
    return this.prisma.demo.delete({ where: { id } });
  }
}
