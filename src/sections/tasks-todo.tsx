import TodoItem from "../components/todo-item";

/** Task todo section props */
export type TasksTodoSectionProps = {
  /** What is todo list? */
  todoList: string[];
  /** What is check todo handler function? */
  checkTodoHandler: (todoIndex: number) => void;
  /** What is delete todo handler function */
  deleteTodoHandler: (todoIndex: number) => void;
};

/**
 * ### Tasks todo section ###
 * @description This section can render tasks todo.
 * @param props - What is tasks todo section properties?
 * @returns Tasks todo section
 * @example
 * <TaskTodoSection
 *   todoList={["Hello World"]}
 *   checkTodoHandler={(todoIndex: number) => {}}
 *   deleteTodoHandler={(todoIndex: number) => {}}
 * />
 * @version 1.0.0
 * @author Wunna
 */
const TasksTodoSection = ({
  todoList,
  checkTodoHandler,
  deleteTodoHandler,
}: TasksTodoSectionProps) => {
  return (
    <>
      <p className="text-lg text-green-500">Tasks to do - {todoList.length}</p>
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
    </>
  );
};

export default TasksTodoSection;
