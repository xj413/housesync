import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Building2, MessageCircle, Search, MapPin, ArrowRight, Star, Bell, Shield, TrendingUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { durhamAreas } from '../data/durhamData';

const StudentDashboard = () => {
  const { currentUser, getUserGroup, getMatches, getHouseRecommendations } = useApp();
  const group = getUserGroup();
  const matches = getMatches().slice(0, 3);
  const recommendations = group ? getHouseRecommendations(group).slice(0, 3) : [];

  return (
    <div style={{ padding: '32px 0 80px', background: 'var(--bg)', minHeight: '100vh' }}>
      <div className="container">
        {/* Welcome */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <img src={currentUser.avatar} alt="" className="avatar avatar-lg" />
            <div>
              <h2 style={{ marginBottom: '4px' }}>Welcome back, {currentUser.name.split(' ')[0]} 👋</h2>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span className="badge badge-success"><Shield size={10} /> Verified Student</span>
                <span style={{ fontSize: '0.813rem', color: 'var(--text-muted)' }}>{currentUser.course} · {currentUser.year}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {[
            { label: 'Find Mates', icon: <Search size={22} />, path: '/discover', color: '#4F46E5', bg: '#EEF2FF' },
            { label: group ? 'My Group' : 'Create Group', icon: <Users size={22} />, path: '/group', color: '#7E317B', bg: '#F5F3FF' },
            { label: 'Browse Houses', icon: <Building2 size={22} />, path: '/properties', color: '#0D9488', bg: '#F0FDFA' },
            { label: 'Group Chat', icon: <MessageCircle size={22} />, path: '/chat', color: '#D97706', bg: '#FFFBEB' },
          ].map((a, i) => (
            <Link key={i} to={a.path}>
              <motion.div whileHover={{ y: -4 }} className="card" style={{ padding: '24px', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: a.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: a.color, margin: '0 auto 12px' }}>
                  {a.icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{a.label}</div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Group Status */}
          <div className="card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h4 style={{ margin: 0 }}>
                {group ? <><Users size={18} style={{ display: 'inline', marginRight: '8px' }} />{group.name}</> : 'No Group Yet'}
              </h4>
              <Link to="/group" className="btn btn-secondary btn-sm">{group ? 'View' : 'Create'} <ArrowRight size={14} /></Link>
            </div>
            {group ? (
              <>
                <div style={{ display: 'flex', gap: '-8px', marginBottom: '16px' }}>
                  {group.memberIds.map((id, i) => {
                    const s = matches.find(m => m.student.id === id)?.student || currentUser;
                    return <img key={i} src={`https://i.pravatar.cc/100?img=${10 + i}`} alt="" className="avatar avatar-md" style={{ marginLeft: i ? '-8px' : 0, zIndex: group.memberIds.length - i }} />;
                  })}
                  {group.needsMore > 0 && (
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-alt)', border: '2px dashed var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginLeft: '-8px' }}>
                      +{group.needsMore}
                    </div>
                  )}
                </div>
                <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  <div className="stat-block"><div className="stat-value">{group.memberIds.length}/{group.maxSize}</div><div className="stat-label">Members</div></div>
                  <div className="stat-block"><div className="stat-value">£{group.avgBudget}</div><div className="stat-label">Avg Budget</div></div>
                  <div className="stat-block"><div className="stat-value">{group.status}</div><div className="stat-label">Status</div></div>
                </div>
              </>
            ) : (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Start by finding compatible housemates or creating a group with friends you already know.</p>
            )}
          </div>

          {/* Top Matches */}
          <div className="card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h4 style={{ margin: 0 }}><TrendingUp size={18} style={{ display: 'inline', marginRight: '8px' }} />Top Matches</h4>
              <Link to="/discover" className="btn btn-secondary btn-sm">View All <ArrowRight size={14} /></Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {matches.map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: 'var(--radius-md)', background: 'var(--bg-alt)' }}>
                  <img src={m.student.avatar} alt="" className="avatar avatar-md" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{m.student.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.student.course} · {m.student.year}</div>
                  </div>
                  <div className={`score-circle ${m.score >= 70 ? 'score-high' : m.score >= 50 ? 'score-medium' : 'score-low'}`} style={{ width: '42px', height: '42px', fontSize: '0.813rem' }}>
                    {m.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Properties */}
        {recommendations.length > 0 && (
          <div style={{ marginTop: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h4><Building2 size={18} style={{ display: 'inline', marginRight: '8px' }} />Recommended for Your Group</h4>
              <Link to="/properties" className="btn btn-secondary btn-sm">Browse All <ArrowRight size={14} /></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {recommendations.map((r, i) => (
                <Link key={i} to={`/property/${r.property.id}`}>
                  <motion.div whileHover={{ y: -4 }} className="card">
                    <div style={{ height: '160px', overflow: 'hidden' }}>
                      <img src={r.property.photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <h4 style={{ fontSize: '1rem', margin: 0 }}>{r.property.title}</h4>
                        <div className={`score-circle ${r.score >= 70 ? 'score-high' : 'score-medium'}`} style={{ width: '38px', height: '38px', fontSize: '0.75rem', flexShrink: 0 }}>
                          {r.score}
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px', fontSize: '0.813rem', color: 'var(--text-muted)' }}>
                        <MapPin size={14} /> {durhamAreas.find(a => a.id === r.property.area)?.name}
                      </div>
                      <div style={{ fontWeight: 800, color: 'var(--primary)' }}>£{r.property.rentPP}<span style={{ fontWeight: 500, color: 'var(--text-muted)', fontSize: '0.75rem' }}>/pp/mo</span></div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
