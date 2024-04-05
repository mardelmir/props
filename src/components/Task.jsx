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

// Corrección clase

// function Task2({ value, deleteTask, toggleTask }) {
//     return (
//         <>
//             {value.map(element =>
//                 <li key={element.id}>
//                     <p
//                         onClick={() => toggleTask(element.id)}
//                         style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
//                     >{element.text}
//                     </p>
//                     <button onClick={() => deleteTask(element.id)}>Eliminar</button>
//                 </li>
//             )}
//         </>
//     )
// }