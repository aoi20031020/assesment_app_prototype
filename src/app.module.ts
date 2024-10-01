import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module'; // ドメインモジュールをインポート

@Module({
  imports: [UserModule], // すべてのモジュールをここに追加
})
export class AppModule {}
