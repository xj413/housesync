import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, MapPin, DollarSign, Home, UserPlus, Share2, Copy, Shield, TrendingUp, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { students, durhamAreas, calculateCompatibility } from '../data/durhamData';

const GroupDashboard = () => {
  const { currentUser, getUserGroup, getMatches } = useApp();
  const group = getUserGroup();

  if (!group) {
    return (
      <div style={{ padding: '80px 0', background: 'var(--bg)', minHeight: '100vh' }}>
        <div className="container-sm" style={{ textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Users size={36} style={{ color: 'var(--primary)' }} />
          </div>
          <h2 style={{ marginBottom: '12px' }}>No Group Yet</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px' }}>
            Create a housing group or get invited by a friend. You can start finding housemates first.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button className="btn btn-primary btn-lg"><Users size={18} /> Create Group</button>
            <Link to="/discover" className="btn btn-secondary btn-lg">Find Housemates</Link>
          </div>
        </div>
      </div>
    );
  }

  const members = group.memberIds.map(id => students.find(s => s.id === id)).filter(Boolean);
  const compatMatrix = members.map((a, i) => members.map((b, j) => i === j ? 100 : calculateCompatibility(a, b).score));
  const areaFreq = {};
  members.forEach(m => m.preferredAreas.forEach(a => { areaFreq[a] = (areaFreq[a] || 0) + 1; }));
  const topAreas = Object.entries(areaFreq).sort((a, b) => b[1] - a[1]).slice(0, 3);

  return (
    <div style={{ padding: '32px 0 80px', background: 'var(--bg)', minHeight: '100vh' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <h2 style={{ margin: 0 }}>{group.name}</h2>
              <span className={`badge ${group.status === 'Complete' ? 'badge-success' : 'badge-warning'}`}>{group.status}</span>
            </div>
            <p style={{ color: 'var(--text-muted)' }}>{members.length} of {group.maxSize} members · Target: {group.targetHouseSize}-bed house</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-secondary btn-sm"><Copy size={14} /> Invite Link</button>
            <Link to="/properties" className="btn btn-primary btn-sm"><Home size={14} /> Find Houses</Link>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Members */}
          <div className="card" style={{ padding: '28px' }}>
            <h4 style={{ marginBottom: '20px' }}>Members</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {members.map(m => (
                <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px', background: 'var(--bg-alt)', borderRadius: 'var(--radius-lg)' }}>
                  <img src={m.avatar} alt="" className="avatar avatar-lg" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700 }}>{m.name} {m.id === currentUser.id && <span className="badge badge-primary" style={{ marginLeft: '6px' }}>You</span>}</div>
                    <div style={{ fontSize: '0.813rem', color: 'var(--text-muted)' }}>{m.course} · {m.year}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      💰 £{m.budget.min}–{m.budget.max} · {m.socialVibe}
                    </div>
                  </div>
                  <span className="badge badge-success"><Shield size={10} /> Verified</span>
                </div>
              ))}
              {group.needsMore > 0 && (
                <button className="btn btn-secondary" style={{ border: '2px dashed var(--border)', background: 'transparent', padding: '20px' }}>
                  <UserPlus size={18} /> Find {group.needsMore} more housemate{group.needsMore > 1 ? 's' : ''}
                </button>
              )}
            </div>
          </div>

          {/* Group Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Shared Preferences */}
            <div className="card" style={{ padding: '28px' }}>
              <h4 style={{ marginBottom: '20px' }}>Shared Preferences</h4>
              <div className="stat-grid">
                <div className="stat-block"><div className="stat-value">£{group.avgBudget}</div><div className="stat-label">Avg Budget/pp</div></div>
                <div className="stat-block"><div className="stat-value">{group.targetHouseSize}</div><div className="stat-label">Target Beds</div></div>
                <div className="stat-block"><div className="stat-value">{members.length}/{group.maxSize}</div><div className="stat-label">Members</div></div>
              </div>
              <div style={{ marginTop: '16px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>Top Areas</div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {topAreas.map(([areaId, count]) => (
                    <span key={areaId} className="badge badge-purple">
                      <MapPin size={10} /> {durhamAreas.find(a => a.id === areaId)?.name} ({count}/{members.length})
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Compatibility Matrix */}
            <div className="card" style={{ padding: '28px' }}>
              <h4 style={{ marginBottom: '16px' }}>Compatibility Matrix</h4>
              <div style={{ display: 'grid', gridTemplateColumns: `40px repeat(${members.length}, 1fr)`, gap: '4px', fontSize: '0.75rem' }}>
                <div />
                {members.map(m => (
                  <div key={m.id} style={{ textAlign: 'center' }}>
                    <img src={m.avatar} alt="" className="avatar avatar-sm" style={{ margin: '0 auto' }} />
                  </div>
                ))}
                {members.map((m, i) => (
                  <React.Fragment key={m.id}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={m.avatar} alt="" className="avatar avatar-sm" />
                    </div>
                    {compatMatrix[i].map((score, j) => (
                      <div key={j} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '8px', borderRadius: '8px', fontWeight: 800, fontSize: '0.813rem',
                        background: i === j ? 'var(--bg-alt)' : score >= 70 ? '#ECFDF5' : score >= 50 ? '#FFFBEB' : '#FEF2F2',
                        color: i === j ? 'var(--text-muted)' : score >= 70 ? '#059669' : score >= 50 ? '#D97706' : '#DC2626',
                      }}>
                        {i === j ? '—' : score}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDashboard;
