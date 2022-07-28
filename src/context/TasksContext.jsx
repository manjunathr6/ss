import React, { createContext, useEffect, useState } from "react";
import tasks from "../data/tasks";

const TaskContext = createContext([]);

function TaskProvider({ children }) {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    setUserDetails(tasks)
  }, [])

  return (
    <TaskContext.Provider value={userDetails}>
        {children}
    </TaskContext.Provider>
  );
}

export { TaskProvider, TaskContext };