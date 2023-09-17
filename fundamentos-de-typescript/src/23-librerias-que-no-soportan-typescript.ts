import { groupBy } from 'lodash';

const users = [
  {
    username: 'Aangg',
    role: 'USER',
  },
  {
    username: 'Katara',
    role: 'USER',
  },
  {
    username: 'Sokka',
    role: 'ENTERTAINER',
  },
  {
    username: 'Toph',
    role: 'ADMIN',
  },
  {
    username: 'Zuko',
    role: 'ADMIN',
  },
];

const group = groupBy(users, (u) => u.role);
console.log(group);
