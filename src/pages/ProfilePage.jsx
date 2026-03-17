import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { 
  MapPin, GraduationCap, Compass, Briefcase, 
  Settings, Instagram, Twitter, Linkedin, 
  Clock, Sparkles, AlertCircle, CheckCircle2,
  ChevronLeft
} from 'lucide-react';

const ProfilePage = () => {
  const { id } = useParams();
  const { allStudents } = useApp();
  const user = allStudents.find(s => s.id === id) || allStudents[0];

  const lifestyleMetrics = [
    { label: 'Cleanliness', value: user.lifestyle.cleanliness, color: 'bg-teal-500' },
    { label: 'Sleep', value: user.lifestyle.sleepSchedule, color: 'bg-indigo-500' },
    { label: 'Social', value: user.lifestyle.socialVibe, color: 'bg-purple-500' },
    { label: 'Guests', value: user.lifestyle.guestFrequency, color: 'bg-orange-500' }
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container max-w-5xl">
        <Link to="/discovery" className="inline-flex items-center gap-2 text-gray-500 font-bold hover:text-indigo-600 mb-8 transition-colors">
          <ChevronLeft size={20} /> Back to Discovery
        </Link>

        {/* Profile Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 mb-12">
          {/* Header/Cover */}
          <div className="h-48 bg-gradient-to-r from-indigo-900 via-indigo-700 to-purple-800 relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>

          <div className="px-10 pb-12 -mt-20 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
              <div className="flex flex-col md:flex-row items-end gap-6">
                <div className="w-40 h-40 rounded-[2.5rem] border-8 border-white overflow-hidden shadow-2xl">
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <div className="pb-2">
                  <h1 className="text-4xl font-extrabold text-gray-900">{user.name}</h1>
                  <p className="text-gray-500 font-bold flex items-center gap-2 mt-1">
                    <GraduationCap size={18} className="text-indigo-500" /> {user.university}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mb-2 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
                  Send Invite
                </button>
                <button className="p-3 bg-gray-50 rounded-2xl border border-gray-200 hover:bg-white hover:border-indigo-200 transition-all">
                  <Settings size={22} className="text-gray-500" />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-7 space-y-10">
                {/* About */}
                <section>
                  <h3 className="text-xl font-bold mb-4">About the Future Housemate</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{user.bio}</p>
                </section>

                {/* Preferences Grid */}
                <section>
                  <h3 className="text-xl font-bold mb-6">Lifestyle Profile</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {lifestyleMetrics.map((m, i) => (
                      <div key={i} className="p-5 rounded-3xl bg-gray-50/50 border border-gray-100 flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${m.color}`}></div>
                        <div>
                          <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{m.label}</p>
                          <p className="font-bold text-gray-800">{m.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Compatibility Summary */}
                <section className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100">
                  <h3 className="text-lg font-bold text-indigo-900 mb-6 flex items-center gap-2">
                    <Sparkles size={20} className="text-indigo-600" /> Why we'd thrive together
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                      <p className="text-sm text-gray-700"><span className="font-bold">Budget Synergy:</span> Both looking in the £550-£750 range.</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                      <p className="text-sm text-gray-700"><span className="font-bold">Social Equilibrium:</span> Shared preference for a balanced, semi-social home.</p>
                    </div>
                    <div className="flex gap-3">
                      <AlertCircle size={20} className="text-orange-500 shrink-0" />
                      <p className="text-sm text-gray-700"><span className="font-bold">Note:</span> Differs in commute tolerance (10 min vs 25 min).</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="md:col-span-5 space-y-8">
                {/* Visual Tags */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                   <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Interests & Tags</h4>
                   <div className="flex flex-wrap gap-2">
                      {user.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-xl text-sm font-bold border border-gray-100">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-indigo-50/50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400">Preferred Areas</p>
                      <p className="text-sm font-bold text-gray-700">{user.preferredAreas.join(', ')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-indigo-50/50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400">Study Style</p>
                      <p className="text-sm font-bold text-gray-700">{user.lifestyle.studyStyle}</p>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex justify-center gap-6 pt-6">
                  <button className="text-gray-400 hover:text-indigo-600 transition-colors"><Instagram size={22} /></button>
                  <button className="text-gray-400 hover:text-indigo-600 transition-colors"><Twitter size={22} /></button>
                  <button className="text-gray-400 hover:text-indigo-600 transition-colors"><Linkedin size={22} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
