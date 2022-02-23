import {
  Controller,
  Query,
  Get,
  Body,
  Post,
  Res,
  HttpCode,
  BadRequestException,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/errors')
  @HttpCode(400)
  public async error(status: Number, message: String): Promise<any> {
    return message;
  }

  @Get('')
  public async getAllUser(): Promise<User[]> {
    const result: User[] = await this.userService.getAllUser();

    return result;
  }

  @Post('')
  public async create(@Body() data: CreateUserDto) {
    const { fullname, email, username, password, re_password } = data;
    if (password !== re_password) {
      throw new BadRequestException('Password and re_password is not same');
    }
    let result = await this.userService.create({
      fullname,
      email,
      username,
      password,
    });

    if (result.type === 'string') {
      throw new BadRequestException(result);
    }
  }
}
