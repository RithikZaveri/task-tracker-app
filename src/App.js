import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const[showForm, setshowForm] = useState(false)

  const [tasks, setTasks] = useState([
    { 
        id: 1,
        text: 'Water plants',
        day: 'Feb 5th at 8:30am',
        reminder: true,
    },
    { 
        id: 2,
        text: 'Assignment Completion',
        day: 'Feb 6th at 9pm',
        reminder: false,
    },
    { 
        id: 3,
        text: 'Cycling',
        day: 'Feb 5th at 6:30am',
        reminder: true,
    }
])

//Add Task
const addTask = (task) => {
  console.log('Task Added', task)
  const id = Math.floor(Math.random()*10000 ) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


//Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id!==id))
  }

//Toggle Reminder
  const toggleReminder = (id) => {
    console.log('toggledReminder', id)
    setTasks(tasks.map((task) => task.id === id 
    ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setshowForm(!showForm)} showAdd={showForm}/>    
      {showForm && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ? <Tasks tasks={tasks}
      onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks Available'}
    </div>
  );
}

export default App;
