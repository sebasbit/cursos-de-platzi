(() => {
  let price = 100;
  price = 12;
  console.log(`Price: ${price}`);

  let age: number = 23;
  age += 1;
  console.log(`Age: ${age}`);

  let inStock: number = 10;
  console.log(`In stock: ${inStock}`);
  if (inStock > 10) {
    console.log(`${inStock} is greater than 10`);
  }

  let discount = parseInt('100');
  console.log(`Discount: ${discount}`);
  discount = parseInt('NaN');
  if (discount <= 200) {
    console.log(`Discount applied`);
  } else {
    console.log(`Discount not applied`);
  }

  let hex = 0xfff;
  console.log(`Hex 0xfff: ${hex}`);
  let bin = 0b1010;
  console.log(`Bin 0b1010: ${bin}`);

  // let objNumber: Number = 10; // Don't do this
})();
