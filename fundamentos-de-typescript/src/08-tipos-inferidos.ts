// file 1
(() => {
  let myProductName = 'Product 1';
  let myProductPrice = 123;

  myProductName = 'change';
  myProductName.toLowerCase();

  myProductPrice.toFixed();

  const myProductStock = 1000;
  const myProductName2 = 'Product 1';
})();

// file 2
(() => {
  let myProductName = 'Product 1';
  let myProductPrice = 123;
})();
