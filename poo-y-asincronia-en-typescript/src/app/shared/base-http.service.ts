import axios from 'axios';

export class BaseHttpService<T> {
  public constructor(private baseUrl: string) {}

  public async findAll(): Promise<T[]> {
    const { data } = await axios.get<T[]>(this.baseUrl);
    return data;
  }
}
