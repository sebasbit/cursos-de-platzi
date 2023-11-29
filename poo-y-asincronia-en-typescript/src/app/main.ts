import axios from 'axios';
import { Product } from './product/product.model';

(async () => {
  const getProduts = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products?limit=5&offset=0',
    );
    // return response.data as Product[]; // If you can't define the type of data
    return response.data;
  };

  const products: Product[] = await getProduts();
  console.log(
    'Produts:\n' + products.map((p) => `  - (${p.id}) ${p.title}\n`).join(''),
  );
})();
