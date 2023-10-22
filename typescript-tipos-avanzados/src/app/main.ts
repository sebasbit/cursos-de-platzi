import { Order } from './order/order.model';
import { Product } from './product/product.model';
import { addProduct, getProduct } from './product/product.service';
import { Role } from './user/user.model';

const product: Product = {
  id: 1,
  name: 'Blouse',
  stock: 10,
  size: 'M',
  category: {
    id: 1,
    name: 'Sportswear',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  createdAt: new Date(),
  updatedAt: new Date(),
};

addProduct(product);

console.log(getProduct(1));

const order: Order = {
  id: 1,
  products: [product],
  user: {
    id: 1,
    username: 'pepito',
    role: Role.Customer,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  createdAt: new Date(),
  updatedAt: new Date(),
};

console.log(order);
