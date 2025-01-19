import client from "./client";
import type { Todo, CreateTodoRequest, UpdateTodoRequest } from "../types/todoType";

const TODO_BASE_URL = "https://jsonplaceholder.typicode.com";

// Todo 목록 조회
export async function fetchTodos(): Promise<Todo[]> {
  const response = await client.get<Todo[]>(`${TODO_BASE_URL}/todos`);
  return response.data;
}

// Todo 단일 조회
export async function fetchTodo(id: number): Promise<Todo> {
  const response = await client.get<Todo>(`${TODO_BASE_URL}/todos/${id}`);
  return response.data;
}

// Todo 생성
export async function createTodo(data: CreateTodoRequest): Promise<Todo> {
  const response = await client.post<Todo>(`${TODO_BASE_URL}/todos`, data);
  return response.data;
}

// Todo 수정
export async function updateTodo(id: number, data: UpdateTodoRequest): Promise<Todo> {
  const response = await client.patch<Todo>(`${TODO_BASE_URL}/todos/${id}`, data);
  return response.data;
}

// Todo 삭제
export async function deleteTodo(id: number): Promise<void> {
  await client.delete(`${TODO_BASE_URL}/todos/${id}`);
}
