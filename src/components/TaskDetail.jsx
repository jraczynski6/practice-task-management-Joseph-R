import React from "react";
import TaskList from "./TaskList";
import { useParams, Link } from "react-router";

const TaskDetail = ({ tasks }) => {
    const id = useParams();

    const task = tasks.find((task) => String(task.id) === id);

    return (
        <div>
            <h2>DETAILS</h2>
            <div className="task-details">
                <div>
                    <h5>{task.title}</h5>
                </div>
                <div>
                    <strong>Description: </strong>
                    {task.description}
                </div>
            </div>
        </div>
    );
};

export default TaskDetail;
