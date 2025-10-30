import { useState } from 'react';
import { Routes, Route} from 'react-router';
import './App.css';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskList';

function App() {
  return (
    <>
      <div>
        <Routes> 
          <Route path="/" element={<TaskList/>} />
          <Route path="/details/:id" element={<TaskDetail/>} /> 
        </Routes>
      </div>
    </>
  )
}

export default App
