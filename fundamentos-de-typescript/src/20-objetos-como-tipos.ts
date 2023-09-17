(() => {
  type Size = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    stock: number;
    size?: Size;
  };

  const products: Product[] = [];

  const saveProduct = (product: Product) => {
    products.push(product);
    // products.push(1); // Don't do this
  };

  saveProduct({ title: 'T-Shirt', stock: 10, size: 'M' });
  saveProduct({ title: 'Jeans', stock: 5 });
  console.log(products);
})();
