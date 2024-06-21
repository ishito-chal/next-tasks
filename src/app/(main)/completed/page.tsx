import TaskCard from "@/components/TaskCard/TaskCard";

const CompletedTaskPage = () => {
  return (
    <div className="txt-gray-800 p-8 f-full overflow-y-auto pd-24">
      <header className="flex justify-between items-center">
        <h1 className="txt-2xl font-bold flwx items-center">Completed Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div>
  );
};

export default CompletedTaskPage;
