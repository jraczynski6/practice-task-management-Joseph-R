
import { useParams, Link } from "react-router";

export default function TaskDetail({ tasks }) {
    const { id } = useParams();
    const task = tasks.find((task) => String(task.id) === id);


    return (
        <div className="container">
            <h2>Task Details</h2>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <Link to="/">Back to list</Link>
        </div>
    );
};


