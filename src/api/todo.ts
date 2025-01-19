import client from "./client";
import { TodoItem } from "../types/apiType";

const TODO_BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchTodos(): Promise<TodoItem[]> {
  const response = await client.get<TodoItem[]>(`${TODO_BASE_URL}/todos`);
  return response.data;
}

export async function fetchTodo(id: number): Promise<TodoItem> {
  const response = await client.get<TodoItem>(`${TODO_BASE_URL}/todos/${id}`);
  return response.data;
}
