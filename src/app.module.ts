import { Module } from '@nestjs/common';
import { DemoModule } from './demo/demo.module'; // ドメインモジュールをインポート
import { AssessmentModule } from './assessment/assessment.module';

@Module({
  imports: [DemoModule, AssessmentModule], // すべてのモジュールをここに追加
})
export class AppModule {}
