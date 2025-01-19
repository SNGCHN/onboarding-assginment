export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface CreateTodoRequest {
  title: string;
  completed?: boolean;
}

export interface UpdateTodoRequest {
  title?: string;
  completed?: boolean;
}

export interface TodoResponse {
  data: Todo;
  success: boolean;
  message?: string;
}

export interface TodoListResponse {
  data: Todo[];
  success: boolean;
  message?: string;
}
