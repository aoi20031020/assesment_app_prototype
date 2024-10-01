import { NestFactory } from '@nestjs/core';
import { Transport, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module'; // まとめたAppModuleをインポート

async function bootstrap() {
  const app = await NestFactory.createMicroservice<GrpcOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5000',
      package: 'user', // 複数のgRPCサービスを指定
      protoPath: join(__dirname, '../proto/user.proto'), // protoファイルのパス
    },
  });
  await app.listen();
  console.log('gRPC server is listening on localhost:5000');
}
bootstrap().catch((err) => {
  console.error('Failed to start gRPC server', err);
  process.exit(1);
});
