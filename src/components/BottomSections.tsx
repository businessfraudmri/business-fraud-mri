import { FileText, CheckCircle, Linkedin, Mail, Phone } from 'lucide-react';

const resources = [
  { label: 'Business Fraud MRI™ Overview (PDF)' },
  { label: 'Proactive Fraud Prevention Pyramid (PDF)' },
  { label: 'Fraud Red Flags Checklist (PDF)' },
  { label: 'Fraud Risk Assessment Template (XLSX)' },
];

const tools = [
  { label: 'Fraud Risk Self-Assessment', checked: false },
  { label: 'Red Flag Indicator Checklist', checked: true },
  { label: 'Control Maturity Quick Check', checked: true },
  { label: 'Fraud Opportunity Mapper', checked: false },
];

export default function BottomSections() {
  return (
    <section className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Resources */}
          <div id="resources">
            <h2 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-4 border-b-2 border-gray-300 pb-2">
              RESOURCES
            </h2>
            <ul className="space-y-3">
              {resources.map(({ label }, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700 hover:text-red-600 cursor-pointer transition-colors">
                  <FileText className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-500" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a
                href="#resources"
                className="inline-block border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 text-xs font-bold px-4 py-2 rounded transition-colors tracking-wider uppercase"
              >
                VIEW ALL RESOURCES
              </a>
            </div>
          </div>

          {/* Free Tools */}
          <div id="tools">
            <h2 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-4 border-b-2 border-gray-300 pb-2">
              FREE TOOLS
            </h2>
            <ul className="space-y-3">
              {tools.map(({ label, checked }, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700 hover:text-red-600 cursor-pointer transition-colors">
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${checked ? 'text-green-500' : 'text-gray-400'}`} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <a
                href="#tools"
                className="inline-block border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 text-xs font-bold px-4 py-2 rounded transition-colors tracking-wider uppercase"
              >
                EXPLORE TOOLS
              </a>
            </div>
          </div>

          {/* About Me */}
          <div>
            <h2 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-4 border-b-2 border-gray-300 pb-2">
              ABOUT ME
            </h2>
            <div className="flex gap-3 items-start">
              <img
                src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Ahmed Ibrahim"
                className="w-20 h-20 object-cover rounded flex-shrink-0"
              />
              <p className="text-xs text-gray-600 leading-relaxed">
                I'm Ahmed Ibrahim, a Fraud Risk & Investigation professional with 15+ years of experience across Telecom, Fintech, Insurance and Business environments.
              </p>
            </div>
            <div className="mt-5">
              <a
                href="#about"
                className="inline-block border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 text-xs font-bold px-4 py-2 rounded transition-colors tracking-wider uppercase"
              >
                READ MORE
              </a>
            </div>
          </div>

          {/* Let's Connect */}
          <div id="contact">
            <h2 className="text-sm font-extrabold text-gray-800 uppercase tracking-wider mb-4 border-b-2 border-gray-300 pb-2">
              LET'S CONNECT
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              Looking to strengthen your fraud defenses? Let's explore how Business Fraud MRI™ can help your organization.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#0a1628] hover:bg-red-600 text-white text-xs font-bold px-5 py-2.5 rounded transition-colors tracking-wider uppercase mb-4"
            >
              GET IN TOUCH
            </a>
            <div className="flex gap-3 mt-2">
              <a href="#" className="bg-[#0a66c2] hover:opacity-90 text-white p-2 rounded-full transition-opacity">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-700 hover:opacity-90 text-white p-2 rounded-full transition-opacity">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="bg-green-600 hover:opacity-90 text-white p-2 rounded-full transition-opacity">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
