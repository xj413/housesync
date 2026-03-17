import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { MapPin, Clock, Bed, Bath, Sparkles, Navigation, CheckCircle, Flame } from 'lucide-react';

const HouseRecommendations = () => {
  const { allHouses } = useApp();

  return (
    <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-2 uppercase tracking-widest">
              <Sparkles size={16} /> Recommended For "The Night Owls"
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900">Top Matches For Your Group</h1>
            <p className="text-gray-600 max-w-2xl mt-2">These properties match your combined budget, area preferences, and group size (4 people).</p>
          </div>
          <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-100 flex">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold text-sm">List View</button>
            <button className="px-6 py-2 text-gray-500 font-bold text-sm hover:text-indigo-600">Map View</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {allHouses.map((house, idx) => (
            <motion.div 
              key={house.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={house.images[0]} 
                    alt={house.address} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-lg border border-white/50 flex items-center gap-1.5 font-bold text-indigo-900 text-sm">
                      <Flame size={14} className="text-orange-500" /> Hot Deal
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider">
                      {house.billsIncluded ? 'Bills Included' : '+ Bills'}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-black text-gray-900">£{house.price}</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">per person / month</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-gray-800 mb-2 leading-tight">{house.address}</h3>
                  <p className="flex items-center gap-1.5 text-gray-500 text-sm mb-6 font-medium">
                    <Navigation size={14} /> {house.distance}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                        <Bed size={16} className="text-indigo-500" />
                      </div>
                      <span className="text-sm font-bold">{house.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                        <Bath size={16} className="text-indigo-500" />
                      </div>
                      <span className="text-sm font-bold">{house.bathrooms} Baths</span>
                    </div>
                  </div>

                  {/* Why it works logic */}
                  <div className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100/50 mb-8">
                    <p className="text-xs font-extrabold text-indigo-700 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <Sparkles size={12} /> Why this fits
                    </p>
                    <p className="text-xs text-indigo-900 font-medium leading-relaxed">
                      Matches your <span className="font-bold">£750 max budget</span> and preferred area. Highly rated for students who prefer <span className="font-bold text-indigo-700">quiet study spaces</span>.
                    </p>
                  </div>

                  <div className="mt-auto flex gap-3">
                    <Link 
                      to={`/house/${house.id}`} 
                      className="flex-1 py-3 bg-gray-900 text-white text-center rounded-xl font-bold hover:bg-gray-800 transition-all shadow-md shadow-gray-200"
                    >
                      View Details
                    </Link>
                    <button className="px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-bold text-sm flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-500" /> Vote
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseRecommendations;
