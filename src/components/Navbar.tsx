import { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'SERVICES', path: '/services' },
  { label: 'FRAMEWORKS', path: '/frameworks' },
  { label: 'INSIGHTS', path: '/insights' },
  { label: 'RESOURCES', path: '/resources' },
  { label: 'TOOLS', path: '/resources' },
  { label: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-[#0a1628] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 min-w-0 hover:opacity-90 transition-opacity">
          <div className="bg-red-600 rounded p-1.5 flex-shrink-0">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-sm tracking-wide">
              BUSINESS <span className="text-red-500">FRAUD</span> MRI™
            </div>
            <div className="text-[9px] text-gray-400 tracking-wider">SEE THE RISK. DETECT THE RED FLAGS. PROTECT THE BUSINESS.</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 text-[11px] font-semibold tracking-wider">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`hover:text-red-500 transition-colors pb-1 ${isActive(path) ? 'text-white border-b-2 border-red-500' : 'text-gray-300'}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded transition-colors tracking-wider"
        >
          LET'S CONNECT
        </Link>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0d1f3c] border-t border-gray-700 px-4 py-4 space-y-3">
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setOpen(false)}
              className={`block text-sm transition-colors font-semibold ${isActive(path) ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="inline-block mt-2 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded tracking-wider">
            LET'S CONNECT
          </Link>
        </div>
      )}
    </nav>
  );
}
