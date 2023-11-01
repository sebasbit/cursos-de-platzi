type Size = 'S' | 'M' | 'L' | 'XL';
type ID = string | number;

interface Product {
  id: ID;
  name: string;
  stock: number;
  size: Size;
  createdAt: Date;
}

const collection: Product[] = [];
const addProduct = (product: Product): void => {
  collection.push(product);
};

const product: Product = {
  id: 2,
  name: 'Blouse',
  stock: 10,
  size: 'M',
  createdAt: new Date(),
};

addProduct(product);

addProduct({
  id: 1,
  name: 'T-Shirt',
  stock: 10,
  size: 'M',
  createdAt: new Date(),
});

console.log(collection);
