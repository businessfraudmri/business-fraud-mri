import { useEffect } from 'react';
import { setSEO } from '../utils/seo';
import { Activity, BarChart2, Search, Shield } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Fraud MRI™ Assessment',
    description: 'Deep diagnostic review to uncover hidden fraud risks, red flags, loopholes and control weaknesses.',
    details: [
      'Comprehensive fraud risk assessment',
      'Hidden vulnerability identification',
      'Control gap analysis',
      'Detailed findings report',
      'Remediation roadmap',
    ],
  },
  {
    icon: BarChart2,
    title: 'Fraud Risk Intelligence',
    description: 'Data-driven insights, trend analysis, OSINT and fraud pattern identification.',
    details: [
      'Trend analysis and forecasting',
      'Fraud pattern identification',
      'OSINT and market intelligence',
      'Competitive fraud landscape',
      'Risk scoring and ranking',
    ],
  },
  {
    icon: Search,
    title: 'Fraud Investigation & Advisory',
    description: 'Internal, external, telecom, business and insurance fraud investigations.',
    details: [
      'Internal fraud investigations',
      'External fraud investigations',
      'Telecom fraud analysis',
      'Insurance fraud review',
      'Advisory recommendations',
    ],
  },
  {
    icon: Shield,
    title: 'Fraud Prevention Framework Design',
    description: 'Build strong controls, reduce opportunities and strengthen fraud resilience.',
    details: [
      'Framework development',
      'Control design and implementation',
      'Policy and procedure development',
      'Technology recommendations',
      'Change management support',
    ],
  },
];

export default function Services() {
  useEffect(() => {
    setSEO(
      'Services',
      'Business Fraud MRI™ services include fraud assessments, risk intelligence, investigations, and prevention framework design.'
    );
  }, []);

  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="bg-[#0a1628] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6">Comprehensive Fraud Solutions</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            From assessment to prevention, we provide end-to-end fraud management services designed to protect your organization.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, description, details }, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-[#0a1628] rounded-lg p-3 w-fit mb-4">
                  <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <ul className="space-y-2">
                  {details.map((detail, i) => (
                    <li key={i} className="flex gap-2 text-gray-600 text-sm">
                      <span className="text-red-600 font-bold">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">Our Approach</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Discovery', desc: 'We conduct an in-depth discovery to understand your business, risks, and control environment.' },
              { step: '2', title: 'Analysis', desc: 'Our experts analyze data, conduct interviews, and assess controls to identify fraud vulnerabilities.' },
              { step: '3', title: 'Reporting', desc: 'We deliver comprehensive findings with clear risk ratings and actionable recommendations.' },
              { step: '4', title: 'Implementation', desc: 'We support implementation of recommendations and monitor progress toward improved fraud resilience.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 items-start bg-white p-6 rounded-lg">
                <div className="bg-red-600 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">{step}</div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss which service best fits your organization's fraud prevention needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#0a1628] hover:bg-gray-900 text-white font-bold px-8 py-3 rounded transition-colors tracking-wider uppercase"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
