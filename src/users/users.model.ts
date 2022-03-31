import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password: string;
}
