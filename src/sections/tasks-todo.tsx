import TodoItem from "../components/todo-item";

export type TasksTodoSectionProps = {
  todoList: string[];
  checkTodoHandler: (todoIndex: number) => void;
  deleteTodoHandler: (todoIndex: number) => void;
};

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
