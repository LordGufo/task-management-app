import { createContext, useContext } from "react";
import TaskReducer from "./TaskReducer";
import useLocalStorageReducer from "../hooks/useLocalStorageRerducer";
const TaskContext = createContext();

export const initialState = {
  tasks: [],
  singleTask: null
};

const TasksProvider = ({ children }) => {
  const [state, dispatch] = useLocalStorageReducer(
    "myData",
    TaskReducer,
    initialState
  );

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTasks = () => {
  return useContext(TaskContext);
};

export { TasksProvider, useTasks };

