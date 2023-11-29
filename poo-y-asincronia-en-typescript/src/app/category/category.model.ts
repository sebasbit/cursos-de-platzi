export enum AccessType {
  Public,
  Private,
}

export interface Category {
  id: number;
  name: string;
  image: string;
  access?: AccessType;
  creationAt: Date;
  updatedAt: Date;
}
