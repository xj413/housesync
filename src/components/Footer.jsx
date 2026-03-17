import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                HS
              </div>
              <span className="font-bold text-xl tracking-tight text-indigo-900">
                HouseSync
              </span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              The group-first housing platform for university students. Find the right people, build the right house, and move in with confidence.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link to="/discovery" className="hover:text-indigo-600">Find Mates</Link></li>
              <li><Link to="/houses" className="hover:text-indigo-600">House Discovery</Link></li>
              <li><Link to="/agreement" className="hover:text-indigo-600">Agreement Tool</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li className="hover:text-indigo-600 cursor-pointer">Safety Centre</li>
              <li className="hover:text-indigo-600 cursor-pointer">Help Desk</li>
              <li className="hover:text-indigo-600 cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">© 2026 HouseSync Technologies Ltd. Built for students.</p>
          <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span className="hover:text-indigo-600 cursor-pointer">Privacy</span>
            <span className="hover:text-indigo-600 cursor-pointer">Cookies</span>
            <span className="hover:text-indigo-600 cursor-pointer">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
