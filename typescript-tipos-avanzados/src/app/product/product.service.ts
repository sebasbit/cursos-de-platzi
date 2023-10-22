import { Product } from './product.model';

const collection: Product[] = [];

export const addProduct = (product: Product): void => {
  collection.push(product);
};

export const getProduct = (id: string | number): Product | undefined => {
  return collection.find((p) => p.id === id);
};
