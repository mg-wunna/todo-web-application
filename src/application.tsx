import { useCallback, useState } from "react";
import AddTodo from "./components/add-todo";

const App = () => {
  const [keyword, setKeyword] = useState("");

  const addTaskHandler = useCallback(() => {
    setKeyword("");
    // ...
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="h-[80vh] w-[70vw] rounded-xl border border-solid border-gray-200 bg-gray-50 p-8 shadow-md">
        <AddTodo
          keyword={keyword}
          onKeywordChange={setKeyword}
          onAddClick={addTaskHandler}
        />
      </div>
    </div>
  );
};

export default App;
