import { UserService } from './users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './users.model';

@Controller('users')
export class UsersController {
  private userService = new UserService(User);

  @Post()
  async createUser(@Body() user): Promise<string> {
    try {
      if (!user.password || !user.name) {
        throw new Error();
      }
      this.userService.createUser(user);
      return user;
    } catch (err) {
      return 'An error occured while creating user';
    }
  }

  @Get('/:id')
  async getUser(@Param() user): Promise<User> {
    return this.userService.getSingleUser(user.id);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Put('/:id')
  async updateUser(@Body() user: User): Promise<string> {
    try {
      if (user.id === undefined) {
        throw new Error();
      }
      this.userService.updateUser(user);
      return 'User updated successfully';
    } catch (err) {
      return 'An error occured';
    }
  }
}
