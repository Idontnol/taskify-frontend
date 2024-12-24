// components/Task.js
import React from "react";
import './index.css';

const TaskComponent = ({ title, startDate, deadline }) => {
  return (
    <div className="task2">
      <p className="task-compo-title">{title}</p>
      <div className="">
      <p>
        <span className=""> Start date</span><span className="dat"> {startDate.split("T")[0]}</span>
      </p>
      <p>
      <span className="">  Deadline</span><span className="dat"> {deadline.split("T")[0]}</span>
      </p>

      </div>
      
    </div>
  );
};

export default TaskComponent;
