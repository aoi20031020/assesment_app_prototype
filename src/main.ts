import { NestFactory } from '@nestjs/core';
import { Transport, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';
import { UserModule } from './user/user.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<GrpcOptions>(UserModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5000',
      package: 'user',
      protoPath: join(__dirname, '../proto/user.proto'),
    },
  });
  await app.listen();
  console.log('gRPC server is listening on localhost:5000');
}
bootstrap().catch((err) => {
  console.error('Failed to start gRPC server', err);
  process.exit(1);
});
