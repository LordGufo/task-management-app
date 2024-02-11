import { useEffect, useReducer } from "react";

// Custom hook to manage state and local storage
function useLocalStorageReducer(key, reducer, initialState) {
  // Load initial state from local storage if available
  const storedState = localStorage.getItem(key);
  const initial = storedState ? JSON.parse(storedState) : initialState;

  // Create the state and dispatch using useReducer
  const [state, dispatch] = useReducer(reducer, initial);

  // Update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;