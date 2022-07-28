import React from "react";
import { Tracing } from "trace_events";

interface Props {
  title: string,
  date: string,
  time: string,
  person: string,
}
const TaskCard: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <span>{props.date} - </span>
      <span> {props.time} hrs</span>
      <p>{props.person}</p>
    </div>
  )
}

export default TaskCard;