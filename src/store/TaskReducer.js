import { initialState } from ".";

const TasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASKS":
      const existItem = state.tasks.find(
        (elem) => elem.id === action.payload.id
      );
      const updatedItem = existItem
        ? state.tasks.map((elem) =>
            elem.id === existItem.id ? action.payload : elem
          )
        : [
            ...state.tasks,
            {
              id: Date.now(),
              title: action.payload.title,
              status: action.payload.status,
              progress: "To Do"
            }
          ];

      return {
        ...state,
        tasks: updatedItem
      };

    case "DELETE_TASK":
      const updatedItems = state.tasks.filter((elem) => {
        return elem.id !== action.payload;
      });
      return {
        ...state,
        tasks: updatedItems
      };

    case "SET_SINGLE_TASK":
      return {
        ...state,
        singleTask: action.payload
      };

    case "CLEAR_SINGLE_TASKS":
      return {
        ...state,
        singleTask: null
      };

    case "UPDATE_STATUS":
      const updatedStatus = state.tasks.map((task) => {
        if (task.id === action.payload) {
          switch (task.progress) {
            case "To Do":
              return {
                ...task,
                progress: "In Progress"
              };
            case "In Progress":
              return {
                ...task,
                progress: "Done"
              };
            case "Done":
              return {
                ...task,
                progress: "To Do"
              };
            default:
              return task;
          }
        }
        return task;
      });

      return {
        ...state,
        tasks: updatedStatus
      };

    default:
      return state;
  }
};

export default TasksReducer;

