import React, {useEffect, useState} from 'react';
import { LuClipboardCheck } from "react-icons/lu";
import { IoTrashBin } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import './App.css';

//import { Navbar } from "./components/navbar.jsx";



function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTask, setTask] =useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");


  const handleAddTask = () => {
    let newTaskItem = {
      task:newTask,
      description:newDescription
    }

    let updatedTaskArr =[...allTask];
    updatedTaskArr.push(newTaskItem)
    setTask(updatedTaskArr);
    localStorage.setItem('task-list', JSON.stringify(updatedTaskArr))
  };

  useEffect(()=>{
    let savedTask = JSON.parse(localStorage.getItem('task-list'))
    if (savedTask){
      setTask(savedTask);
    }
  },[])

  return (
    <div className="App">
      <h1>My To Do List</h1>


    <div className= 'task-homepage'>
      <div className='task-input'>
        <div className='task-input-item'>
          
          <label>Task</label>
          <input type="text" value= {newTask} onChange= {(e) => setNewTask(e.target.value)} aria-placeholder="what's the task title?"/>
        </div>
        <div className='task-input-item'>
          <label>Description</label>
          <input type="text" value= {newDescription} onChange= {(e) => setNewDescription(e.target.value)} aria-placeholder="what's the task title?"/>
        </div>
        <div className='task-input-item'>

          <button type="button" onClick={handleAddTask} className="addBtn">Add Task</button>
        </div>
      </div>

      <div className='btn-area'>
        <button className={`secondBtn ${isCompleteScreen===false && 'active'}`}
        onClick={()=>setIsCompleteScreen(false)}>Task</button>
        
        <button className={`secondBtn ${isCompleteScreen===true && 'active'}`}
        onClick={()=>setIsCompleteScreen(true)}>Done</button>
      </div>

      <div className='task-list'>

        {allTask.map((item, index) => {
          return(
        <div className='task-list-item' key={index}>
        <div>
          <h3>{item.task}</h3>
          <p>{item.description}</p>
        </div>
         
      <div>
          <IoTrashBin className='trash' />
          <LuClipboardCheck className='check' />
      </div>
      
      </div>
       );
      })}
    </div>
  </div>
</div> 
  );
}

export default App;