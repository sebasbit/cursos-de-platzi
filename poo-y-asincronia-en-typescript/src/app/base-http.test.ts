import { Category } from './category/category.model';
import { UpdateProductInput } from './product/product.dto';
import { Product } from './product/product.model';
import { BaseHttpService } from './shared/base-http.service';

(async () => {
  console.log('\n===== Testing BaseHttpService =====\n');

  const productService = new BaseHttpService<Product>(
    'https://api.escuelajs.co/api/v1/products',
  );

  const products = await productService.findAll();

  console.log('Total products:', products.length);

  const productId = products[0].id;
  const product = await productService.update<
    Product['id'],
    UpdateProductInput
  >(productId, { title: 'Quipitos', price: 1000 });

  console.log('Updated product:', product);

  const categoryService = new BaseHttpService<Category>(
    'https://api.escuelajs.co/api/v1/categories',
  );

  console.log('Total categories:', (await categoryService.findAll()).length);
})();
