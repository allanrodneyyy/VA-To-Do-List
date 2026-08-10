import { Link, Routes, Route } from 'react-router'
import { useEffect, useState, useRef } from 'react'
import { Header } from './components/Layout/Header'
import { Dashboard } from './pages/Dashboard'
import { Clients } from './pages/clients/Clients'
import { ClientPage } from './pages/clients/ClientPage'
import { Clients as ClientClass } from "./data/clients";
import './App.css'
import { TasksPage } from './pages/tasks/TasksPage'
import { Tasks } from './data/tasks'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ?? 'dark'
  })

  const [clientData, setClientData] = useState([]);
  const [tasks, setTasks] = useState([]);
  const clientsRef = useRef(null);
  const tasksRef = useRef([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    clientsRef.current = new ClientClass('Clients');
    tasksRef.current = new Tasks('Tasks');

    setClientData(clientsRef.current.clientsList);
    setTasks(tasksRef.current.tasksList);
  }, [theme])

  return (
    <>
      <Routes>
        <Route index element={<Dashboard theme={theme} setTheme={setTheme} />} />
        <Route path="clients" element={<Clients theme={theme} setTheme={setTheme} clientsRef={clientsRef} setClientData={setClientData} clientData={clientData} />} />
        <Route path="/client/:id" element={<ClientPage theme={theme} setTheme={setTheme} setClientData={setClientData} clientData={clientData} />} />
        <Route path="tasks" element={<TasksPage theme={theme} setTheme={setTheme} tasks={tasks} setTasks={setTasks} tasksRef={tasksRef} />} />
      </Routes>

    </>
  )
}

export default App
