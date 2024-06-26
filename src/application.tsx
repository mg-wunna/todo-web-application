import { useCallback, useEffect, useState } from "react";

import AddTodo from "./components/add-todo";
import TasksDoneSection from "./sections/tasks-done";
import TasksTodoSection from "./sections/tasks-todo";

// prettier-ignore
/**
 * ### Application ###
 * @description This component can render todo application.
 * @returns Todo application
 * @example
 * <App />
 * @version 1.0.0
 * @author Wunna
 */
const App = () => {
  const [ keyword  , setKeyword  ] = useState("");
  const [ todoList , setTodoList ] = useState<string[]>([]);
  const [ doneList , setDoneList ] = useState<string[]>([]);

  // Add task handler function
  const addTaskHandler = useCallback(() => {
    // add task into todo list state
    setTodoList((prevTodoList) => [...prevTodoList, keyword]);

    // remove keyword state
    setKeyword("");
  }, [keyword]);

  // Check todo handler function
  const checkTodoHandler = useCallback(
    (todoIndex: number) => {
      // clone todo list, get todo item and remove todo item from todo list
      const todoListClone = [...todoList];
      const todoItem      = todoListClone[todoIndex];
      todoListClone.splice(todoIndex, 1);

      // add todo item into done list and set removed todo list into todo list state
      setDoneList((prevDoneList) => [...prevDoneList, todoItem]);
      setTodoList(todoListClone);
    },
    [todoList],
  );

  // Delete todo handler function
  const deleteTodoHandler = useCallback((todoIndex: number) => {
    // remove todo item from todo list state by todo index
    setTodoList((prevTodoList) => {
      const todoListClone = [...prevTodoList];
      todoListClone.splice(todoIndex, 1);
      return todoListClone;
    });
  }, []);

  // get todo list, done list and keyword state from local storage
  useEffect(() => {
    const todoList = localStorage.getItem("todoList") || "[]";
    setTodoList(JSON.parse(todoList));

    const doneList = localStorage.getItem("doneList") || "[]";
    setDoneList(JSON.parse(doneList));

    const keyword = localStorage.getItem("keyword") || "";
    setKeyword(keyword);
  }, []);

  // update todo list, done list and keyword state into local storage
  useEffect(() => {
    localStorage.setItem("todoList" , JSON.stringify(todoList));
    localStorage.setItem("doneList" , JSON.stringify(doneList));
    localStorage.setItem("keyword"  , keyword);
  }, [doneList, keyword, todoList]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {/* Centered division */}
      <div className="flex h-[80vh] w-[70vw] flex-col overflow-hidden rounded-xl border border-solid border-gray-200 bg-gray-50 p-8 pt-4 pb-0 shadow-md">
        <h1 className="text-center mb-4 text-xl">Todo Web Application</h1>

        {/* Add todo input and button */}
        <AddTodo keyword={keyword} onKeywordChange={setKeyword} onAddClick={addTaskHandler} />

        {/* Divide line */}
        <div className="my-4 h-px w-full bg-gray-200" />

        {/* Tasks todo list section */}
        <TasksTodoSection todoList={todoList} checkTodoHandler={checkTodoHandler} deleteTodoHandler={deleteTodoHandler} />

        {/* Tasks done list section */}
        <TasksDoneSection doneList={doneList} />
      </div>
    </div>
  );
};

export default App;
