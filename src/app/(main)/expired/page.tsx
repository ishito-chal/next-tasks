import { TaskDocumet } from "@/app/models/task";
import TaskCard from "@/components/TaskCard/TaskCard";

const getExpiredTasks = async (): Promise<TaskDocumet[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks/expired`, {
    cache: "no-store",
  });
  if (response.status !== 200) {
    throw new Error();
  }

  const data = await response.json();
  return data.tasks as TaskDocumet[];
};
const ExpiredTaskPage = async () => {
  const expiredTasks = await getExpiredTasks();
  return (
    <div className="txt-gray-800 p-8 f-full overflow-y-auto pd-24">
      <header className="flex justify-between items-center">
        <h1 className="txt-2xl font-bold flwx items-center">Expired Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {expiredTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ExpiredTaskPage;
