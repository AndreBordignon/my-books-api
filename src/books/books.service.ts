import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './books.model';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book)
    private booksModel: typeof Book,
  ) {}

  async getAllBooks(): Promise<Book[]> {
    return this.booksModel.findAll();
  }

  async getSingleBook(id: number): Promise<Book> {
    return this.booksModel.findByPk(id);
  }

  async createBook(book: Book) {
    return this.booksModel.create(book);
  }
  async updateBook(book: Book): Promise<[number, Book[]]> {
    return this.booksModel.update(book, {
      where: {
        id: book.id,
      },
    });
  }
  async deleteBook(id: number) {
    const book: Book = await this.getSingleBook(id);
    book.destroy();
  }
}
