import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useTasks } from "../store";

const Taskcard = ({ id, title, status, progress, onEdit }) => {
  const { dispatch } = useTasks();
  const handleDelete = () => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const handleEdit = () => {
    onEdit();
    dispatch({
      type: "SET_SINGLE_TASK",
      payload: { id, title, status, progress }
    });
  };

  const handleTaskStatus = (id) => {
    dispatch({ type: "UPDATE_STATUS", payload: id });
  };

  return (
    <div className="task-card">
      <div className="flex w-100">
        <span className="task-title">Task</span>
        <span className="task">{title}</span>
      </div>
      <div className="flex">
        <span className="priority-title">Priority</span>
        <span
          className={`priority ${
            status === "High" ? "high" : status === "Medium" ? "medium" : "low"
          }`}
        >
          {status}
        </span>
      </div>
      <div className="task-status-wrapper">
        <button
          className="status"
          style={{
            background:
              progress === "To Do"
                ? "#f73446"
                : progress === "In Progress"
                ? "#ffbd21"
                : "#0ac947"
          }}
          onClick={() => handleTaskStatus(id)}
        >
          {progress}
        </button>
      </div>
      <div className="progress"></div>
      <div className="actions">
        <FiEdit className="cp mr-20 edit" onClick={handleEdit} />
        <FiTrash2 className="cp trash" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Taskcard;
