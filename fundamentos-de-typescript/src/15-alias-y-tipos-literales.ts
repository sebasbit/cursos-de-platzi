(() => {
  type UserId = number | string;

  let userId: UserId;
  // userId = true; // Don't do this
  userId = 1;
  console.log(`User ID: ${userId}`);
  userId = 'cf6c2f24-dc64-4788-a6fe-f8d9f997f219';
  console.log(`User ID: ${userId}`);

  const multiply = (n: UserId, times: number) => {
    if (typeof n === 'number') {
      return n * times;
    }
    return n.repeat(times);
  }

  console.log(`Multiply 1*2: ${multiply(1, 2)}`);
  console.log(`Multiply '1'*2: ${multiply('1', 2)}`);

  // Literal types
  type Size = 'S' | 'M' | 'L' | 'XL';

  let size: Size;
  size = 'S';
  size = 'M';
  size = 'L';
  size = 'XL';
  // size = 'XXL'; // Don't do this


  function printSize(size: Size) {
    console.log(`Size: ${size}`);
  }

  printSize('S');
  printSize('M');
  printSize('L');
  printSize('XL');
  // printSize('XXL'); // Don't do this
})();
