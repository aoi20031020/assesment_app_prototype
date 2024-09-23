import { Injectable } from '@nestjs/common';
import {
  UserServiceController,
  GetUserByIdRequest,
  GetUserByIdResponse,
  CreateUserRequest,
  User,
} from '../proto/user';
import { UserRepository } from './user.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService implements UserServiceController {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly prisma: PrismaService,
  ) {}

  async getUserById(request: GetUserByIdRequest): Promise<GetUserByIdResponse> {
    const user = await this.userRepository.findById(request.id);
    if (!user) {
      throw new Error('User not found');
    }
    return { user: this.mapUserToProto(user) };
  }

  async createUser(request: CreateUserRequest): Promise<User> {
    const newUser = await this.userRepository.createUser(
      request.name,
      request.email,
    );
    return this.mapUserToProto(newUser);
  }

  private mapUserToProto(user: any): User {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      posts:
        user.posts?.map((post) => ({
          id: post.id,
          title: post.title,
          content: post.content,
        })) || [],
    };
  }
}
