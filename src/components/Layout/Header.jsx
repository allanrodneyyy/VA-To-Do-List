import { useState } from "react";
import {
  MdOutlineSpaceDashboard,
  MdOutlinePeople,
  MdOutlineTimer,
  MdCalendarMonth,
  MdOutlineWbSunny,
  MdOutlineDarkMode,
  MdOutlineTaskAlt,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { Link } from "react-router";

export function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const isDark = theme === "dark";

  const menuItems = [
    {
      name: "Dashboard",
      icon: <MdOutlineSpaceDashboard size={24} />,
      link: "/",
    },
    {
      name: "Clients",
      icon: <MdOutlinePeople size={24} />,
      link: "/clients",
    },
    {
      name: "Tasks",
      icon: <MdOutlineTaskAlt size={24} />,
    },
    {
      name: "Time Tracking",
      icon: <MdOutlineTimer size={24} />,
    },
    {
      name: "Calendar",
      icon: <MdCalendarMonth size={24} />,
    },
  ];

  return (
    <header className="topbar">
      <nav className="flex justify-between items-center p-5 border-b border-gray-300">

        <h2 className="font-semibold">
          Virtual Assistant Board
        </h2>

        {/* Desktop Menu */}
        <section className="hidden md:flex gap-5 items-center">
          {menuItems.map((item, index) => (
            <Link to={item.link || "#"} key={index}>
              <div className="flex flex-col items-center text-xs font-light">
                {item.icon}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}

          <button
            className="cursor-pointer flex flex-col items-center text-xs font-light"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? (
              <MdOutlineWbSunny size={24} />
            ) : (
              <MdOutlineDarkMode size={24} />
            )}
          </button>
        </section>


        {/* Mobile Hamburger */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>

      </nav>


      {/* Mobile Menu */}
      {open && (
        <section className="md:hidden border-b border-gray-300 p-5">
          <div className="flex flex-col gap-5">

            {menuItems.map((item, index) => (
              <Link
                to={item.link || "#"}
                key={index}
                onClick={() => setOpen(false)}
              >
                <div className="flex items-center gap-3 text-sm">
                  {item.icon}
                  <p>{item.name}</p>
                </div>
              </Link>
            ))}

            <button
              className="flex items-center gap-3 text-sm"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? (
                <MdOutlineWbSunny size={24} />
              ) : (
                <MdOutlineDarkMode size={24} />
              )}
              <p>Theme</p>
            </button>

          </div>
        </section>
      )}

    </header>
  );
}