import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DemoService } from './demo.service';
import {
  GetUserByIdRequest,
  GetUserByIdResponse,
  CreateUserRequest,
  User,
  GetAllUserResponse,
  DeleteUserResponse,
  DeleteUserRequest,
} from '../protogen/demo';

@Controller()
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @GrpcMethod('DemoService', 'GetAllUser')
  async getAllUser(): Promise<GetAllUserResponse> {
    return this.demoService.getAllUser();
  }

  @GrpcMethod('DemoService', 'GetUserById') // メソッド名を指定
  async getUserById(data: GetUserByIdRequest): Promise<GetUserByIdResponse> {
    const user = await this.demoService.getUserById(data); // UserService の getUserById メソッドを呼び出し
    return user; // UserService の getUserById メソッドが既に GetUserByIdResponse を返すと仮定
  }

  @GrpcMethod('DemoService', 'CreateUser')
  async createUser(data: CreateUserRequest): Promise<User> {
    return this.demoService.createUser(data); // UserService の createUser メソッドを呼び出し
  }

  @GrpcMethod('DemoService', 'DeleteUser') // メソッド名を指定
  async DeleteUser(data: DeleteUserRequest): Promise<DeleteUserResponse> {
    const user = await this.demoService.deleteUser(data); // UserService の getUserById メソッドを呼び出し
    return user; // UserService の getUserById メソッドが既に GetUserByIdResponse を返すと仮定
  }
}
