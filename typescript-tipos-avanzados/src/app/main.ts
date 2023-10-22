import { faker } from '@faker-js/faker';
import { addProduct, getProducts } from './product/product.service';

for (let i = 0; i < 5; i++) {
  addProduct({
    // id: faker.string.uuid() // Don't do this
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
    image: faker.image.url(),
    price: parseInt(faker.commerce.price()),
    stock: faker.number.int({ min: 10, max: 100 }),
    tags: faker.helpers.arrayElements([
      'Clothing',
      'Shoes',
      'Electronics',
      'Home & Garden',
      'Toys & Games',
    ]),
    categoryId: faker.string.uuid(),
  });
}

console.log(getProducts());
