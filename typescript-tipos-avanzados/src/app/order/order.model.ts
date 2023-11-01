import { Model } from '../base.model';
import { Product } from '../product/product.model';
import { User } from '../user/user.model';

export interface Order extends Model {
  products: Product[];
  user: User;
}
