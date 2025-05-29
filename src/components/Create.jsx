import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
  let tasks = props.tasks;
  let settasks = props.settasks;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    data.isCompleted = false;

    let copyTasks = [...tasks];
    copyTasks.push(data);
    settasks(copyTasks);

    toast.success("Task Created");

    reset();
  };

  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mb-6 text-white tracking-wide">
        Create Task
      </h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full bg-gray-800/60 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-700 flex flex-col gap-5 transition-all duration-300"
      >
        <input
          {...register("title", { required: "Title can not be empty." })}
          placeholder="Enter task title..."
          className="w-full px-4 py-3 border border-gray-700 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        {/* {errors && errors.title && errors.title.message && (
          <small>{errors.title.message}</small>
        )} */}

        <small className="text-thin text-red-400">
          {errors?.title?.message}
        </small>

        <button
          type="submit"
          className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-blue-600 transition font-semibold shadow-md"
        >
          Create Task
        </button>
      </form>
    </>
  );
};

export default Create;
