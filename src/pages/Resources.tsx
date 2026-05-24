import { useEffect } from 'react';
import { setSEO } from '../utils/seo';
import { FileText, Download } from 'lucide-react';

const resources = [
  {
    title: 'Business Fraud MRI™ Overview',
    description: 'Comprehensive guide to the Business Fraud MRI™ framework, its layers, and implementation approach.',
    type: 'PDF',
    icon: FileText,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Proactive Fraud Prevention Pyramid',
    description: 'Visual guide showing the hierarchical approach to building fraud prevention controls.',
    type: 'PDF',
    icon: FileText,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Fraud Red Flags Checklist',
    description: 'Practical checklist of 50+ fraud red flags across different business areas.',
    type: 'PDF',
    icon: FileText,
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'Fraud Risk Assessment Template',
    description: 'Customizable Excel template for conducting fraud risk assessments in your organization.',
    type: 'XLSX',
    icon: FileText,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Control Maturity Quick Check',
    description: 'Self-assessment tool to evaluate your fraud control environment maturity level.',
    type: 'PDF',
    icon: FileText,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Fraud Investigation Planning Guide',
    description: 'Step-by-step guide for planning and executing internal fraud investigations.',
    type: 'PDF',
    icon: FileText,
    color: 'bg-pink-100 text-pink-600',
  },
];

const tools = [
  {
    title: 'Fraud Risk Self-Assessment',
    description: 'Interactive tool to assess your organization\'s fraud risk level.',
  },
  {
    title: 'Red Flag Indicator Checklist',
    description: 'Quick reference checklist for identifying fraud red flags in transactions.',
  },
  {
    title: 'Control Maturity Quick Check',
    description: 'Evaluate the maturity of your fraud prevention controls.',
  },
  {
    title: 'Fraud Opportunity Mapper',
    description: 'Visual tool to identify and prioritize fraud risks in your processes.',
  },
];

export default function Resources() {
  useEffect(() => {
    setSEO(
      'Resources',
      'Free fraud prevention resources, templates, checklists, and tools from Business Fraud MRI™.'
    );
  }, []);

  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="bg-[#0a1628] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6">Resources & Tools</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Access free resources, templates, and tools to help you assess and improve your fraud prevention capabilities.
          </p>
        </div>
      </section>

      {/* Download resources */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Download Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                  <div className={`${resource.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{resource.type}</span>
                    <button className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm transition-colors">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free tools */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Free Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <button className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm transition-colors">
                  Access Tool
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars & Training */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Upcoming Webinars & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Fraud Detection in Digital Payments',
                date: 'June 15, 2024',
                time: '2:00 PM - 3:00 PM UTC',
              },
              {
                title: 'Building Your Fraud Prevention Framework',
                date: 'June 22, 2024',
                time: '10:00 AM - 11:30 AM UTC',
              },
              {
                title: 'Advanced Fraud Investigation Techniques',
                date: 'July 5, 2024',
                time: '3:00 PM - 4:30 PM UTC',
              },
              {
                title: 'Fraud Trends in 2024: What You Need to Know',
                date: 'July 12, 2024',
                time: '1:00 PM - 2:00 PM UTC',
              },
            ].map((webinar, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{webinar.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{webinar.date}</p>
                <p className="text-gray-600 text-sm mb-4">{webinar.time}</p>
                <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2 rounded transition-colors">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Need Custom Training or Resources?</h2>
          <p className="text-lg mb-6 opacity-90">
            We can develop tailored training materials and resources specific to your organization's needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#0a1628] hover:bg-gray-900 text-white font-bold px-8 py-3 rounded transition-colors tracking-wider uppercase"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

function ArrowRight({ className }: { className: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
