import useTodoList from "../../hooks/todo/useTodoList";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { data: todos, isPending, error } = useTodoList();

  if (isPending) {
    return (
      <div className="flex justify-center items-center p-8">
        <p className="text-gray-500">Loading todos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-8">
        <p className="text-red-500">Failed to load todos</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {todos?.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
