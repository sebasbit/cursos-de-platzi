import { faker } from '@faker-js/faker';
import { AddProductInput } from './product.dto';
import { Product } from './product.model';

const collection: Product[] = [];

export const addProduct = (input: AddProductInput): Product => {
  const product: Product = {
    ...input,
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: input.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };

  // product.id = 'another-id'; // Don't do this
  // product.createdAt = new Date(); // Don't do this
  collection.push(product);
  return product;
};

export const getProducts = (): Product[] => {
  return collection;
};

export const getProduct = (id: string | number): Product | undefined => {
  return collection.find((p) => p.id === id);
};
