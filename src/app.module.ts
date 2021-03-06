import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { BooksController } from './books/books.controller';
import { BookService } from './books/books.service';
import { Book } from './books/books.model';
import { UsersController } from './users/users.controller';
import { UserService } from './users/users.service';
import { User } from './users/users.model';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'books',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Book, User]),
  ],
  controllers: [BooksController, UsersController],
  providers: [AppService, BookService, UserService],
})
export class AppModule {}
