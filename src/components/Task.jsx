function Task({ task, deleteTask, isCompleted }) {
    return (
        <>
            <li className="task">
                <p
                    onClick={() => isCompleted(task.id)}
                    style={{ textDecoration: task.completed === true ? 'line-through' : 'none' }}
                >{task.text}</p>
                <img
                    src='./src/assets/trash.svg'
                    onClick={() => deleteTask(task.id)} />
            </li>
        </>
    )
}

export default Task