import { faker } from '@faker-js/faker';
import { addProduct, getProducts } from './product/product.service';

for (let i = 0; i < 5; i++) {
  addProduct({
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
    image: faker.image.url(),
    price: parseInt(faker.commerce.price()),
    stock: faker.number.int({ min: 10, max: 100 }),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    tags: faker.helpers.arrayElements([
      'Clothing',
      'Shoes',
      'Electronics',
      'Home & Garden',
      'Toys & Games',
    ]),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  });
}

console.log(getProducts());
