import { faker } from '@faker-js/faker';
import { InMemoryProductService } from './product/service/in-memory';

const service = new InMemoryProductService();

service.create({
  title: faker.commerce.product(),
  price: parseInt(faker.commerce.price()),
  description: faker.commerce.productDescription(),
  images: [faker.image.url()],
  categoryId: 1,
});

const products = service.findAll();

console.log('Products:', products);

const productId = products[0].id;
service.update(productId, { title: 'Quipitos', price: 1000 });
const product = service.find(productId);

console.log('Updated product:', product);
