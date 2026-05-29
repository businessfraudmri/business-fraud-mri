import { Eye, Flag, ClipboardCheck, TrendingUp, AlertTriangle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-[#0a1628] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
            SEE WHAT OTHERS MISS.<br />
            PREVENT <span className="text-red-500">FRAUD</span> BEFORE IT HURTS.
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-md">
            Business Fraud MRI™ helps organizations identify hidden fraud risks,
            red flags, vulnerabilities and control gaps using a proactive,
            intelligence-driven and layered approach.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded transition-colors tracking-wider uppercase"
            >
              EXPLORE FRAUD MRI™
            </a>
            <a
              href="#framework"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0a1628] font-bold text-sm px-6 py-3 rounded transition-colors tracking-wider uppercase"
            >
              VIEW FRAMEWORK
            </a>
          </div>
        </div>

        {/* Right: Risk diagram */}
        <div className="flex-1 flex items-center justify-center relative w-full max-w-lg">
          <div className="relative w-full aspect-square max-w-sm">
            {/* Center fraud risk badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Fraud Risk"
                  className="w-48 h-48 rounded-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="bg-red-600 border-4 border-red-400 rounded-full p-4 mb-2">
                    <AlertTriangle className="w-10 h-10 text-white" />
                  </div>
                  <span className="bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded tracking-wider">FRAUD RISK</span>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#0d1f3c] border border-gray-600 rounded-lg px-4 py-2 flex flex-col items-center gap-1 shadow-xl">
              <Eye className="w-5 h-5 text-white" />
              <span className="text-white text-[10px] font-bold tracking-widest">HIDDEN</span>
              <span className="text-white text-[10px] font-bold tracking-widest">RISKS</span>
            </div>

            <div className="absolute top-1/4 right-0 bg-[#0d1f3c] border border-gray-600 rounded-lg px-3 py-2 flex flex-col items-center gap-1 shadow-xl">
              <Flag className="w-5 h-5 text-red-500" />
              <span className="text-white text-[10px] font-bold tracking-widest">RED</span>
              <span className="text-white text-[10px] font-bold tracking-widest">FLAGS</span>
            </div>

            <div className="absolute bottom-1/4 left-0 bg-[#0d1f3c] border border-gray-600 rounded-lg px-3 py-2 flex flex-col items-center gap-1 shadow-xl">
              <ClipboardCheck className="w-5 h-5 text-white" />
              <span className="text-white text-[10px] font-bold tracking-widest">CONTROL</span>
              <span className="text-white text-[10px] font-bold tracking-widest">GAPS</span>
            </div>

            <div className="absolute bottom-2 right-1/4 bg-[#0d1f3c] border border-gray-600 rounded-lg px-3 py-2 flex flex-col items-center gap-1 shadow-xl">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <span className="text-white text-[10px] font-bold tracking-widest">FINANCIAL</span>
              <span className="text-white text-[10px] font-bold tracking-widest">IMPACT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
