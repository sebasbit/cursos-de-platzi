import { Product } from './product.model';

const products: Product[] = [];

export const saveProduct = (product: Product): void => {
  products.push(product);
};

export const getProducts = (): Product[] => products;

export const calcStock = (): number => {
  let stock = 0;
  products.forEach((p) => stock += p.stock);
  return stock;
};
