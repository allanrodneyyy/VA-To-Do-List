import { Link, Routes, Route } from 'react-router'
import { useEffect, useState, useRef } from 'react'
import { Header } from './components/Layout/Header'
import { Dashboard } from './pages/Dashboard'
import { Clients } from './pages/Clients'
import { ClientPage } from './pages/ClientPage'
import { Clients as ClientClass } from "./data/clients";
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ?? 'dark'
  })

  const [clientData, setClientData] = useState([]);
  const clientsRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    clientsRef.current = new ClientClass('Clients');
    setClientData(clientsRef.current.clientsList);
  }, [theme])

  return (
    <>
      <Routes>
        <Route index element={<Dashboard theme={theme} setTheme={setTheme} />} />
        <Route path="clients" element={<Clients theme={theme} setTheme={setTheme} clientsRef={clientsRef} setClientData={setClientData} clientData={clientData} />} />
        <Route path="/client/:id" element={<ClientPage theme={theme} setTheme={setTheme} setClientData={setClientData} clientData={clientData} />} />
      </Routes>

    </>
  )
}

export default App
