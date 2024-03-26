import { useCallback, useState } from "react";
import AddTodo from "./components/add-todo";
import TodoItem from "./components/todo-item";

const App = () => {
  const [keyword, setKeyword] = useState("");

  const addTaskHandler = useCallback(() => {
    setKeyword("");
    // ...
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-[80vh] w-[70vw] flex-col overflow-hidden rounded-xl border border-solid border-gray-200 bg-gray-50 p-8 pb-0 shadow-md">
        <AddTodo
          keyword={keyword}
          onKeywordChange={setKeyword}
          onAddClick={addTaskHandler}
        />
        <div className="my-4 h-px w-full bg-gray-200" />
        <p className="text-lg text-green-500">Tasks to do - 4</p>
        <div className="flex flex-1 flex-grow-[3] flex-col overflow-y-auto">
          <TodoItem
            text={"Todo"}
            isDone={false}
            onCheck={function (): void {
              throw new Error("Function not implemented.");
            }}
            onDelete={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <TodoItem
            text={"Todo"}
            isDone={false}
            onCheck={function (): void {
              throw new Error("Function not implemented.");
            }}
            onDelete={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <p className="mt-4 text-lg text-red-500">Tasks done - 4</p>
        <div className="flex flex-1 flex-grow-[1] flex-col overflow-y-auto">
          <TodoItem
            text={"Done"}
            isDone={true}
            onCheck={function (): void {
              throw new Error("Function not implemented.");
            }}
            onDelete={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <TodoItem
            text={"Done"}
            isDone={true}
            onCheck={function (): void {
              throw new Error("Function not implemented.");
            }}
            onDelete={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
