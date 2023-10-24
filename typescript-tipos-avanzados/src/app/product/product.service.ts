import { faker } from '@faker-js/faker';
import {
  AddProductInput,
  GetProductInput,
  UpdateProductInput,
} from './product.dto';
import { Product } from './product.model';

const collection: Product[] = [];

export const getProducts = (filter?: GetProductInput): Product[] => {
  if (filter === undefined) {
    return collection;
  }

  return collection.filter((product) => {
    let key: keyof Product;
    for (key in filter) {
      if (product[key] === filter[key]) {
        return true;
      }
    }

    return false;
  });
};

export const getProduct = (id: string): Product | undefined => {
  return collection.find((p) => p.id === id);
};

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

export const updateProduct = (
  id: string,
  input: UpdateProductInput,
): Product | undefined => {
  const index = collection.findIndex((p) => p.id === id);
  if (index === -1) {
    return undefined;
  }

  const product = collection[index];
  return (collection[index] = {
    ...product,
    ...input,
  });
};
