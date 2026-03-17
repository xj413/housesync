import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Users, Search, MessageCircle, Building2, LayoutGrid, Menu, X, LogOut, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const { isLoggedIn, userType, currentUser, currentLandlord, logout } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const studentLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <Home size={18} /> },
    { name: 'Find Mates', path: '/discover', icon: <Search size={18} /> },
    { name: 'My Group', path: '/group', icon: <Users size={18} /> },
    { name: 'Houses', path: '/properties', icon: <Building2 size={18} /> },
    { name: 'Chat', path: '/chat', icon: <MessageCircle size={18} /> },
  ];

  const landlordLinks = [
    { name: 'Dashboard', path: '/landlord', icon: <LayoutGrid size={18} /> },
    { name: 'Listings', path: '/landlord/listings', icon: <Building2 size={18} /> },
    { name: 'Requests', path: '/landlord/requests', icon: <MessageCircle size={18} /> },
  ];

  const links = userType === 'landlord' ? landlordLinks : studentLinks;
  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: '72px',
      background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center',
    }}>
      <div className="container-lg" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link to={isLoggedIn ? (userType === 'landlord' ? '/landlord' : '/dashboard') : '/'} style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            background: 'var(--gradient-main)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 900, fontSize: '0.875rem', boxShadow: '0 2px 8px rgba(79,70,229,0.3)',
          }}>HS</div>
          <span style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--text)' }}>
            HouseSync <span style={{ color: 'var(--durham-purple)', fontWeight: 900 }}>Durham</span>
          </span>
        </Link>

        {isLoggedIn && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {links.map(link => (
              <Link key={link.path} to={link.path} style={{
                display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px',
                borderRadius: 'var(--radius-md)', fontSize: '0.875rem', fontWeight: 600,
                color: isActive(link.path) ? 'var(--primary)' : 'var(--text-secondary)',
                background: isActive(link.path) ? '#EEF2FF' : 'transparent',
                transition: 'all 0.2s ease',
              }}>
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          {isLoggedIn ? (
            <>
              {userType === 'student' && currentUser && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 12px 6px 6px', background: 'var(--bg-alt)', borderRadius: 'var(--radius-full)' }}>
                  <img src={currentUser.avatar} alt="" className="avatar avatar-sm" />
                  <div>
                    <div style={{ fontSize: '0.813rem', fontWeight: 700, lineHeight: 1.2 }}>{currentUser.name.split(' ')[0]}</div>
                    <div style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Shield size={9} /> Verified
                    </div>
                  </div>
                </div>
              )}
              {userType === 'landlord' && currentLandlord && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'var(--bg-alt)', borderRadius: 'var(--radius-full)' }}>
                  <Building2 size={16} style={{ color: 'var(--durham-purple)' }} />
                  <span style={{ fontSize: '0.813rem', fontWeight: 700 }}>{currentLandlord.name}</span>
                </div>
              )}
              <button onClick={() => { logout(); navigate('/'); }} className="btn btn-ghost btn-sm" style={{ color: 'var(--text-muted)' }}>
                <LogOut size={16} />
              </button>
            </>
          ) : (
            <div style={{ display: 'flex', gap: '8px' }}>
              <Link to="/login" className="btn btn-secondary btn-sm">Log In</Link>
              <Link to="/signup" className="btn btn-primary btn-sm">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
