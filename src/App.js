import React, {useState} from 'react';

import './App.css';
//import { Navbar } from "./components/navbar.jsx";
function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      <h1>My To Do List</h1>


    <div className= 'task-homepage'>
      <div className='task-input'>
        <div className='task-input-item'>
          
          <label>Task</label>
          <input type="text" aria-placeholder="what's the task title?"/>
        </div>
        <div className='task-input-item'>
          <label>Description</label>
          <input type="text" aria-placeholder="what's the task title?"/>
        </div>
        <div className='task-input-item'>

          <button type="button" className="addBtn">Add Task</button>
        </div>
      </div>


      <div className='btn-area'>
        <button className={`secondBtn ${isCompleteScreen===false && 'active'}`}
        onClick={()=>setIsCompleteScreen(false)}>Task</button>
        
        <button className={`secondBtn ${isCompleteScreen===true && 'active'}`}
        onClick={()=>setIsCompleteScreen(true)}>Done</button>
      </div>

      <div className='task-list'>

        <div className='task-list-items'>
        <div>
          <h3>Task 1</h3>
          <p>Description</p>
        </div>
      </div>
    </div>
  </div>
</div> 
  );
}
