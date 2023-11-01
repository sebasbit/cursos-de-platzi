export function joinOrSplit(word: string): string[];
export function joinOrSplit(word: string[]): string;

export function joinOrSplit(word: unknown): unknown {
  if (typeof word === 'string') {
    return word.split('');
  } else if (Array.isArray(word)) {
    return word.join('');
  }
}

const joined = joinOrSplit(['h', 'e', 'l', 'l', 'o']);
// if (typeof joined === 'string') { // This is no longer necessary
console.log(`Join ([h, e, l, l, o]): ${joined.toUpperCase()}`);

const splited = joinOrSplit('hello');
// if (Array.isArray(splited)) { // This is no longer necessary
console.log(`Split (hello): ${splited.reverse()}`);
