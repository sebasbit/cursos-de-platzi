(() => {
  // let typeNumber: number = null; // don't do this
  // let typeString: string = undefined; // don't do this

  // let typeNull = null; // type is "any" because of type inference
  // let typeUndefined = undefined; // type is "any" because of type inference

  let typeNull: null = null;
  let typeUndefined: undefined = undefined;

  let typeNumber: number | null = null;
  typeNumber = 1;

  let typeString: string | undefined = undefined;
  typeString = 'a';

  function username(user: string | null) {
    console.log(`User: ${user?.toLocaleLowerCase() ?? 'guest'}`);
  }

  username('Pepito');
  username(null);
})();
