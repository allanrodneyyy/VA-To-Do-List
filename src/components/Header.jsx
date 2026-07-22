import { FaRegMoon } from "react-icons/fa";
import { MdOutlineSpaceDashboard, MdOutlinePeople, MdOutlineTimer, MdCalendarMonth, MdOutlineWbSunny, MdOutlineDarkMode, MdOutlineTaskAlt } from "react-icons/md";
import { Link } from "react-router";


export function Header({ theme, setTheme }) {
  const isDark = theme === 'dark'

  return (
    <header className="topbar">
      <nav className="flex justify-between items-center p-5 border-b-gray-300 border-b">
        <h2 className="font-semibold">Virtual Assistant Board</h2>

        <section className="flex gap-5">
          <div className="flex gap-1 flex-col items-center text-xs font-light">
            <MdOutlineSpaceDashboard size={24} />
            <p>Dashboard</p>
          </div>
          <div className="flex gap-1 flex-col items-center text-xs font-light">
            <MdOutlinePeople size={24} />
            <p>Clients</p>
          </div>
          <div className="flex gap-1 flex-col items-center text-xs font-light">
            <MdOutlineTaskAlt size={24} />
            <p>Tasks</p>
          </div>

          <div className="flex gap-1 flex-col items-center text-xs font-light">
            <MdOutlineTimer size={24} />
            <p>Time Tracking</p>
          </div>

          <div className="flex gap-1 flex-col items-center text-xs font-light">
            <MdCalendarMonth size={24} />
            <p>Calendar</p>
          </div>


          <button type="button" className="theme-toggle cursor-pointer flex gap-1 flex-col items-center text-xs font-light"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
          >
            {isDark ? <MdOutlineWbSunny size={24} /> : <MdOutlineDarkMode size={24} />}
          </button>
        </section>

      </nav>
    </header>
  )
}