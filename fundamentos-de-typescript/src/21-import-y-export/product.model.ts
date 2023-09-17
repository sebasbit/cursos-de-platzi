export type Size = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  title: string;
  stock: number;
  size?: Size;
};
