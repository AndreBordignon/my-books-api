import { BookService } from './books.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './books.model';

@Controller('books')
export class BooksController {
  constructor(private bookService: BookService) {}

  @Post()
  async createBook(@Body() book): Promise<Book> {
    this.bookService.createBook(book);
    return book;
  }
  @Put('/:id')
  async updateBook(@Body() book: Book): Promise<[number, Book[]]> {
    return this.bookService.updateBook(book);
  }
  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.getAllBooks();
  }

  @Get('/:id')
  async getSingleBook(@Param() book): Promise<Book> {
    return this.bookService.getSingleBook(book.id);
  }
  @Delete('/:id')
  async deleteBook(@Param() params) {
    this.bookService.deleteBook(params.id);
  }
}
