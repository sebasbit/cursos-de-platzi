import axios from 'axios';

export class BaseHttpService<T> {
  public constructor(private baseUrl: string) {}

  public async findAll(): Promise<T[]> {
    const { data } = await axios.get<T[]>(this.baseUrl);
    return data;
  }

  // public async update<T, U>(id: T, input: U): Promise<T> {...} // Don't do this, it override the generic T of the class
  public async update<IdType, InputType>(
    id: IdType,
    input: InputType,
  ): Promise<T> {
    const { data } = await axios.put<T>(`${this.baseUrl}/${id}`, input);
    return data;
  }
}
