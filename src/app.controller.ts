import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * 라우트(getHello)가 있는 기본 컨트롤러
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
