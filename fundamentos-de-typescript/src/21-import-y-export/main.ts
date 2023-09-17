import { saveProduct, getProducts, calcStock } from './product.service';

saveProduct({ title: 'T-Shirt', stock: 10, size: 'M' });
saveProduct({ title: 'Jeans', stock: 10 });
console.log(getProducts());
console.log(`Stock: ${calcStock()}`);
