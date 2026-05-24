import { Activity, Linkedin, Twitter, Youtube, Send, Facebook, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Frameworks', path: '/frameworks' },
  { label: 'Insights', path: '/insights' },
  { label: 'Resources', path: '/resources' },
  { label: 'Tools', path: '/resources' },
  { label: 'Contact', path: '/contact' },
];

const socials = [
  { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: '#0a66c2' },
  { icon: Twitter, url: 'https://twitter.com', label: 'X/Twitter', color: '#000000' },
  { icon: Youtube, url: 'https://youtube.com', label: 'YouTube', color: '#ff0000' },
  { icon: Send, url: 'https://telegram.com', label: 'Telegram', color: '#0088cc' },
  { icon: Facebook, url: 'https://facebook.com', label: 'Facebook', color: '#1877f2' },
  { icon: Music, url: 'https://tiktok.com', label: 'TikTok', color: '#000000' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
          <nav className="flex flex-wrap gap-x-3 gap-y-2 justify-start md:justify-center">
            {links.map(({ label, path }) => (
              <Link key={label} to={path} className="text-gray-400 hover:text-red-500 text-xs transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-3 justify-start md:justify-end">
            {socials.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="hover:opacity-80 transition-opacity"
              >
                <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            © 2024 Business Fraud MRI™. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
