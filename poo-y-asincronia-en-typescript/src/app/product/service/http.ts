import axios from 'axios';
import { CreateProductInput, UpdateProductInput } from '../product.dto';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

export class HttpProductService implements ProductService {
  private baseUrl: string = 'https://api.escuelajs.co/api/v1/products';

  public async find(id: Product['id']) {
    const { data } = await axios.get<Product>(`${this.baseUrl}/${id}`);
    return data;
  }

  public async findAll() {
    const { data } = await axios.get<Product[]>(
      `${this.baseUrl}?offset=0&limit=5`,
    );
    return data;
  }

  public async create(input: CreateProductInput) {
    const { data } = await axios.post<Product>(this.baseUrl, input);
    return data;
  }

  public async update(id: Product['id'], input: UpdateProductInput) {
    const { data } = await axios.put<Product>(`${this.baseUrl}/${id}`, input);
    return data;
  }
}
