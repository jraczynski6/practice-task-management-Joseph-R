import TaskDetail from "./TaskDetail";
import { Link } from "react-router";

const TaskList = () => {

    const taskData = [
        {
            id: 1,
            title: 'Complete lesson',
            description: 'React Lesson'
        },
        {
            id: 2,
            title: 'Complete group practice',
            description: 'React State Management and Event Handling - 4 - Task Management'
        },
        {
            id: 3,
            title: 'Start on project',
            description: 'Unit 1 Final Project - React App'
        }
    ];
    
    
    return (
        <div>
            <h2>Task list</h2>
            <ul>
                {taskData.map((task) => {
                    return (
                        <li key={task.id}>
                            <Link to={"/details" + task.id} key={task} >
                            {task.title}
                            </Link>
                           </li>                        
                    );
                })}
            </ul>
                {/* <TaskDetail task={taskData} /> */}
                <TaskDetail task={taskData} />
        </div>
    );

};

export default TaskList;