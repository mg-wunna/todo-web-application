import TodoItem from "../components/todo-item";

export type TasksDoneProps = {
  doneList: string[];
};

const TasksDoneSection = ({ doneList }: TasksDoneProps) => {
  return (
    <>
      <p className="mt-4 text-lg text-red-500">
        Tasks done - {doneList.length}
      </p>
      <div className="flex flex-1 flex-grow-[1] flex-col overflow-y-auto">
        {doneList.map((item, index) => (
          <TodoItem key={index} text={item} isDone />
        ))}
      </div>
    </>
  );
};

export default TasksDoneSection;
