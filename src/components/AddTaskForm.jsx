function AddTaskForm({ newTask, setNewTask, addTask }) {
    return (
        <>
            <form onSubmit={addTask}>
                <input
                    type='text'
                    value={newTask}
                    onChange={((e) => setNewTask(e.target.value))}
                    placeholder='Nueva tarea' />
                <button type='submit'>+</button>
            </form>
        </>
    )
}

export default AddTaskForm