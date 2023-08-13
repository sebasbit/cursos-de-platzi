(() => {
  let title = 'My title';
  // title = null; // Don't do this
  // title = () => null; // Don't do this
  // title = 1; // Don't do this
  console.log(`Title: ${title}`);

  let name: string = 'Pepito';
  console.log(`Name: ${name}`);

  const description = "I'm your father";
  console.log(`Description: ${description}`);

  const summary = `He said, "${description}"`;
  console.log(`Summary: ${summary}`);

  // const objString: String = 'hi' // Don't do this
})();
