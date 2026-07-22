import { useEffect, useState } from 'react'
import { Header } from './components/Header'
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
    <div className="app-shell">
      <Header theme={theme} setTheme={setTheme} />

      <main className="content-card">
        <h1>VA To Do List</h1>
        <p>
          Your to-do app now supports both dark and light themes.
        </p>
      </main>
    </div>
  )
}

export default App
