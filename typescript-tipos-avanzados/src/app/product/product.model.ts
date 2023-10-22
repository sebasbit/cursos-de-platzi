import { Category } from '../category/category.model';

export type Size = 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id: ID;
  name: string;
  stock: number;
  size: Size;
  createdAt: Date;
  category: Category;
}
