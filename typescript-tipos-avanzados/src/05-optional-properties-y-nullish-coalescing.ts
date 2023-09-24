// const createLabel = (id: number, name?: string, active: boolean) => { // Don't do this, optional properties go last
const createLabel = (id: number, name?: string, active?: boolean) => {
  return {
    id,
    name: name ?? `label-${id}`, // Nullish coalescing operator
    active: active || true,
  };
};

const actionLabel = createLabel(1, 'action', true);
console.log('Action label:', actionLabel);

const unnamedLabel = createLabel(2);
console.log('Unamed label:', unnamedLabel);

// This label will be active due to the logical or operator (||) even if "active" is set to false,
// but the name will be an empty string because of the nullish coalescing operator
const emptyLabel = createLabel(3, '', false);
console.log('Empty label:', emptyLabel);
