const vowels: ReadonlyArray<string> = ['a', 'e', 'i', 'o', 'u'];
// vowels.push('z'); // Don't do this
// vowels.pop(); // Don't do this
// vowels.unshift('z'); // Don't do this
console.log(vowels.filter((v) => v === 'a'));
console.log(vowels.reduce((p, v) => p.concat(v)));
console.log(vowels.map((v) => v.toUpperCase()));
