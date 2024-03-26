import { memo } from "react";
import CheckIcon from "../icons/check-icon";
import TrashIcon from "../icons/trash-icon";

/** Todo item properties */
export type TodoItemProps = {
  /** What is text string? */
  text: string;
  /** Is done or undone? */
  isDone?: boolean;
  /** What happen when user check todo item? */
  onCheck?: () => void;
  /** Wha happen when user delete todo item? */
  onDelete?: () => void;
};

/**
 * ### Todo item component ###
 * @description This component can render todo item.
 * @param props - What is todo item properties?
 * @returns Todo item component
 * @example
 * <TodoItem text="Hello World" isDone />
 * <TodoItem
 *   text="Hello World"
 *   onCheck={(todoItemIndex: number) => {}}
 *   onDelete={(todoItemIndex: number) => {}}
 * />
 * @version 1.0.0
 * @author Wunna
 */
const TodoItem = memo(({ text, isDone, onCheck, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center gap-2 rounded-md border-b border-solid border-gray-200 p-2 py-3">
      <p className={`flex-1 ${isDone ? "line-through" : ""}`}>{text}</p>
      {!isDone && (
        <div className="flex items-center gap-2">
          <div
            className="flex aspect-square h-full items-center justify-center rounded-md bg-blue-500 p-1 text-white"
            onClick={onCheck}
          >
            <CheckIcon />
          </div>
          <div
            className="flex aspect-square h-full items-center justify-center rounded-md bg-blue-500 p-1 text-white"
            onClick={onDelete}
          >
            <TrashIcon />
          </div>
        </div>
      )}
    </div>
  );
});

export default TodoItem;
