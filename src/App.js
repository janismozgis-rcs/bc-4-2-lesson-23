import { useState } from "react";
import getTasks from "./API/getTasks";
import ListItem from "./Components/ListItem";
import NewTaskForm from "./Components/NewTaskForm";

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
          return <ListItem 
            key={index}
            index={index} 
            task={task} 
            deleteTask={deleteTask} 
            changeTaskState={changeTaskState} 
        />
    })

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {tasksList}
            </ul>
            <h2>Create new task</h2>
            <NewTaskForm 
                newTaskName={newTaskName}
                setNewTaskName={setNewTaskName}
                addNewTask={addNewTask}
            />
        </div>
    )
}

export default App;
