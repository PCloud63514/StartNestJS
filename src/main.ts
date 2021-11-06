import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * NestFactory를 사용하여 어플리케이션의 인스턴스를 생성하는 앤트리 파일.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
