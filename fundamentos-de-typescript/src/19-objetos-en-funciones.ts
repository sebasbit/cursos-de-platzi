(() => {
  const login = (credentials: {email: string, accessCode: number}): void => {
    console.log(`Credentials: ${credentials.email} - ${credentials.accessCode}`);
  };

  login({email: 'user@example.com', accessCode: 1234});

  type Size = 'S' | 'M' | 'L' | 'XL';

  const saveProduct = (product: {
    title: string,
    stock: number,
    size: Size,
  }) => {
    console.log(`Product saved: ${product.title} - strock ${product.stock} - size ${product.size}`);
  };

  saveProduct({title: 'Jeans', stock: 10, size: 'M'});
})();
