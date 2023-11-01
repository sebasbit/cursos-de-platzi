function joinOrSplit(word: string | string[]): string | string[] {
  if (typeof word === 'string') {
    return word.split('');
  }
  return word.join('');
}

const joined = joinOrSplit(['h', 'e', 'l', 'l', 'o']);
// joined.toUpperCase(); // Don't do this
if (typeof joined === 'string') {
  console.log(`Join ([h, e, l, l, o]): ${joined.toUpperCase()}`);
}

const splited = joinOrSplit('hello');
// splited.reverse(); // Don't do this
if (Array.isArray(splited)) {
  console.log(`Split (hello): ${splited.reverse()}`);
}
