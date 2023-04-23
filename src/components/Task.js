import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
export function Task(props) {
    const {task, onUpdateTask, onDeleteTask} = props;

    const [editing, setEditing] = useState(false)

    const [isCompleted, setIscompleted] = useState(false)

    function EditingModeOn() {
        const [ value, setValue] = useState(task.task)

        function handleChange(e){
            const text = e.target.value
            setValue(text)
        }

        function handleClick(e){
            e.preventDefault()
            
            onUpdateTask(
                {
                    id: task.id,
                    task: value,
                    completed: false
                }
            )
            setEditing(false)
        }
        return(
            <>
                <input 
                    type="text"
                    onChange={handleChange}
                    value={value}
                />
            
                <FontAwesomeIcon icon={faFloppyDisk} onClick={handleClick} className='mx-2 iconos'/>
                
                <FontAwesomeIcon icon={faTrash} onClick={() => onDeleteTask(task.id)} className='iconos'/>
            </>
        )
    }
    function EditingModeOff() {
        return(
            <>
                <div className='row'>
                    <div className='col-8'>
                        <span className={isCompleted ? "todoTarea spanSubrayado": "todoTarea"}
                        onClick={() =>setIscompleted(!isCompleted)}>{task.task}</span>
                    </div>
                    <div className='col-1'>
                        <FontAwesomeIcon icon={faSquareCheck} onClick={() =>setIscompleted(!isCompleted)} className='iconos'/>
                    </div>
                    <div className='col-1'>
                        <FontAwesomeIcon icon={faPenToSquare} onClick={() => setEditing(true)} className='iconos'/>
                    </div>
                    <div className='col-1'>
                        <FontAwesomeIcon icon={faTrash} onClick={() => onDeleteTask(task.id)} className='iconos'/>
                    </div>
                </div>              
            </>
        )
    }
    return(
        <>
            <div className="contenedorTarea" id={task.id}>
                {
                    editing ? <EditingModeOn/> : <EditingModeOff/>
                }
            </div>
        </>

    );
}