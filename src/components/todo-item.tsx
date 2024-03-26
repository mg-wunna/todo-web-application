import CheckIcon from "../icons/check-icon";
import TrashIcon from "../icons/trash-icon";

export type TodoItemProps = {
  text: string;
  isDone: boolean;
  onCheck: () => void;
  onDelete: () => void;
};

const TodoItem = ({ text, isDone, onCheck, onDelete }: TodoItemProps) => {
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
};

export default TodoItem;
