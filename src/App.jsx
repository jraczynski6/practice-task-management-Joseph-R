import { useState } from 'react';
import { Routes, Route} from 'react-router';
import './App.css';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskList';

function App() {
  return (
    <>
      <div>
        <TaskList />
        {/* <taskDetail /> */}

        <Routes> 
          <Route path="TaskDetail" element={<TaskDetail/>} /> 
          <Route path="TaskList" element={<TaskList/>} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
