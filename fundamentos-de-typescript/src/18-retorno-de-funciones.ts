(() => {
  const add = (...values: number[]): number => {
    const total = values.reduce((a, b) => (b += a));
    return total;
    // return total.toString() // Don't do this
  };

  const printTotal = (...values: number[]): void => {
    const total = add(...values);
    console.log(`Total: ${total}`);
    // return total //  Don't do this
  };

  printTotal(1, 2, 3);
})();
