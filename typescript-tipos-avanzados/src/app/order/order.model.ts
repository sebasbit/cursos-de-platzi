import { Product } from '../product/product.model';
import { User } from '../user/user.model';

export interface Order {
  id: string | number;
  createdAt: Date;
  products: Product[];
  user: User;
}
