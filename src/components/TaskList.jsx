import TaskDetail from "./TaskDetail";
import { Link } from "react-router";

export default function TaskList({tasks}) {
    console.log(tasks);
    return (
        <div>
            <h2>Task list</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Link to={`/details/${task.id}`}>{task.title}</Link>
                    </li>
        ))}
            </ul>
        </div>
    );

};