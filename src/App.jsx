import { Link, Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Dashboard } from './pages/Dashboard'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ?? 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Routes>
        <Route index element={<Dashboard theme={theme} setTheme={setTheme} />} />
      </Routes>

    </>
  )
}

export default App
