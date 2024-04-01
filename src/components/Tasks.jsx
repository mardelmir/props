import Task from "./Task"

function Tasks({ tasks, deleteTask, isCompleted }) {
    return (
        <>
            <ul className="list">
                {tasks.map(task =>
                    <Task
                        key={task.id}
                        task={{ ...task }}
                        deleteTask={deleteTask}
                        isCompleted={isCompleted}
                    />)}
            </ul>
        </>)
}

export default Tasks