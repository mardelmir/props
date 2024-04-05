import { useState } from "react"

function AddTaskForm({ newTask, setNewTask, addTask }) {
    return (
        <form onSubmit={addTask}>
            <input
                type='text'
                value={newTask}
                onChange={(e => setNewTask(e.target.value))}
                placeholder='Nueva tarea' />
            <button type='submit'>+</button>
        </form>
    )
}

export default AddTaskForm

// Corrección clase

// function AddTaskForm2({ addTask }) {
//     const [text, setText] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         addTask(text)
//         setText('')
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={text}
//                 placeholder="escribir tarea"
//                 onChange={e => setText(e.target.value)}
//             />
//             <button type="submit">Agregar</button>
//         </form>
//     )
// }