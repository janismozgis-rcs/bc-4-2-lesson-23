function NewTaskForm(props) {
    const {newTaskName, setNewTaskName, addNewTask} = props

    return (
        <>
            <input 
                type="text" 
                value={newTaskName} 
                onChange={(event) => setNewTaskName(event.target.value)}
            />
            <button onClick={addNewTask}>Add task</button>
        </>
    )
}

export default NewTaskForm;