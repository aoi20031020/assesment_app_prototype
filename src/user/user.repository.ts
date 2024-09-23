import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User, Post } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: { posts: true }, // UserとPostを一緒に取得
    });
  }

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: { posts: true }, // Userとその投稿を取得
    });
  }

  async createUser(name: string, email: string): Promise<User> {
    return this.prisma.user.create({
      data: {
        name,
        email,
      },
    });
  }

  async createPost(
    userId: number,
    title: string,
    content: string,
  ): Promise<Post> {
    return this.prisma.post.create({
      data: {
        title,
        content,
        userId,
      },
    });
  }

  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
