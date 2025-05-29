import { createContext } from "react";
import { useState } from "react";

export const tasksContext = createContext(null);

const Wrapper = (props) => {
  let [tasks, setTasks] = useState([]);

  return (
    <tasksContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </tasksContext.Provider>
  );
};

export default Wrapper;
