import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        
        <Link 
          to="/" 
          className="text-xl font-semibold tracking-wide hover:opacity-80 transition"
        >
          Joseph Miller
        </Link>

        <div className="hidden md:flex items-center gap-8 text-lg">
          <Link to="/" className="hover:opacity-80 transition">Home</Link>
          <Link to="/projects" className="hover:opacity-80 transition">Projects</Link>
          <a href="/Joseph_Miller_Resume.pdf" target="_blank" className="hover:opacity-80 transition">
            Resume
          </a>
          <a href="mailto:joeykm91@gmail.com" className="hover:opacity-80 transition">
            Contact
          </a>
        </div>

        <button 
          className="md:hidden p-2 rounded hover:bg-white/10 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4 text-lg bg-black/60 backdrop-blur-lg border-b border-white/10">
          <Link to="/" onClick={() => setOpen(false)} className="py-2 hover:opacity-80">Home</Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="py-2 hover:opacity-80">Projects</Link>
          <a
            href="/Joseph_Miller_Resume.pdf"
            target="_blank"
            onClick={() => setOpen(false)}
            className="py-2 hover:opacity-80"
          >
            Resume
          </a>
          <a
            href="mailto:joeykm91@gmail.com"
            onClick={() => setOpen(false)}
            className="py-2 hover:opacity-80"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}