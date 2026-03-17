import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Bookmark, UserPlus, MessageCircle, MapPin, Moon, Sun, Sparkles, AlertTriangle, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { durhamAreas } from '../data/durhamData';

const Discovery = () => {
  const { getMatches, currentUser } = useApp();
  const matches = getMatches();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [liked, setLiked] = useState([]);
  const [saved, setSaved] = useState([]);
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState(null);

  const filteredMatches = filter === 'all' ? matches
    : filter === 'high' ? matches.filter(m => m.score >= 70)
    : filter === 'area' ? matches.filter(m => m.student.preferredAreas.some(a => currentUser.preferredAreas.includes(a)))
    : matches;

  return (
    <div style={{ padding: '32px 0 80px', background: 'var(--bg)', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ marginBottom: '8px' }}>Find Compatible Housemates</h2>
          <p style={{ color: 'var(--text-muted)' }}>Students ranked by compatibility with your lifestyle and housing preferences.</p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
          {[{ id: 'all', label: 'All Matches' }, { id: 'high', label: '70%+ Match' }, { id: 'area', label: 'Same Areas' }].map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)} className={`chip ${filter === f.id ? 'active' : ''}`}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
          {filteredMatches.map((match, i) => {
            const s = match.student;
            const isExpanded = expanded === s.id;
            return (
              <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="card" style={{ overflow: 'hidden' }}>
                {/* Header */}
                <div style={{ padding: '24px 24px 0' }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <img src={s.avatar} alt="" className="avatar avatar-lg" />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <h4 style={{ margin: '0 0 4px', fontSize: '1.063rem' }}>{s.name}</h4>
                          <div style={{ fontSize: '0.813rem', color: 'var(--text-muted)' }}>{s.course} · {s.year} · {s.college}</div>
                        </div>
                        <div className={`score-circle ${match.score >= 70 ? 'score-high' : match.score >= 50 ? 'score-medium' : 'score-low'}`}>
                          {match.score}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div style={{ padding: '16px 24px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span className="badge badge-ghost">💰 £{s.budget.min}–{s.budget.max}</span>
                  <span className="badge badge-ghost">{s.sleepSchedule === 'Night Owl' ? '🌙' : '☀️'} {s.sleepSchedule}</span>
                  <span className="badge badge-ghost">🏠 {s.preferredHouseSize}-bed</span>
                  <span className="badge badge-ghost">{s.socialVibe === 'Social' ? '🎉' : s.socialVibe === 'Quiet' ? '📚' : '⚖️'} {s.socialVibe}</span>
                </div>

                {/* Match Reasons */}
                <div style={{ padding: '0 24px' }}>
                  {match.reasons.slice(0, 2).map((r, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <Sparkles size={12} style={{ color: 'var(--success)' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#059669' }}>{r}</span>
                    </div>
                  ))}
                  {match.frictions.slice(0, 1).map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <AlertTriangle size={12} style={{ color: 'var(--warning)' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#D97706' }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Expand Toggle */}
                {isExpanded && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    style={{ padding: '0 24px', marginTop: '12px' }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '12px', lineHeight: 1.6 }}>"{s.bio}"</p>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                      <strong>Areas:</strong> {s.preferredAreas.map(a => durhamAreas.find(ar => ar.id === a)?.name).join(', ')}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                      <strong>Cleanliness:</strong> {s.cleanliness} · <strong>Noise:</strong> {s.noiseTolerance} · <strong>Guests:</strong> {s.guestFrequency}
                    </div>
                    {s.dealbreakers.length > 0 && (
                      <div style={{ fontSize: '0.75rem', color: '#DC2626', marginBottom: '4px' }}>
                        <strong>Dealbreakers:</strong> {s.dealbreakers.join(', ')}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Actions */}
                <div style={{ padding: '16px 24px', display: 'flex', gap: '8px', borderTop: '1px solid var(--border-light)', marginTop: '12px' }}>
                  <button className="btn btn-ghost btn-sm" onClick={() => setExpanded(isExpanded ? null : s.id)} style={{ flex: 1 }}>
                    <ChevronDown size={14} style={{ transform: isExpanded ? 'rotate(180deg)' : '', transition: 'transform 0.2s' }} />
                    {isExpanded ? 'Less' : 'More'}
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setSaved(p => p.includes(s.id) ? p.filter(x => x !== s.id) : [...p, s.id])}>
                    <Bookmark size={14} fill={saved.includes(s.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button className="btn btn-primary btn-sm" style={{ flex: 1 }} onClick={() => setLiked(p => [...p, s.id])}>
                    <Heart size={14} /> Like
                  </button>
                  <button className="btn btn-accent btn-sm" style={{ flex: 1 }}>
                    <UserPlus size={14} /> Invite
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Discovery;
