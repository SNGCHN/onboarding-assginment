import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../../api/todo";

export default function useTodoList() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
}
