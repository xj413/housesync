import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Home, Activity, Zap } from 'lucide-react';

const InteractiveHeroMap = () => {
    const [scannedPoints, setScannedPoints] = useState([]);
    const [pulsePos, setPulsePos] = useState({ x: 50, y: 50 });
    const [nearbyCount, setNearbyCount] = useState(0);

    // Mock house points in a university area (Manchester inspired)
    const points = [
        { id: 1, x: 30, y: 40, price: '£650', status: 'High Fit' },
        { id: 2, x: 60, y: 30, price: '£720', status: 'Perfect' },
        { id: 3, x: 45, y: 65, price: '£580', status: 'Fair' },
        { id: 4, x: 75, y: 60, price: '£800', status: 'Top Rated' },
        { id: 5, x: 20, y: 70, price: '£550', status: 'Budget Match' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const newX = Math.random() * 80 + 10;
            const newY = Math.random() * 80 + 10;
            setPulsePos({ x: newX, y: newY });
            
            // "Detect" nearby points
            const found = points.filter(p => Math.abs(p.x - newX) < 20 && Math.abs(p.y - newY) < 20);
            setScannedPoints(found);
            setNearbyCount(prev => (prev + 1) % 100);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[450px] bg-slate-900 rounded-[3rem] overflow-hidden border-[8px] border-white shadow-2xl glass-morphism">
            {/* Map Grid Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            {/* University Central Point */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-pulse">
                    <Zap className="text-indigo-600" size={24} />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-indigo-600 text-[10px] text-white font-bold px-2 py-1 rounded truncate uppercase tracking-widest whitespace-nowrap">
                    Main Campus
                </div>
            </div>

            {/* Scanning Radar */}
            <motion.div 
                animate={{ x: `${pulsePos.x}%`, y: `${pulsePos.y}%` }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute w-40 h-40 bg-indigo-500/20 rounded-full border border-indigo-500/50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
                <div className="absolute inset-0 rounded-full border-2 border-indigo-400 animate-ping opacity-30"></div>
            </motion.div>

            {/* House Points */}
            {points.map(p => (
                <div 
                    key={p.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                    <div className={`w-3 h-3 rounded-full ${scannedPoints.find(sp => sp.id === p.id) ? 'bg-indigo-400 scale-150 shadow-[0_0_15px_rgba(129,140,248,0.8)]' : 'bg-slate-700'}`}></div>
                    
                    <AnimatePresence>
                        {scannedPoints.find(sp => sp.id === p.id) && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 whitespace-nowrap"
                            >
                                <div className="bg-white p-3 rounded-2xl shadow-xl border border-indigo-50">
                                    <p className="text-[10px] font-black text-indigo-400 uppercase tracking-tighter mb-1">{p.status}</p>
                                    <p className="text-sm font-black text-gray-900">{p.price}<span className="text-[10px] text-gray-400 font-bold">/pp</span></p>
                                </div>
                                <div className="w-2 h-2 bg-white rotate-45 mx-auto -mt-1 border-r border-b border-indigo-50"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}

            {/* Geo Tracking UI Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                <div className="bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <Navigation size={20} className="animate-bounce" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Live Sync Tracker</p>
                        <p className="text-sm font-black text-white">Fallowfield Area</p>
                    </div>
                </div>
                
                <div className="bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                    <Activity className="text-teal-400 animate-pulse" size={20} />
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Nearby Matches</p>
                        <p className="text-sm font-black text-teal-400">{24 + nearbyCount} Groups active</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveHeroMap;
