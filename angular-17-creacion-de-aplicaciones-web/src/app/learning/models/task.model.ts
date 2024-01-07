export interface Task {
  id: number;
  title: string;
  completed: boolean;
  editing: boolean;
}

export type TaskFilter = 'ALL' | 'PENDING' | 'COMPLETED';
