import { Model } from '../base.model';
import { Category } from '../category/category.model';

export type Size = 'S' | 'M' | 'L' | 'XL';

export interface Product extends Model {
  name: string;
  description: string;
  size: Size;
  color: string;
  image: string;
  price: number;
  stock: number;
  category: Category;
  tags: string[];
}
