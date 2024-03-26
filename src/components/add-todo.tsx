import { useCallback } from "react";
import PlusIcon from "../icons/plus-icon";

/** Add todo component properties */
export type AddTodoProps = {
  /** What is keyword? */
  keyword: string;
  /** What happen when user change keyword? */
  onKeywordChange: (value: string) => void;
  /** What happen when user click add? */
  onAddClick: () => void;
};

// prettier-ignore
/**
 * ### Add todo component ###
 * @description This component can render add todo.
 * @param props - What is add todo component properties?
 * @returns Add todo component
 * @example
 * <AddTodo
 *   keyword={keyword}
 *   onKeywordChange={setKeyword}
 *   onAddClick={() => {}}
 * />
 * @version 1.0.0
 * @author Wunna
 */
const AddTodo = ({ keyword, onKeywordChange, onAddClick }: AddTodoProps) => {
  // Change keyword handler function
  const changeKeywordHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onKeywordChange(event.target.value);
    },
    [onKeywordChange],
  );

  return (
    <div className="flex h-10 items-center justify-between gap-4">
      {/* Input box */}
      <input className="flex h-full flex-1 items-center rounded-md border border-solid border-gray-200 bg-gray-50 px-4"
             type="text" placeholder="Add a new task"
             value={keyword} onChange={changeKeywordHandler} />

      {/* Add button */}
      <div className="flex aspect-square h-full items-center justify-center rounded-md bg-blue-500 text-white"
           onClick={onAddClick} >
        <PlusIcon />
      </div>
    </div>
  );
};

export default AddTodo;
