import { faker } from '@faker-js/faker';
import { CreateProductInput, UpdateProductInput } from '../product.dto';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

export class InMemoryProductService implements ProductService {
  private collection: Product[] = [];

  public find(id: Product['id']): Product | undefined {
    return this.collection.find((p) => p.id === id);
  }

  public findAll(): Product[] {
    return this.collection;
  }

  public create(input: CreateProductInput): Product {
    const product: Product = {
      ...input,
      id: faker.number.int(),
      creationAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: input.categoryId,
        name: faker.commerce.department(),
        image: faker.image.url(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    };

    this.collection.push(product);
    return product;
  }

  public update(
    id: Product['id'],
    input: UpdateProductInput,
  ): Product | undefined {
    const index = this.collection.findIndex((p) => p.id === id);
    if (index === -1) {
      return undefined;
    }

    const product = this.collection[index];
    return (this.collection[index] = {
      ...product,
      ...input,
    });
  }
}
