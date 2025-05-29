import { useContext } from "react";
import { toast } from "react-toastify";
import { tasksContext } from "../Wrapper";

const Read = () => {
  let [tasks, settasks] = useContext(tasksContext);

  let deleteHandler = (id) => {
    let newTasks = tasks.filter((task) => task.id != id);
    toast.error("Task Deleted");

    settasks(newTasks);
  };

  let renderTasks = tasks.map((task) => {
    return (
      <li
        key={task.id}
        className="flex justify-between items-center bg-gray-800/70 backdrop-blur-md px-5 py-3 rounded-lg shadow border border-gray-700 transition"
      >
        <span className="text-white text-lg">{task.title}</span>
        <button
          onClick={() => deleteHandler(task.id)}
          className="cursor-pointer text-red-400 hover:text-red-500 transition text-sm font-semibold"
        >
          Delete
        </button>
      </li>
    );
  });

  let deleteAllHandler = () => {
    settasks([]);
    toast.error("All Tasks Deleted");
  };

  return (
    <>
      {tasks.length > 0 && (
        <h1 className="text-3xl font-bold text-center mb-6 text-white tracking-wide">
          Pending Tasks
        </h1>
      )}
      <ol className="w-full space-y-4">{renderTasks}</ol>
      {tasks.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={deleteAllHandler}
            className=" cursor-pointer bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-md hover:from-red-700 hover:to-red-600 transition font-semibold shadow-md"
          >
            Delete All
          </button>
        </div>
      )}
    </>
  );
};

export default Read;
