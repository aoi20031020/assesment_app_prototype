import { Module } from '@nestjs/common';
import { DemoModule } from './demo/demo.module'; // ドメインモジュールをインポート

@Module({
  imports: [DemoModule], // すべてのモジュールをここに追加
})
export class AppModule {}
