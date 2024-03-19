import { Task } from './task.model';

export interface Column {
  title: string;
  tasks: Task[];
}
