import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';
import {
  GetUserByIdRequest,
  GetUserByIdResponse,
  CreateUserRequest,
  User,
} from '../proto/user';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'GetUserById') // メソッド名を指定
  async getUserById(data: GetUserByIdRequest): Promise<GetUserByIdResponse> {
    const user = await this.userService.getUserById(data); // UserService の getUserById メソッドを呼び出し
    return user; // UserService の getUserById メソッドが既に GetUserByIdResponse を返すと仮定
  }

  @GrpcMethod('UserService', 'CreateUser')
  async createUser(data: CreateUserRequest): Promise<User> {
    return this.userService.createUser(data); // UserService の createUser メソッドを呼び出し
  }
}
