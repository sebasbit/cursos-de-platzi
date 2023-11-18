import { Category } from '../category/category.model';
import { Product } from './product.model';

export interface CreateProductInput
  extends Omit<Product, 'id' | 'creationAt' | 'updatedAt' | 'category'> {
  categoryId: Category['id'];
}

export interface UpdateProductInput extends Partial<CreateProductInput> {}
