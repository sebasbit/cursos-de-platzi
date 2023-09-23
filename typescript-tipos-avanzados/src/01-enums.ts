enum Role {
  Admin, // Or Admin = 0
  Customer,
}

console.log(`Role ${Role[Role.Admin]}: ${Role.Admin}`);
console.log(`Role ${Role[Role.Customer]}: ${Role.Customer}`);
// console.log(`Role Admin: ${Role.Unkown}`); // Don't do this

enum State {
  Active = 'ACTIVE',
  Banned = 'BANNED',
}

console.log(`State Active: ${State.Active}`);
console.log(`State Banned: ${State.Banned}`);
// console.log(`State ${State[State.Banned]}: ${State.Banned}`); // Don't do this, string enum members do not get a reverse mapping

type User = {
  username: string;
  role: Role;
  state: State;
};

const user: User = {
  username: 'pepito',
  role: Role.Admin,
  state: State.Active,
};

console.log(user);
