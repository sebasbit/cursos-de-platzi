(() => {
  let userId: number | string;
  // userId = true; // Don't do this
  userId = 1;
  console.log(`User ID: ${userId}`);
  userId = 'cf6c2f24-dc64-4788-a6fe-f8d9f997f219';
  console.log(`User ID: ${userId}`);

  const multiply = (n: number | string, times: number) => {
    if (typeof n === 'number') {
      return n * times;
    }
    return n.repeat(times);
  };

  console.log(`Multiply 1*2: ${multiply(1, 2)}`);
  console.log(`Multiply '1'*2: ${multiply('1', 2)}`);
})();
