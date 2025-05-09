export interface Subtask {
    id: number;
    text: string;
    completed: boolean;
  }
  
export type Todo = {
    id: number;
    name: string;
    details: string;
    tags: string[];
    completed: boolean;
    subtasks: Subtask[];
  }