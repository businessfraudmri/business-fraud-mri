import { Activity } from 'lucide-react';

const links = ['Home', 'About', 'Services', 'Frameworks', 'Insights', 'Resources', 'Tools', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-red-600 rounded p-1.5">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-xs tracking-wide">
              BUSINESS <span className="text-red-500">FRAUD</span> MRI™
            </div>
            <div className="text-[8px] text-gray-400 tracking-wider">SEE THE RISK. DETECT THE RED FLAGS. PROTECT THE BUSINESS.</div>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
          {links.map((link) => (
            <a key={link} href="#" className="text-gray-400 hover:text-white text-xs transition-colors">
              {link}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-gray-500 text-xs text-center">
          © 2024 Business Fraud MRI™. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
