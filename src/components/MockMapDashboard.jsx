import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Home, Info, Landmark, Coffee, Dumbbell } from 'lucide-react';

const MockMapDashboard = () => {
  const [activeLoc, setActiveLoc] = useState(null);

  const locations = [
    { id: 1, name: 'Main library', type: 'Library', time: '8 min walk', dist: '0.4m', icon: <Landmark size={14} />, x: 40, y: 30 },
    { id: 2, name: 'Student Union', type: 'Social', time: '12 min walk', dist: '0.6m', icon: <Coffee size={14} />, x: 60, y: 50 },
    { id: 3, name: 'Armitage Gym', type: 'Health', time: '5 min walk', dist: '0.2m', icon: <Dumbbell size={14} />, x: 30, y: 70 },
  ];

  return (
    <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
      {/* Map Content */}
      <div className="md:w-3/5 bg-slate-50 relative p-8 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1.5px,transparent_1.5px)] [background-size:30px_30px]"></div>
        
        {/* Animated Path Mock */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <path d="M 100 200 Q 200 100 400 300 T 600 200" fill="transparent" stroke="#4f46e5" strokeWidth="4" strokeDasharray="10 10" />
        </svg>

        {/* Location Markers */}
        {locations.map(loc => (
            <motion.div 
                key={loc.id}
                onMouseEnter={() => setActiveLoc(loc)}
                onMouseLeave={() => setActiveLoc(null)}
                className="absolute cursor-pointer group"
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                whileHover={{ scale: 1.2 }}
            >
                <div className={`p-3 rounded-2xl shadow-lg border-2 transition-all ${activeLoc?.id === loc.id ? 'bg-indigo-600 border-indigo-400 text-white' : 'bg-white border-white text-indigo-600'}`}>
                    {loc.icon}
                </div>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                    {loc.name}
                </div>
            </motion.div>
        ))}

        <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white shadow-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Active Geo-Sim</span>
        </div>
      </div>

      {/* Info Panel */}
      <div className="md:w-2/5 p-12 border-l border-gray-50 flex flex-col justify-center">
        <h3 className="text-2xl font-black text-gray-900 mb-2">Commute Intelligence</h3>
        <p className="text-gray-500 text-sm mb-8 font-medium">Hover over markers to see real-time student commute paths from popular housing zones.</p>
        
        <div className="space-y-4">
            {locations.map(loc => (
                <div 
                    key={loc.id} 
                    className={`p-4 rounded-2xl border transition-all ${activeLoc?.id === loc.id ? 'border-indigo-600 bg-indigo-50 shadow-sm translate-x-1' : 'border-gray-100'}`}
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <span className={activeLoc?.id === loc.id ? 'text-indigo-600' : 'text-gray-400'}>{loc.icon}</span>
                            <span className="font-bold text-gray-800 text-sm">{loc.name}</span>
                        </div>
                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{loc.time}</span>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-10 p-4 bg-teal-50 rounded-2xl border border-teal-100 text-teal-800 text-xs flex gap-3">
            <Info size={18} className="shrink-0" />
            <p>Commute data is aggregated from over 20,000 student journeys last semester.</p>
        </div>
      </div>
    </div>
  );
};

export default MockMapDashboard;
