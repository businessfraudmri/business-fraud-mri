import { useEffect } from 'react';
import { setSEO } from '../utils/seo';

export default function About() {
  useEffect(() => {
    setSEO(
      'About',
      'Learn about Business Fraud MRI™ and our fraud prevention expertise spanning 15+ years across Telecom, Fintech, and Insurance industries.'
    );
  }, []);

  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="bg-[#0a1628] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6">About Business Fraud MRI™</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Business Fraud MRI™ is a comprehensive fraud detection and prevention framework developed through 15+ years of experience working with leading organizations across Telecom, Fintech, Insurance, and Business sectors.
          </p>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To help organizations identify and prevent fraud before it causes significant damage. We believe that fraud is a business problem that requires proactive, intelligence-driven solutions, not just compliance checkboxes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through our layered approach combining prevention, detection, investigation, and response frameworks, we enable businesses to build sustainable fraud resilience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-gray-800 mb-4">Our Expertise</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>15+ years of fraud risk management experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Coverage across Telecom, Fintech, Insurance & Business sectors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Expertise in internal, external, and telecom fraud</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Data-driven insights and trend analysis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✓</span>
                  <span>Global perspective with local understanding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#0a1628] mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We maintain the highest ethical standards in all our work, providing honest assessments and recommendations based on facts and evidence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#0a1628] mb-3">Insight</h3>
              <p className="text-gray-600 text-sm">
                We deliver actionable intelligence that goes beyond surface-level compliance to uncover hidden risks and vulnerabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-[#0a1628] mb-3">Impact</h3>
              <p className="text-gray-600 text-sm">
                We focus on creating measurable, sustainable improvements in fraud prevention and organizational resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">Meet the Team</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Ahmed Ibrahim"
              className="w-48 h-48 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ahmed Ibrahim</h3>
              <p className="text-red-600 font-semibold mb-4">Founder & Fraud Risk Specialist</p>
              <p className="text-gray-600 leading-relaxed mb-3">
                Ahmed Ibrahim is a seasoned Fraud Risk & Investigation professional with 15+ years of experience across Telecom, Fintech, Insurance, and Business environments. He has worked with leading organizations to develop comprehensive fraud prevention frameworks and has successfully investigated complex fraud cases.
              </p>
              <p className="text-gray-600 leading-relaxed">
                His approach combines deep industry knowledge with data-driven analytics to create sustainable fraud resilience strategies that protect organizations while enabling business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Strengthen Your Fraud Defenses?</h2>
          <p className="text-lg mb-6 opacity-90">
            Let's explore how Business Fraud MRI™ can help your organization identify and prevent fraud before it hurts.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#0a1628] hover:bg-gray-900 text-white font-bold px-8 py-3 rounded transition-colors tracking-wider uppercase"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
