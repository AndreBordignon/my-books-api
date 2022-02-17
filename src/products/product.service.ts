import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product('Produto 1', 10, 'Descrição do produto 1'),
    new Product('Produto 2', 30, 'Descrição do produto 2'),
    new Product('Produto 3', 50, 'Descrição do produto 3'),
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getSingleProduct(id: number): Product {
    return this.products[id];
  }

  createProduct(product: Product): string {
    this.products.push(product);
    return `created a new product`;
  }
  updateProduct(product: Product): Product {
    return product;
  }
  deleteProduct(product: Product) {
    this.products.pop();
  }
}
