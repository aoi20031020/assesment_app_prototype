import { Injectable } from '@nestjs/common';
import {
  DemoServiceController,
  GetUserByIdRequest,
  GetUserByIdResponse,
  CreateUserRequest,
  User,
  GetAllUserResponse,
  DeleteUserRequest,
  DeleteUserResponse,
} from '../protogen/demo';
import { DemoRepository } from './demo.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DemoService implements DemoServiceController {
  constructor(
    private readonly demoRepository: DemoRepository,
    private readonly prisma: PrismaService,
  ) {}

  async getAllUser(): Promise<GetAllUserResponse> {
    const users = await this.demoRepository.findAll();
    if (!users) {
      throw new Error('Users not found');
    }
    return { users: users.map(this.mapUserToProto) };
  }

  async getUserById(request: GetUserByIdRequest): Promise<GetUserByIdResponse> {
    const user = await this.demoRepository.findById(request.id); // リクエストからIDを取得
    if (!user) {
      throw new Error('User not found'); // ユーザーが見つからない場合はエラーをスロー
    }
    return { user: this.mapUserToProto(user) };
  }

  async createUser(request: CreateUserRequest): Promise<User> {
    const newUser = await this.demoRepository.createUser(
      request.name,
      request.age,
      request.email,
    ); // リクエストから名前とメールアドレスを取得
    return this.mapUserToProto(newUser); // 新しいユーザーを返す
  }

  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    const user = await this.demoRepository.deleteUser(request.id); // リクエストからIDを取得
    if (!user) {
      throw new Error('User not found'); // ユーザーが見つからない場合はエラーをスロー
    }
    return { success: true }; // 成功を返す
  }

  private mapUserToProto(user: any): User {
    return {
      id: user.id,
      name: user.name,
      age: user.age,
      email: user.email,
    }; // ユーザーオブジェクトをUserプロトコルバッファにマッピング
  }
}
