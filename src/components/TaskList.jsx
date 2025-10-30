import TaskDetail from "./TaskDetail";

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
            <h>Task list</h>
            <ul>
                {taskData.map((task) => {
                    return (
                        <li key={task.id}>
                            {task.title}
                        </li>
                        
                    );
                })}
            </ul>
                {/* <TaskDetail task={taskData} /> */}
                TaskDetail(taskData);
            
        </div>
    );

};

export default TaskList;