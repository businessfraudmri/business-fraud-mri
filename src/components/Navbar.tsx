import { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const navLinks = ['HOME', 'ABOUT', 'SERVICES', 'FRAMEWORKS', 'INSIGHTS', 'RESOURCES', 'TOOLS', 'CONTACT'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0a1628] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="bg-red-600 rounded p-1.5 flex-shrink-0">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-sm tracking-wide">
              BUSINESS <span className="text-red-500">FRAUD</span> MRI™
            </div>
            <div className="text-[9px] text-gray-400 tracking-wider">SEE THE RISK. DETECT THE RED FLAGS. PROTECT THE BUSINESS.</div>
          </div>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 text-[11px] font-semibold tracking-wider">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`hover:text-red-500 transition-colors pb-1 ${link === 'HOME' ? 'text-white border-b-2 border-red-500' : 'text-gray-300'}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded transition-colors tracking-wider"
        >
          LET'S CONNECT
        </a>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0d1f3c] border-t border-gray-700 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link} href="#" className="block text-sm text-gray-300 hover:text-red-500 transition-colors font-semibold">
              {link}
            </a>
          ))}
          <a href="#contact" className="inline-block mt-2 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded tracking-wider">
            LET'S CONNECT
          </a>
        </div>
      )}
    </nav>
  );
}
