(() => {
  let dynamic: any; // It's recommended not to use "any" unless strictly necessary.
  dynamic = 1;
  console.log(`Dynamic: ${dynamic} ${typeof dynamic}`);
  dynamic = '1';
  console.log(`Dynamic: ${dynamic} ${typeof dynamic}`);
  dynamic = true;
  console.log(`Dynamic: ${dynamic} ${typeof dynamic}`);
  dynamic = [];
  console.log(`Dynamic: ${dynamic} ${typeof dynamic}`);
  dynamic = {};
  console.log(`Dynamic: ${dynamic} ${typeof dynamic}`);

  dynamic = 'Hi';
  // dynamic. // Autocomplete doesn't work with "any"
  const greeting = (dynamic as string).toUpperCase();
  console.log(`Greeting: ${greeting}`);

  dynamic = 100.599;
  const price = (<number>dynamic).toFixed(2);
  console.log(`Price: ${price}`);
})();
