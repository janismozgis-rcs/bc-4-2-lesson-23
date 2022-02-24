function ListItem(props) {
    const {index, task, deleteTask, changeTaskState} = props

    const textDecoration = task.isCompleted ? 'line-through' : 'none'
    let deleteBtn = ''
    if (task.isCompleted) {
        deleteBtn = <button onClick={() => deleteTask(index)}>Delete</button>
    }

    return (
        <li>
            <input type="checkbox" checked={task.isCompleted} onChange={() => changeTaskState(index)} />
            <span style={{textDecoration: textDecoration}}>{task.title}</span>
            {deleteBtn}
        </li>
    )
}

export default ListItem;