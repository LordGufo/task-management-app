import { useState } from "react";
import { useTasks } from "../store";

const AddEditTasksForm = ({ onSubmit, singleTask }) => {
  const { dispatch } = useTasks();

  const [formData, setFormData] = useState({
    title: singleTask ? singleTask.title : "",
    status: singleTask ? singleTask.status : "",
    id: singleTask ? singleTask.id : null,
    progress: singleTask ? singleTask.progress : null
  });
  const [validation, setValidation] = useState({
    title: "",
    status: ""
  });

  const { title, status } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch({ type: "ADD_TASKS", payload: formData });
    }
    onSubmit();
  };

  const validate = () => {
    let errors = { ...validation };
    let result = true;

    if (!title.trim()) {
      result = false;
      errors.title = "Please enter a title";
    } else {
      errors.title = "";
    }
    if (!status.trim()) {
      result = false;
      errors.status = "Please select a priority";
    } else {
      errors.status = "";
    }
    setValidation(errors);
    return result;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          name="title"
          placeholder="Type your task here..."
          value={title}
          onChange={handleChange}
        />
        {validation.title && <p className="error">{validation.title}</p>}
      </div>
      <div className="form-control">
        <label>Priority</label>
        <div className="checkbox-container">
          <label className={`high ${status === "High" ? "active" : null}`}>
            <input
              type="radio"
              name="status"
              value="High"
              onChange={handleChange}
            />
            <span>High</span>
          </label>
          <label className={`medium ${status === "Medium" ? "active" : null}`}>
            <input
              type="radio"
              name="status"
              value="Medium"
              onChange={handleChange}
              className={status === "Medium" ? "active" : null}
            />
            <span>Medium</span>
          </label>
          <label className={`low ${status === "Low" ? "active" : null}`}>
            <input
              type="radio"
              name="status"
              value="Low"
              onChange={handleChange}
              className={status === "Low" ? "active" : null}
            />
            <span>Low</span>
          </label>
        </div>
        {validation.status && <p className="error">{validation.status}</p>}
      </div>
      <div className="text-right">
        <button className="button" type="submit">
          {singleTask ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddEditTasksForm;

