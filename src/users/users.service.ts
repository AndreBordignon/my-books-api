import { Catch, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { error } from 'console';
import { User } from './users.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private usersModel: typeof User,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.usersModel.findAll();
  }

  async getSingleUser(id: number): Promise<User> {
    return this.usersModel.findByPk(id);
  }

  async createUser(user: User) {
    try {
      if (user === undefined) {
        throw new Error();
      }
      this.usersModel.create(user);
      return user;
    } catch (err) {
      return 'Error occured while creating user';
    }
  }
  async updateUser(user: User): Promise<string> {
    try {
      this.usersModel.update(user, {
        where: {
          id: user.id,
        },
      });
      return 'User updated successfully';
    } catch (err) {
      return 'An error occured';
    }
  }
}
