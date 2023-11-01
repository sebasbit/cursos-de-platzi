const createTag = (name: string, active: boolean = true) => {
  return {
    name,
    active,
  };
};

const actionTag = createTag('action'); // By default the label will be active
console.log('Action tag:', actionTag);

const emptyTag = createTag('', false); // If active if set to false, the label will be inactive
console.log('Empty tag:', emptyTag);
