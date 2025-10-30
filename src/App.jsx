import { Routes, Route } from 'react-router';
import './App.css';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskList';

function App() {
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
    <>
      <div>
        <Routes>
          <Route path="/" element={<TaskList tasks={taskData} />} />
          <Route path="/details/:id" element={<TaskDetail tasks={taskData} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
