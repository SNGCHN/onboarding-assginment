import { Todo } from "../../types/todoType";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-4 h-full flex flex-col">
      <div className="flex items-start gap-3">
        <input type="checkbox" checked={todo.completed} readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
        <div className="flex-1 min-h-[100px] flex flex-col">
          <h3 className={`font-medium mb-2 ${todo.completed ? "line-through text-gray-500" : "text-gray-900"}`}>{todo.title}</h3>
          <div className="mt-auto flex justify-between items-center">
            <span className="text-sm text-gray-500">User ID: {todo.userId}</span>
            <span className={`text-sm px-2 py-1 rounded ${todo.completed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>{todo.completed ? "Completed" : "Pending"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
