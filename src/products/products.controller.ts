import { ProductService } from './products.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './products.model';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(@Body() product): Promise<Product> {
    this.productService.createProduct(product);
    return product;
  }
  @Put('/:id')
  async updateProduct(@Body() product: Product): Promise<[number, Product[]]> {
    return this.productService.updateProduct(product);
  }
  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }

  @Get('/:id')
  async getSingleProduct(@Param() product): Promise<Product> {
    return this.productService.getSingleProduct(product.id);
  }
  @Delete('/:id')
  async deleteProduct(@Param() params) {
    this.productService.deleteProduct(params.id);
  }
}
