import { ProductService } from './product.service';
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
  constructor(private productService: ProductService) {}

  @Post()
  createProduct(@Body() product): string {
    this.productService.createProduct(product);
    return `created a new product`;
  }
  @Put('/:id')
  updateProduct(@Body() product: Product): Product {
    return this.productService.updateProduct(product);
  }
  @Get()
  getAllProducts(): Product[] {
    return this.productService.getAllProducts();
  }

  @Get('/:id')
  getSingleProduct(@Param() product): Product {
    return this.productService.getSingleProduct(product.id);
  }
  @Delete('/:id')
  deleteProduct(@Param() params) {
    this.productService.deleteProduct(params.id);
  }
}
