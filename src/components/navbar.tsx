import { Link } from "react-router-dom";
import navbarButtons from "./helperFunctions/navbarButtons";
import DarkModeSwitch from "./darkModeSwitch";
import { useState } from "react";
import {  Menu, X } from "lucide-react";
import { useThemeContext } from "../context/themeContext"
import ResumeDialog from "./resumeDialog";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { breakpoint } = useThemeContext();
  const buttons = navbarButtons();

  const NavLinks = () => (
    <>
      {buttons.map(({ label, path }) => (
        <Link
          key={label}
          to={path}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
          onClick={() => setSidebarOpen(false)}
        >
          {label}
        </Link>
      ))}

      <ResumeDialog/>

    </>
  );

  return (
    <div className="flex p-2 items-center justify-between text-slate-gray dark:text-white relative">
      {/* Left */}
      <div className="ml-2 flex justify-center items-center">
        <Link to="/" className="absolute left-0">
          <span
            className="ml-2 h-10 w-auto text-xl md:text-2xl"
            style={{ fontFamily: "'Zalando Sans Expanded', sans-serif" }}
          >
            JBN
          </span>
        </Link>
      </div>

      {/* Right */}
      {breakpoint !== "mobile" && (
        <div className="flex gap-6 items-center">
          <NavLinks />
          <DarkModeSwitch />
        </div>
      )}

      {/* Mobile Hamburger */}
      {breakpoint === "mobile" && (
        <>
          <button
            className="p-2"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {sidebarOpen && (
            <div className="fixed inset-0 z-50 flex justify-end">
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setSidebarOpen(false)}
              />
              {/* Sidebar */}
              <div className="relative bg-white dark:bg-black w-64 h-full shadow-lg flex flex-col p-6 gap-6 animate-slideIn">
                <button
                  className="absolute top-4 right-4"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>

                <nav className="flex flex-col gap-4 mt-10">
                  <NavLinks />
                </nav>

                <div className="mt-auto">
                  <DarkModeSwitch />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}