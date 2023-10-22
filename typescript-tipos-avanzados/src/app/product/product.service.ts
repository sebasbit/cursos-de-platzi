import { Product } from './product.model';

const collection: Product[] = [];

export const addProduct = (product: Product): void => {
  // product.id = 'another-id'; // Don't do this
  // product.createdAt = new Date(); // Don't do this
  collection.push(product);
};

export const getProducts = (): Product[] => {
  return collection;
};

export const getProduct = (id: string | number): Product | undefined => {
  return collection.find((p) => p.id === id);
};
