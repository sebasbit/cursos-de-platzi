import { Model } from '../base.model';
import { Category } from '../category/category.model';

export type Size = 'S' | 'M' | 'L' | 'XL';

export interface Product extends Model {
  name: string;
  stock: number;
  size: Size;
  category: Category;
}
