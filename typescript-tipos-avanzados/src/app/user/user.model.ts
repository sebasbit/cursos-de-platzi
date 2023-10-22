export enum Role {
  Admin,
  Customer,
}

export interface User {
  id: string | number;
  username: string;
  role: Role;
}
