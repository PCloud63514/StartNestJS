import { Injectable } from '@nestjs/common';

/**
 * @Injectable()
 * 종속성 주입 어노테이션.
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
