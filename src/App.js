import './App.css';
import logo from './logo.svg';
import { Forms } from './components/Forms'
import { useState } from 'react';
import { Task } from './components/Task'

function App() {

  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  function handleSubmit(e){
    e.preventDefault()
    if(task === '') {
      alert('No puedes agregar una tarea vacía!.')
      return
    }

    const newTask = {
      id: Date.now(),
      task: task,
      completed: false
    }
    
    const temp = [newTask, ...taskList]
    setTaskList(temp)

    setTask('')
  }
  function handleChange(e){
    setTask(e.target.value)
  }

  function onUpdateTask(objEditTask){
    const {id, task} = objEditTask

    const temp = [...taskList]
    const element = temp.find(item => item.id === id)
    element.task = task

    setTaskList(temp)
  }
  function onDeleteTask(id){
    const temp = taskList.filter(item => item.id !== id)
    setTaskList(temp)
  }

  return (
    <>
      <div className='contenedorPrincipal'>
          <h1>Prueba técnica</h1>
          <div className='contenedorFormulario'>
            <Forms
            task={task}
            handleSubmit={handleSubmit} 
            handleChange={handleChange}
            
            />
          </div>

          <div className='contenedorTareas'>
            <h2>Lista de tareas</h2>
            <div className='contenedorInfoTareas'>
                {
                  taskList.map((task) => {
                    return(
                      <Task 
                      key={task.id}
                      id = {task.id}
                      task= {task}
                      onUpdateTask={onUpdateTask}
                      onDeleteTask={onDeleteTask}
                    />
                    );
                  }
                  )
                }
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
