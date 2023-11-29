class Shape {
  constructor(public name: string) {}
}

// function createCollection(...elements: unknown[]): unknown[] {...} // This requires narrowing
// function createCollection(...elements: string[] | number[]): string[] | number[] {...} // This limits the types you can use
// const createCollection = <T>(...elements: T[]): T[] => {...} // Using generics in arrow functions
function createCollection<T>(...elements: T[]): T[] {
  return new Array<T>(...elements); // Generics in TypeScript built-in types
}

console.log(
  'String collection:',
  createCollection('a', 'b', 'c').map((e) => e.toUpperCase()), // Inferred type using the first argument
);
console.log(
  'Number collection:',
  // createCollection<number>(1, 2, '3'), // Don't do this
  createCollection<number>(1, 2, 3).map((e) => e ** 2),
);
console.log(
  'Object collection:',
  createCollection<Shape>(new Shape('circle 🎱'), new Shape('square 🟨')).map(
    (e) => e.name,
  ),
);
