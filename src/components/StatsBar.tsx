import { Shield, Target, Users, Globe, Award } from 'lucide-react';

const stats = [
  { icon: Shield, label: '15+', sub: 'Years of Experience' },
  { icon: Target, label: 'Telecom | Fintech | Insurance', sub: 'Business | Internal / External Fraud' },
  { icon: Users, label: 'Fraud Prevention', sub: 'Fraud Investigation' },
  { icon: Globe, label: 'Global Perspective', sub: 'Local Understanding' },
  { icon: Award, label: 'Integrity. Insight.', sub: 'Impact.' },
];

export default function StatsBar() {
  return (
    <div className="bg-[#0d1f3c] border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map(({ icon: Icon, label, sub }, i) => (
            <div key={i} className="flex items-center gap-3 text-white">
              <Icon className="w-8 h-8 text-gray-400 flex-shrink-0" />
              <div>
                <div className="text-sm font-bold leading-tight">{label}</div>
                <div className="text-xs text-gray-400 leading-tight">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
