import TodoItem from "../components/todo-item";

/** Tasks done properties */
export type TasksDoneProps = {
  /** What is done list? */
  doneList: string[];
};

// prettier-ignore
/**
 * ### Tasks done section ###
 * @description This section can render tasks done list.
 * @param props - What is tasks done section?
 * @returns Tasks done section
 * @example
 * <TasksDoneSection doneList={["Hello World"]} />
 * @version 1.0.0
 * @author Wunna
 */
const TasksDoneSection = ({ doneList }: TasksDoneProps) => {
  return (
    <>
      {/* Title */}
      <p className="mt-4 text-lg text-red-500">Tasks done - {doneList.length}</p>

      {/* List */}
      <div className="flex flex-1 flex-grow-[1] flex-col overflow-y-auto">
        {doneList.map((item, index) => <TodoItem key={index} text={item} isDone /> )}
      </div>
    </>
  );
};

export default TasksDoneSection;
