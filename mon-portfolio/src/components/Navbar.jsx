// --- Navbar.jsx ---
import { useState } from "react";
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md w-full top-0 z-50">
    <h1 className="text-2xl font-bold">Mon Portfolio</h1>
      <div className="relative">
        <button className="px-4 py-2 bg-gray-900 text-white rounded-xl" onClick={() => setOpen(!open)}>
          Menu
        </button>
        {open && (
          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-xl p-4 grid gap-2 w-40">
          <a href="/" className="hover:text-blue-600">Accueil</a>
          <a href="/projects" className="hover:text-blue-600">Projets</a>
          <a href="/cv" className="hover:text-blue-600">CV</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
          </div>
      )}
    </div>
  </nav>
);
}