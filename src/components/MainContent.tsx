import { Activity, BarChart2, Search, Shield, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Fraud MRI™ Assessment',
    desc: 'Deep diagnostic review to uncover hidden fraud risks, red flags, loopholes and control weaknesses.',
  },
  {
    icon: BarChart2,
    title: 'Fraud Risk Intelligence',
    desc: 'Data-driven insights, trend analysis, OSINT and fraud pattern identification.',
  },
  {
    icon: Search,
    title: 'Fraud Investigation & Advisory',
    desc: 'Internal, external, telecom, business and insurance fraud investigations.',
  },
  {
    icon: Shield,
    title: 'Fraud Prevention Framework Design',
    desc: 'Build strong controls, reduce opportunities and strengthen fraud resilience.',
  },
];

const frameworkLayers = [
  {
    label: 'Trusted Business Operations',
    color: '#1a3a6b',
    desc: 'Sustain value, protect revenue, ensure business continuity and stakeholder trust.',
    width: '100%',
  },
  {
    label: 'Response & Enforcement Layer',
    color: '#c0392b',
    desc: 'Take strong action — block, suspend, terminate, escalate and recover.',
    width: '88%',
  },
  {
    label: 'Decision & Collaboration Layer',
    color: '#e67e22',
    desc: 'Cross-functional collaboration, analytics, governance and timely decision making.',
    width: '76%',
  },
  {
    label: 'Fraud Intelligence Layer',
    color: '#27ae60',
    desc: 'Monitor, detect, analyze red flags and build actionable fraud intelligence.',
    width: '64%',
  },
  {
    label: 'Prevention & Opportunity Control Layer (Foundation)',
    color: '#2980b9',
    desc: 'Reduce fraud opportunities through strong onboarding, controls, process design and technology.',
    width: '52%',
  },
];

const insights = [
  {
    title: 'Top 10 Hidden Fraud Red Flags in Business Operations',
    date: 'May 12, 2024',
    img: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    title: 'Why Fraud Prevention Starts Before Fraud Happens',
    date: 'Apr 28, 2024',
    img: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    title: 'Telecom Fraud Trends You Shouldn\'t Ignore in 2024',
    date: 'Apr 15, 2024',
    img: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    title: 'Fraud is a Business Problem, Not Just a Compliance Issue',
    date: 'Apr 02, 2024',
    img: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function MainContent() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: What I Do */}
          <div>
            <h2 className="text-base font-extrabold text-gray-800 uppercase tracking-wider mb-1 border-b-2 border-gray-200 pb-2">
              WHAT I DO
            </h2>
            <div className="space-y-4 mt-4">
              {services.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="flex gap-3 items-start group">
                  <div className="bg-[#0a1628] p-2.5 rounded flex-shrink-0 group-hover:bg-red-600 transition-colors">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-red-600 font-bold text-sm mb-0.5 hover:underline cursor-pointer">{title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="#services"
                className="inline-block border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 text-xs font-bold px-5 py-2 rounded transition-colors tracking-wider uppercase"
              >
                VIEW ALL SERVICES
              </a>
            </div>
          </div>

          {/* Center: Framework */}
          <div id="framework">
            <h2 className="text-base font-extrabold text-gray-800 uppercase tracking-wider mb-1 border-b-2 border-red-600 pb-2">
              MY SIGNATURE FRAMEWORK
            </h2>
            <div className="mt-5 space-y-2">
              {frameworkLayers.map((layer, i) => (
                <div key={i} className="flex items-stretch gap-3">
                  <div
                    className="flex items-center justify-center text-white text-[10px] font-bold text-center px-2 py-2 rounded leading-tight transition-all hover:opacity-90 cursor-pointer"
                    style={{ backgroundColor: layer.color, width: layer.width, minWidth: '120px', flexShrink: 0 }}
                  >
                    {layer.label}
                  </div>
                  <p className="text-gray-500 text-[10px] leading-relaxed self-center flex-1 hidden xl:block">{layer.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="#framework"
                className="inline-block border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 text-xs font-bold px-5 py-2 rounded transition-colors tracking-wider uppercase"
              >
                EXPLORE THE FRAMEWORK
              </a>
            </div>
          </div>

          {/* Right: Latest Insights */}
          <div id="insights">
            <h2 className="text-base font-extrabold text-gray-800 uppercase tracking-wider mb-1 border-b-2 border-red-600 pb-2">
              LATEST INSIGHTS
            </h2>
            <div className="mt-4 space-y-3">
              {insights.map(({ title, date, img }, i) => (
                <div key={i} className="flex gap-3 items-center group cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                  <img
                    src={img}
                    alt={title}
                    className="w-16 h-12 object-cover rounded flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-800 text-xs font-semibold leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                      {title}
                    </h4>
                    <p className="text-gray-400 text-[10px] mt-1">{date}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="#insights"
                className="inline-block border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 text-xs font-bold px-5 py-2 rounded transition-colors tracking-wider uppercase"
              >
                VIEW ALL INSIGHTS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
