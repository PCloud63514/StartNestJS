import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { JoinUserForm, UpdateUserForm } from '../dto/form';

// https://docs.nestjs.kr/controllers

/**
 * @Controller('prefix') : @RequestMapping & @Controller를 합친 형태
 * @Get : @GetMapping
 * @Post : @PostMapping
 * @Patch : @PatchMapping
 * @Delete : @DeleteMapping
 * @Param : @PathVariable
 * @Req : @RequestParam
 */

@Controller('user')
export class UserController {
  @Get(':userId')
  searchUser(@Param('userId') userId: string): string {
    return '';
  }

  @Post()
  joinUser(@Body() form: JoinUserForm): string {
    return '';
  }

  @Patch()
  updateUser(@Body() form: UpdateUserForm): string {
    return '';
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string): string {
    return '';
  }
}
