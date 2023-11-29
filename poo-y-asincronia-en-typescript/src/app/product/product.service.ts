import { CreateProductInput, UpdateProductInput } from './product.dto';
import { Product } from './product.model';

export interface ProductService {
  find(id: Product['id']): Product | Promise<Product> | undefined;
  findAll(): Product[] | Promise<Product[]>;
  create(input: CreateProductInput): Product | Promise<Product>;
  update(
    id: Product['id'],
    input: UpdateProductInput,
  ): Product | Promise<Product> | undefined;
}
