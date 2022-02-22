import { useState } from "react";
import getTasks from "./API/getTasks";

function App() {
    const [tasks, setTasks] = useState(getTasks())
    const [newTaskName, setNewTaskName] = useState('')

    const changeTaskState = (taskIndex) => {
        tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted
        setTasks([...tasks])
    }

    const deleteTask = (taskIndex) => {
        tasks.splice(taskIndex, 1)
        setTasks([...tasks])
    }

    const addNewTask = () => {
        const newTask = {
            title: newTaskName,
            isCompleted: false,
        }
        setTasks([...tasks, newTask])
        setNewTaskName('')
    }


    const tasksList = tasks.map((task, index) => {
        const textDecoration = task.isCompleted ? 'line-through' : 'none'
        let deleteBtn = ''
        if (task.isCompleted) {
            deleteBtn = <button onClick={() => deleteTask(index)}>Delete</button>
        }

        return (
            <li key={index}>
                <input type="checkbox" checked={task.isCompleted} onChange={() => changeTaskState(index)} />
                <span style={{textDecoration: textDecoration}}>{task.title}</span>
                {deleteBtn}
            </li>
        )
    })

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {tasksList}
            </ul>
            <h2>Create new task</h2>
            <input 
                type="text" 
                value={newTaskName} 
                onChange={(event) => setNewTaskName(event.target.value)}
            />
            <button onClick={addNewTask}>Add task</button>
        </div>
    )
}

export default App;
