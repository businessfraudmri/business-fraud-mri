import { useEffect } from 'react';
import { setSEO } from '../utils/seo';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    setSEO(
      '404 - Page Not Found',
      'The page you are looking for could not be found on Business Fraud MRI™ website.'
    );
  }, []);

  return (
    <div className="bg-white min-h-[calc(100vh-130px)] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded transition-colors uppercase tracking-wider"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-6 py-3 rounded transition-colors uppercase tracking-wider"
          >
            Get Help
          </Link>
        </div>

        {/* Helpful links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-4">Suggested links:</p>
          <ul className="space-y-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Services', path: '/services' },
              { label: 'Frameworks', path: '/frameworks' },
              { label: 'Insights', path: '/insights' },
              { label: 'Resources', path: '/resources' },
              { label: 'Contact', path: '/contact' },
            ].map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="text-red-600 hover:text-red-700 text-sm transition-colors"
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
