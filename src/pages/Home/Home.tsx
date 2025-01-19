import Page from "../../components/layout/Page";
import TodoList from "../../components/todo/TodoList";

export default function Home() {
  return (
    <Page>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Todo List</h1>
        <TodoList />
      </div>
    </Page>
  );
}
