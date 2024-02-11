import "./index.css";
import Modal from "./components/Modal";
import { AiOutlinePlus } from "react-icons/ai";
import TaskCard from "./components/TaskCard"; // Ensure the file name matches the import exactly if case-sensitive
import { useTasks } from "./store"; // Adjusted the path for consistency
import AddEditTaskForm from "./components/AddEditTaskForm"; // Ensure the file name matches the import exactly if case-sensitive
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"; // Adjust for consistency in naming (capitalization)

export default function App() {
  const [show, setShow] = useState(false);
  const {
    state: { tasks, singleTask },
    dispatch
  } = useTasks();

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    dispatch({ type: "CLEAR_SINGLE_TASK" }); // Assuming singular is correct, adjust if necessary
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="top-title">
          <h2>Task List</h2>
          <button className="button" onClick={handleShow}>
            <span className="icon">
              <AiOutlinePlus />
            </span>
            Add Task
          </button>
        </div>
        <div className="task-container">
          {tasks.map((task) => (
            <TaskCard key={task.id} {...task} onEdit={handleShow} /> // Assuming `task.id` is available and unique
          ))}
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          title={singleTask ? "Edit Task" : "Add Task"}
        >
          <AddEditTaskForm onSubmit={handleClose} singleTask={singleTask} />
        </Modal>
      </div>
      <Footer />
    </div>
  );
}
