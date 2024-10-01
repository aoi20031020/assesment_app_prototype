import { Injectable } from '@nestjs/common';
import {
  UserServiceController,
  GetUserByIdRequest,
  GetUserByIdResponse,
  CreateUserRequest,
  User,
} from '../protogen/user';
import { UserRepository } from './user.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService implements UserServiceController {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly prisma: PrismaService,
  ) {}

  async getUserById(request: GetUserByIdRequest): Promise<GetUserByIdResponse> {
    const user = await this.userRepository.findById(request.id); // リクエストからIDを取得
    if (!user) {
      throw new Error('User not found'); // ユーザーが見つからない場合はエラーをスロー
    }
    return { user: this.mapUserToProto(user) };
  }

  async createUser(request: CreateUserRequest): Promise<User> {
    const newUser = await this.userRepository.createUser(
      request.name,
      request.email,
    ); // リクエストから名前とメールアドレスを取得
    return this.mapUserToProto(newUser); // 新しいユーザーを返す
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
    }; // ユーザーオブジェクトをUserプロトコルバッファにマッピング
  }
}
