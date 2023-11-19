import { Category } from './category/category.model';
import { Product } from './product/product.model';
import { BaseHttpService } from './shared/base-http.service';

(async () => {
  console.log('\n===== Testing BaseHttpService =====\n');

  const productService = new BaseHttpService<Product>(
    'https://api.escuelajs.co/api/v1/products',
  );
  const categoryService = new BaseHttpService<Category>(
    'https://api.escuelajs.co/api/v1/categories',
  );

  console.log('Total products:', (await productService.findAll()).length);
  console.log('Total categories:', (await categoryService.findAll()).length);
})();
