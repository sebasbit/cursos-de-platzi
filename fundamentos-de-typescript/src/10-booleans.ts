(() => {
  let isEnable = true;
  // isEnable = 'false'; // Don't do this
  // isEnable = 0; // Don't do this
  isEnable = false;

  let isNew: boolean = false;
  console.log(`New: ${isNew}`);
  isNew = true;
  console.log(`New: ${isNew}`);

  const random = Math.random();
  console.log(`Random number: ${random}`);
  isNew = random >= 0.5;
  console.log(`New: ${isNew}`);

  // const objBoolean: Boolean = true; // Don't do this
})();
