import { useCallback } from "react";
import PlusIcon from "../icons/plus-icon";

export type AddTodoProps = {
  keyword: string;
  onKeywordChange: (value: string) => void;
  onAddClick: () => void;
};

const AddTodo = ({ keyword, onKeywordChange, onAddClick }: AddTodoProps) => {
  const changeKeywordHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onKeywordChange(event.target.value);
    },
    [onKeywordChange],
  );

  return (
    <div className="flex h-10 items-center justify-between gap-4">
      <input
        type="text"
        placeholder="Add a new task"
        className="flex h-full flex-1 items-center rounded-md border border-solid border-gray-200 bg-gray-50 px-4"
        value={keyword}
        onChange={changeKeywordHandler}
      />
      <div
        className="flex aspect-square h-full items-center justify-center rounded-md bg-blue-500 text-white"
        onClick={onAddClick}
      >
        <PlusIcon />
      </div>
    </div>
  );
};

export default AddTodo;
