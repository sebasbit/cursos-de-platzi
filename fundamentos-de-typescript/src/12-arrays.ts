(() => {
  let prices = [100, 200, 300];
  // prices.push('100'); // Don't do this
  // prices.push(true); // Don't do this
  // prices.push({}); // Don't do this
  prices.push(400);
  console.log(`Prices: ${prices}`);

  let elements = [1, '1', true]; // (number | string | boolean)[]
  // elements.push({}); // Don't do this
  console.log(`Elements: ${elements}`);

  let mixed: (number | string | boolean)[] = ['hi', 100];
  // elements.push([]); // Don't do this
  // elements.push({}); // Don't do this
  mixed.push(true);
  console.log(`Mixed: ${mixed}`);

  let numbers = [1, 2, 3];
  numbers.map((i) => i ** 2);
  console.log(`Numbers: ${numbers}`);
})();
