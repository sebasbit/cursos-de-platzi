class Operations {
  static readonly PI = 3.1416;

  static max(...numbers: number[]): number {
    return numbers.reduce((max, num) => (max >= num ? max : num));
  }
}

console.log('Math.PI :' + Math.PI);
console.log('Math.max(1, 2, 3, 4, 5) :' + Math.max(1, 2, 3, 4, 5));

// const op = new Operations();
// op.PI; // Don't do this
// op.max(1, 2, 3); // Don't do this

console.log('Operations.PI: ' + Operations.PI);
console.log('Operations.max(1, 2, 3, 4, 5): ' + Operations.max(1, 2, 3, 4, 5));
console.log(
  'Operations.max(-1, -2, -3, -4, -5): ' + Operations.max(-1, -2, -3, -4, -5),
);
