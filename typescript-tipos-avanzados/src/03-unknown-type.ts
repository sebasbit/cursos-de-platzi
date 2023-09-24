let anyType: any;
anyType = true;
anyType = undefined;
anyType = null;
anyType = [];
anyType = {};

// anyType.toUpperCase(); // anyType is currently an object but TypeScript allows us to do this

const isNew: boolean = anyType;

console.log(`const isNew (it should be boolean): ${isNew}`);

let unknownType: unknown;
unknownType = true;
unknownType = undefined;
unknownType = null;
unknownType = [];
unknownType = {};
unknownType = 'hello world!';

// const isOld: boolean = unknownType; // Don't do this
// console.log(`let unknownType: ${unknownType.toUpperCase()}`); // Don't do this

// type-checks to narrow the unknown type to a more specific type
if (typeof unknownType === 'string') {
  console.log(`let unknownType: ${unknownType.toUpperCase()}`);
}

const parseJson = (json: string): unknown => JSON.parse(json);
const decodedJson = parseJson('["foo", "bar"]');

// console.log(`const decodedJson: ${decodedJson.join(',')}`); // Don't do this

if (Array.isArray(decodedJson)) {
  console.log(`const decodedJson: ${decodedJson.join(',')}`);
}
