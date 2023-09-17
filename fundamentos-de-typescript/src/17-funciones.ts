(() => {
  type Size = 'S' | 'M' | 'L' | 'XL';

  function createProduct(
    title: string,
    stock: number,
    size: Size,
    createdAt: Date,
  ) {
    return { title, stock, size, createdAt };
  }

  const product = createProduct('T-Shirt', 10, 'S', new Date());
  console.log(product);
  console.log(
    `Product: ${product.title} - Stock: ${product.stock} - Size: ${product.size}`,
  );

  const createProductV2 = (
    title: string,
    stock: number,
    size?: Size, // The same as Size | undefined, Optional parameters must be defined at the end
  ) => {
    return { title, stock, size };
  };

  const product2 = createProductV2('Jeans', 5);
  console.log(product2);
  console.log(
    `Product: ${product2.title} - Stock: ${product2.stock} - Size: ${
      product2.size ?? '_'
    }`,
  );
})();
