import React, {useEffect, useState} from 'react';
//import ReactDOM  from 'react-dom/client';
import { LuClipboardCheck } from "react-icons/lu";
import { IoTrashBin } from "react-icons/io5";
import "./Navbar.css";
import './App.css';
import { Navbar } from "./components/Navbar";


function App() {
  const [isCompleteTask, setIsCompleteTask] = useState(false);
  const [allTask, setTask] =useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [completeTask, setCompleteTask] = useState([]);

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

  const handleDeleteTask = (index)=> {
    let reducedTask = [...allTask];
    reducedTask.splice(index,1);

    localStorage.setItem('task-list', JSON.stringify(reducedTask));
    setTask(reducedTask)
  };

  const handleComplete =(index)=>{
    let time = new Date();
    let dd = time.getDate();
    let mm = time.getMonth () + 1;
    let yyyy = time.getFullYear ();
    let h = time.getHours();
    let m = time.getMinutes();

    let completeOn = mm + '-' + dd + '-' + yyyy + ' at ' + h + ':' + m;

    let filterTask ={
      ...allTask[index],
      completeOn: completeOn
    }

    let updatedCompleteArr = [...completeTask];
    updatedCompleteArr.push(filterTask);
    setCompleteTask(updatedCompleteArr);
    handleDeleteTask(index);
    localStorage.setItem('completeTask', JSON.stringify(updatedCompleteArr));
  };

  
  const handleDeleteCompleteTask = (index)=> {
    let reducedTask = [...completeTask];
    reducedTask.splice(index,1);

    localStorage.setItem('completeTask', JSON.stringify(reducedTask));
    setCompleteTask(reducedTask)
  }

  useEffect(()=>{
    let savedTask = JSON.parse(localStorage.getItem('task-list'));
    let savedCompleteTask = JSON.parse(localStorage.getItem('completeTask'));

    if (savedTask){
      setTask(savedTask);
    }

    if(savedCompleteTask){
      setCompleteTask(savedCompleteTask);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
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
        <button className={`secondBtn ${isCompleteTask===false && 'active'}`}
        onClick={()=>setIsCompleteTask(false)}>Task</button>
        
        <button className={`secondBtn ${isCompleteTask===true && 'active'}`}
        onClick={()=>setIsCompleteTask(true)}>Done</button>
      </div>

      <div className='task-list'>

        {isCompleteTask===false && allTask.map((item, index) => {
          
          return(
        <div className='task-list-item' key={index}>
        <div>
          <h3>{item.task}</h3>
          <p>{item.description}</p>
        </div>
         
      <div>
          <IoTrashBin className='trash' onClick={()=>handleDeleteTask(index)} />
          <LuClipboardCheck className='check' onClick={()=>handleComplete(index)}/>
      </div>
      
      </div>
       );
      })}

      {isCompleteTask===true && completeTask.map((item, index) => {
          
          return(
        <div className='task-list-item' key={index}>
        <div>
          <h3>{item.task}</h3>
          <p>{item.description}</p>
           <p><small>Complete on:{item.completeOn}</small></p>
        </div>
         
      <div>
          <IoTrashBin className='trash' onClick={()=>handleDeleteCompleteTask(index)} />
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