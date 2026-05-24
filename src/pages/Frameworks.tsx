import { useEffect } from 'react';
import { setSEO } from '../utils/seo';

const frameworkLayers = [
  {
    label: 'Trusted Business Operations',
    color: '#1a3a6b',
    description: 'Sustain value, protect revenue, ensure business continuity and stakeholder trust.',
    tactics: ['Value protection', 'Revenue security', 'Stakeholder trust', 'Business continuity'],
  },
  {
    label: 'Response & Enforcement Layer',
    color: '#c0392b',
    description: 'Take strong action — block, suspend, terminate, escalate and recover.',
    tactics: ['Blocking mechanisms', 'Account suspension', 'Escalation protocols', 'Recovery procedures', 'Enforcement actions'],
  },
  {
    label: 'Decision & Collaboration Layer',
    color: '#e67e22',
    description: 'Cross-functional collaboration, analytics, governance and timely decision making.',
    tactics: ['Cross-functional teams', 'Analytics dashboards', 'Governance frameworks', 'Decision protocols', 'Communication workflows'],
  },
  {
    label: 'Fraud Intelligence Layer',
    color: '#27ae60',
    description: 'Monitor, detect, analyze red flags and build actionable fraud intelligence.',
    tactics: ['Real-time monitoring', 'Red flag detection', 'Pattern analysis', 'Intelligence reporting', 'Trend identification'],
  },
  {
    label: 'Prevention & Opportunity Control Layer',
    color: '#2980b9',
    description: 'Reduce fraud opportunities through strong onboarding, controls, process design and technology.',
    tactics: ['KYC/KYB controls', 'Strong verification', 'Process improvements', 'Technology safeguards', 'Opportunity reduction'],
  },
];

export default function Frameworks() {
  useEffect(() => {
    setSEO(
      'Frameworks',
      'Business Fraud MRI™ Framework: A comprehensive 5-layer approach to fraud prevention, detection, investigation and response.'
    );
  }, []);

  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="bg-[#0a1628] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-6">The Business Fraud MRI™ Framework</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            A comprehensive, layered approach to fraud prevention that works from the ground up to create sustainable fraud resilience.
          </p>
        </div>
      </section>

      {/* Framework visualization */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-3 mb-12">
            {frameworkLayers.map((layer, i) => (
              <div key={i} className="space-y-2">
                <div
                  className="flex items-center justify-between p-4 rounded text-white font-bold hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ backgroundColor: layer.color }}
                >
                  <span>{layer.label}</span>
                  <span className="text-xs">Layer {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed explanation */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          {frameworkLayers.map((layer, i) => (
            <div key={i} className="mb-10">
              <div className="flex items-start gap-4">
                <div
                  className="w-20 h-20 rounded flex items-center justify-center text-white font-bold text-2xl flex-shrink-0"
                  style={{ backgroundColor: layer.color }}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{layer.label}</h3>
                  <p className="text-gray-600 mb-4">{layer.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {layer.tactics.map((tactic, j) => (
                      <div key={j} className="bg-white p-3 rounded border border-gray-200">
                        <p className="text-sm text-gray-700 font-medium">{tactic}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {i < frameworkLayers.length - 1 && <div className="border-t border-gray-300 mt-10" />}
            </div>
          ))}
        </div>
      </section>

      {/* Key principles */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">Key Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-gray-800 mb-3 text-lg">Holistic Approach</h4>
              <p className="text-gray-600 text-sm">
                Addresses fraud across all layers from prevention through response, not just detection or compliance.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-bold text-gray-800 mb-3 text-lg">Layered Defense</h4>
              <p className="text-gray-600 text-sm">
                Multiple layers ensure that if one layer fails, others catch fraudulent activity before significant damage occurs.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-bold text-gray-800 mb-3 text-lg">Data-Driven</h4>
              <p className="text-gray-600 text-sm">
                Every decision is supported by data, analytics, and intelligence gathered from monitoring and investigation activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Implement the Framework?</h2>
          <p className="text-lg mb-6 opacity-90">
            Let's explore how we can apply this framework to your organization's unique fraud challenges.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#0a1628] hover:bg-gray-900 text-white font-bold px-8 py-3 rounded transition-colors tracking-wider uppercase"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
