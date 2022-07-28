import React, {useContext} from "react";
import { TaskContext } from "../../context/TasksContext";
import TaskCard from "../tasks/TaskCard";


const Dashboard = () => {
  const tasks = useContext(TaskContext);
  return (
    <div className="container">
      <h1>Find your upcoming tasks</h1>
      {tasks.map((task: any) => <TaskCard key={task.title}
        date={task.date}
        time={task.time}
        person={task.person}
        title={task.title}
      />)}
    </div>
  )
}
export default Dashboard;
