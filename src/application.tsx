import { useCallback, useEffect, useState } from "react";
import AddTodo from "./components/add-todo";
import TodoItem from "./components/todo-item";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [doneList, setDoneList] = useState<string[]>([]);

  const addTaskHandler = useCallback(() => {
    setTodoList((prevTodoList) => [...prevTodoList, keyword]);
    setKeyword("");
  }, [keyword]);

  const checkTodoHandler = useCallback(
    (todoIndex: number) => {
      const todoListClone = [...todoList];
      const todoItem = todoListClone[todoIndex];
      todoListClone.splice(todoIndex, 1);
      setDoneList((prevDoneList) => [...prevDoneList, todoItem]);
      setTodoList(todoListClone);
    },
    [todoList],
  );

  const deleteTodoHandler = useCallback((todoIndex: number) => {
    setTodoList((prevTodoList) => {
      const todoListClone = [...prevTodoList];
      todoListClone.splice(todoIndex, 1);
      return todoListClone;
    });
  }, []);

  useEffect(() => {
    const todoList = localStorage.getItem("todoList") || "[]";
    setTodoList(JSON.parse(todoList));

    const doneList = localStorage.getItem("doneList") || "[]";
    setDoneList(JSON.parse(doneList));

    const keyword = localStorage.getItem("keyword") || "";
    setKeyword(keyword);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("doneList", JSON.stringify(doneList));
    localStorage.setItem("keyword", keyword);
  }, [doneList, keyword, todoList]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-[80vh] w-[70vw] flex-col overflow-hidden rounded-xl border border-solid border-gray-200 bg-gray-50 p-8 pb-0 shadow-md">
        <AddTodo
          keyword={keyword}
          onKeywordChange={setKeyword}
          onAddClick={addTaskHandler}
        />
        <div className="my-4 h-px w-full bg-gray-200" />
        <p className="text-lg text-green-500">
          Tasks to do - {todoList.length}
        </p>
        <div className="flex flex-1 flex-grow-[3] flex-col overflow-y-auto">
          {todoList.map((item, index) => (
            <TodoItem
              key={index}
              text={item}
              onCheck={() => checkTodoHandler(index)}
              onDelete={() => deleteTodoHandler(index)}
            />
          ))}
        </div>
        <p className="mt-4 text-lg text-red-500">
          Tasks done - {doneList.length}
        </p>
        <div className="flex flex-1 flex-grow-[1] flex-col overflow-y-auto">
          {doneList.map((item, index) => (
            <TodoItem key={index} text={item} isDone />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
