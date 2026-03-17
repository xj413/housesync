import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Edit3, ShieldCheck, CheckCircle2, AlertCircle, Printer, Share } from 'lucide-react';
import { useApp } from '../context/AppContext';

const AgreementGenerator = () => {
  const { currentUser } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  
  const agreementSections = [
    {
      title: '1. Shared Cleaning Standards',
      desc: 'All members agree to maintain communal areas (kitchen, living room, hallways) at a "Moderate to High" cleanliness level.',
      rules: ['Dishes washed within 24 hours', 'Weekly rota for vacuuming and bins', 'Deep clean once per month']
    },
    {
      title: '2. Guest Policy',
      desc: 'Guests are welcome but should respect the privacy and study schedules of other housemates.',
      rules: ['Overnight guests limited to 2 nights per week', 'Notify group chat for more than 3 daytime guests', 'No parties without unanimous group consent']
    },
    {
      title: '3. Quiet Hours',
      desc: 'To support multiple study schedules and sleep needs.',
      rules: ['Quiet hours from 11:00 PM to 8:00 AM', 'Considerate volume for music/gaming during the day', 'Exam season (May/June) 24hr quiet policy in corridors']
    },
    {
      title: '4. Shared Costs & Expenses',
      desc: 'Management of household essentials beyond individual rent.',
      rules: ['Split cleaning supplies and toilet paper equally', 'Shared milk/bread via "kitty" fund or rotation', 'Joint responsibility for utility overages if not included']
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F9FAFB] min-h-screen">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-2 uppercase tracking-widest">
              <ShieldCheck size={16} /> Beta Feature
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900">Living Agreement</h1>
            <p className="text-gray-600 mt-2">Generated based on your group's shared lifestyle preferences.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-2xl font-bold text-gray-700 hover:border-indigo-400 transition-all shadow-sm">
              <Edit3 size={18} /> Edit Terms
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg">
              <Download size={18} /> Export PDF
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Agreement Document */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Document Header */}
              <div className="bg-indigo-900 p-12 text-white relative">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <FileText size={120} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-black mb-4">HouseSync Agreement</h2>
                  <div className="flex flex-wrap gap-6 text-indigo-100 font-medium text-sm">
                    <p>Status: <span className="text-green-400 font-bold uppercase tracking-widest ml-1">Draft Approved</span></p>
                    <p>Group: <span className="font-bold">The Night Owls</span></p>
                    <p>Date: <span className="font-bold">March 17, 2026</span></p>
                  </div>
                </div>
              </div>

              {/* Document Content */}
              <div className="p-12 space-y-12">
                {agreementSections.map((section, idx) => (
                  <div key={idx} className="relative">
                    <h3 className="text-xl font-black text-gray-900 mb-4">{section.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed italic">"{section.desc}"</p>
                    <ul className="space-y-4">
                      {section.rules.map((rule, ridx) => (
                        <li key={ridx} className="flex gap-4 items-start group">
                          <div className="mt-1 p-0.5 rounded-full bg-indigo-50 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                            <CheckCircle2 size={16} />
                          </div>
                          <span className="text-gray-700 font-medium">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Signing Footer */}
                <div className="pt-12 border-t border-gray-100 mt-8">
                   <h4 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-8">Member Approvals</h4>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                      {['Alex Thompson', 'Sarah Jenkins', 'Maya Patel'].map((name, i) => (
                        <div key={i} className="space-y-3">
                          <div className="h-12 border-b-2 border-gray-100 flex items-end pb-2">
                             <span className="font-medium text-gray-400 italic text-sm">Signed electronically</span>
                          </div>
                          <p className="font-bold text-gray-800 text-sm">{name}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Tools */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              {/* Conflict Resolution Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                 <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <AlertCircle size={22} className="text-orange-500" /> Conflict Protocol
                 </h4>
                 <p className="text-sm text-gray-500 mb-6">If a rule is broken or tension arises, we agree to:</p>
                 <div className="space-y-4">
                    <div className="flex gap-3">
                       <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">1</span>
                       <p className="text-sm text-gray-700">Bring it up within 48 hours in the house group chat.</p>
                    </div>
                    <div className="flex gap-3">
                       <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">2</span>
                       <p className="text-sm text-gray-700">Hold a 15-minute kitchen meeting to resolve fairly.</p>
                    </div>
                 </div>
              </div>

              {/* Utility Tools */}
              <div className="space-y-3">
                 <button className="w-full py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                    <Printer size={18} /> Print for Kitchen Notice
                 </button>
                 <button className="w-full py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                    <Share size={18} /> Share with Landlord
                 </button>
              </div>

              <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Pro Tip</p>
                <p className="text-sm text-indigo-900 leading-relaxed font-medium">
                  Signed agreements reduce roommate conflict by <span className="font-black">65%</span> according to student housing reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementGenerator;
