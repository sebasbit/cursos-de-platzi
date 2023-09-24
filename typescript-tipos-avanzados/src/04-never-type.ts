const exit = (msg: string): never => {
  throw new Error(msg);
};

// Type assertion doesn't add "never" as function return type
const getType = (input: unknown) => {
  if (typeof input === 'string') {
    return 'string';
  } else if (Array.isArray(input)) {
    return 'array';
  }

  exit('unkown');
};

console.log(`Type of '': ${getType('')}`);
console.log(`Type of []: ${getType([])}`);
// console.log(`Type of 0: ${getType(0)}`); // This will end the script

// This function never ends and if it does, it will end the script
const luckyGame = (): never => {
  console.log('Lucky game!');

  let n: number;
  while (true) {
    n = Math.floor(Math.random() * 100);
    if (n < 50) {
      console.log(` - ${n}? Try again`);
    } else {
      exit(` - ${n}! You won`);
    }
  }
};

luckyGame();
