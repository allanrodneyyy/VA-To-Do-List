export function Header({ theme, setTheme }) {
  const isDark = theme === 'dark'

  return (
    <header className="topbar">
      <h2>VA To Do List</h2>

      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      >
        {isDark ? 'Switch to Light' : 'Switch to Dark'}
      </button>
    </header>
  )
}