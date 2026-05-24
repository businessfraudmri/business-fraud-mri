import { useEffect } from 'react';
import { setSEO } from '../utils/seo';
import { Calendar, ArrowRight } from 'lucide-react';

const insights = [
  {
    id: 1,
    title: 'Top 10 Hidden Fraud Red Flags in Business Operations',
    date: 'May 12, 2024',
    category: 'Fraud Prevention',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=500',
    excerpt: 'Learn to identify the subtle warning signs that often precede major fraud incidents in your organization.',
    content: 'Detailed insights about hidden fraud red flags...',
  },
  {
    id: 2,
    title: 'Why Fraud Prevention Starts Before Fraud Happens',
    date: 'Apr 28, 2024',
    category: 'Prevention',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=500',
    excerpt: 'Understanding why proactive fraud prevention is more effective than reactive investigation.',
    content: 'Insights on proactive prevention strategies...',
  },
  {
    id: 3,
    title: 'Telecom Fraud Trends You Shouldn\'t Ignore in 2024',
    date: 'Apr 15, 2024',
    category: 'Telecom',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500',
    excerpt: 'Latest trends and emerging threats in the telecom fraud landscape.',
    content: 'Current telecom fraud trends and analysis...',
  },
  {
    id: 4,
    title: 'Fraud is a Business Problem, Not Just a Compliance Issue',
    date: 'Apr 02, 2024',
    category: 'Business Strategy',
    image: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=500',
    excerpt: 'Why C-suite leadership needs to own fraud prevention as a business imperative.',
    content: 'Strategic insights on fraud as a business problem...',
  },
  {
    id: 5,
    title: 'Building a Culture of Fraud Awareness in Your Organization',
    date: 'Mar 25, 2024',
    category: 'Culture',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500',
    excerpt: 'How employee awareness and engagement are critical to fraud prevention success.',
    content: 'Culture and awareness insights...',
  },
  {
    id: 6,
    title: 'Control Gaps vs. Control Breakdowns: Understanding the Difference',
    date: 'Mar 10, 2024',
    category: 'Controls',
    image: 'https://images.pexels.com/photos/9597997/pexels-photo-9597997.jpeg?auto=compress&cs=tinysrgb&w=500',
    excerpt: 'A technical analysis of control design issues versus execution failures in fraud scenarios.',
    content: 'Control analysis and insights...',
  },
];

export default function Insights() {
  useEffect(() => {
    setSEO(
      'Insights',
      'Latest fraud prevention insights, trends, and research from Business Fraud MRI™ spanning Telecom, Fintech, and Insurance sectors.'
    );
  }, []);

  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="bg-[#0a1628] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6">Latest Insights & Research</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Stay informed with the latest trends, research, and insights in fraud prevention and investigation.
          </p>
        </div>
      </section>

      {/* Featured insight */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
            <img
              src={insights[0].image}
              alt={insights[0].title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">Featured</span>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  {insights[0].date}
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{insights[0].title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{insights[0].excerpt}</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded transition-colors uppercase text-sm tracking-wider"
              >
                Read Full Article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Insights grid */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.slice(1).map((insight) => (
              <div key={insight.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">{insight.category}</span>
                    <span className="text-xs text-gray-500">{insight.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 hover:text-red-600 cursor-pointer transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{insight.excerpt}</p>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-700 text-sm font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Stay Updated on Fraud Trends</h2>
          <p className="text-lg mb-6 opacity-90">
            Subscribe to receive the latest insights and research directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded text-gray-800 w-full sm:w-64"
            />
            <button className="bg-[#0a1628] hover:bg-gray-900 text-white font-bold px-8 py-3 rounded transition-colors tracking-wider uppercase whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
