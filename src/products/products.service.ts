import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  async getSingleProduct(id: number): Promise<Product> {
    return this.productModel.findByPk(id);
  }

  async createProduct(product: Product) {
    return this.productModel.create(product);
  }
  async updateProduct(product: Product): Promise<[number, Product[]]> {
    return this.productModel.update(product, {
      where: {
        id: product.id,
      },
    });
  }
  async deleteProduct(id: number) {
    const product: Product = await this.getSingleProduct(id);
    product.destroy();
  }
}
