import { faker } from '@faker-js/faker';
import { InMemoryProductService } from './product/service/in-memory';
import { HttpProductService } from './product/service/http';

(() => {
  console.log('\n===== Testing InMemoryProductService =====\n');

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
})();

(async () => {
  console.log('\n===== Testing HttpProductService =====\n');

  const service = new HttpProductService();
  const products = await service.findAll();

  console.log(
    'Products:\n' + products.map((p) => `  - (${p.id}) ${p.title}\n`).join(''),
  );

  let product = await service.create({
    title: faker.commerce.product(),
    price: parseInt(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    images: [faker.image.url()],
    categoryId: 1,
  });

  console.log('New product:', product);

  const productId = products[0].id;
  await service.update(productId, {
    title: 'Quipitos',
    description: 'Colombian candy',
    price: 1000,
  });
  product = await service.find(productId);

  console.log('Updated product:', product);
})();
