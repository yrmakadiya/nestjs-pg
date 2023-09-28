import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: User) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
    return await this.userService.create(user);

    // compare password code

    // const match = await bcrypt.compare(password, user.password);
    // if (match) return 'Credentials are correct!';
    // return 'Invalid Credentials!';
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser: User) {
    return this.userService.update(+id, updateUser);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
