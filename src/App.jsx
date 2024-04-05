import { useState } from 'react';
import './App.css'
import AddTaskForm from './components/AddTaskForm';
import Tasks from './components/Tasks';

const App = () => {
  const [newTask, setNewTask] = useState('') // no es necesario
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (e) => {
    e.preventDefault()
    const key = `CreatedAt${new Date().getTime()}` // asegura id único
    setTasks([
      ...tasks,
      {
        id: (tasks.length + 1 + key),
        text: newTask,
        completed: false
      }
    ])
    setNewTask('')
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const isCompleted = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task))
  }

  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask} />
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        isCompleted={isCompleted} />
    </>
  );
};

export default App;


// Corrección clase

// const App2 = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, text: 'Hacer la compra', completed: false },
//     { id: 2, text: 'Llamar al médico', completed: true },
//     { id: 3, text: 'Hacer ejercicio', completed: false }
//   ]);

//   // const [cocretas, setCocretas] = useState([
//   //   { id: 1, text: 'Aprender React', completed: false },
//   //   { id: 2, text: 'Aprender ganchillo', completed: true },
//   //   { id: 3, text: 'Tomar el sol', completed: false }
//   // ]);

//   const addTask = (text) => {
//     setTasks([
//       ...tasks,
//       {
//         id: tasks.length + 1,
//         text,
//         completed: false
//       }
//     ])
//   }

//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId))
//   }

//   const toggleTask = (taskId) => {
//     setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task))
//   }

//   // ALT: Para poder reutilizar el componente Task con dos arrays diferentes, se hace el map aquí. 
//   return (
//     <>
//       <h1>Lista de tareas (clase)</h1>
//       <AddTaskForm addTask={addTask} />
//       <ul>
//         {//NOTA: Value es la propiedad que se le pasa al componente
//           tasks.map(task => <Task v
//             alue={task}
//             deleteTask={deleteTask}
//             toggleTask={toggleTask} />)}
//       </ul>
//       {/* <ul>
//         {cocretas.map(cocreta => <Task value={cocreta} />)}
//       </ul> */}
//     </>
//   )
// }