import { Product } from './product.model';

export interface AddProductInput
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Using Pick instead of Omit
// export interface AddProductInput
//   extends Pick<
//     Product,
//     | 'name'
//     | 'description'
//     | 'size'
//     | 'color'
//     | 'image'
//     | 'price'
//     | 'stock'
//     | 'tags'
//   > {
//   categoryId: string;
// }
