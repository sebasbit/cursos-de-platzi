import { Model } from '../base.model';

export enum Role {
  Admin,
  Customer,
}

export interface User extends Model {
  username: string;
  role: Role;
}
