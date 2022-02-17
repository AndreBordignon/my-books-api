import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product('Produto 1', 10, 'Descrição do produto 1'),
    new Product('Produto 2', 30, 'Descrição do produto 2'),
    new Product('Produto 3', 50, 'Descrição do produto 3'),
  ];

  @Post()
  createProduct(@Body() product): string {
    product.id = this.products.length + 1;
    this.products.push(product);
    return `created a new product`;
  }
  @Put()
  updateProduct(@Body() body: Product): string {
    return `created a new product ${body}`;
  }
  @Get()
  getAllProducts(): Product[] {
    return this.products;
  }

  @Get('/:id')
  getSingleProduct(@Param() params): Product {
    return this.products[params.id];
  }
  @Delete('/:id')
  deleteProduct(@Param() params) {
    this.products.pop();
  }
}
