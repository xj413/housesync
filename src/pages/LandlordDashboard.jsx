import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Clock, Eye, CheckCircle, XCircle, MessageCircle, MapPin, Shield, Plus, BarChart3, Calendar } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { students, properties, groups, durhamAreas } from '../data/durhamData';

const LandlordDashboard = ({ tab: initialTab }) => {
  const { currentLandlord, viewingRequests } = useApp();
  const [tab, setTab] = useState(initialTab || 'overview');
  const landlord = currentLandlord;

  if (!landlord) {
    return <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}><h2>Please log in as a landlord</h2></div>;
  }

  const myProperties = properties.filter(p => landlord.propertyIds.includes(p.id));
  const myRequests = viewingRequests.filter(vr => myProperties.some(p => p.id === vr.propertyId));

  return (
    <div style={{ padding: '32px 0 80px', background: 'var(--bg)', minHeight: '100vh' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src={landlord.avatar} alt="" className="avatar avatar-xl" />
            <div>
              <h2 style={{ margin: '0 0 4px' }}>{landlord.name}</h2>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span className="badge badge-success"><Shield size={10} /> Verified Landlord</span>
                <span style={{ fontSize: '0.813rem', color: 'var(--text-muted)' }}>{myProperties.length} active listings</span>
              </div>
            </div>
          </div>
          <button className="btn btn-accent"><Plus size={16} /> Add Listing</button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '4px', background: 'var(--bg-alt)', borderRadius: 'var(--radius-lg)', padding: '4px', marginBottom: '32px' }}>
          {[{ id: 'overview', label: 'Overview', icon: <BarChart3 size={16} /> }, { id: 'listings', label: 'My Listings', icon: <Building2 size={16} /> }, { id: 'requests', label: 'Viewing Requests', icon: <Eye size={16} />, count: myRequests.filter(r => r.status === 'Pending').length }].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              flex: 1, padding: '12px 20px', borderRadius: 'var(--radius-md)', border: 'none',
              background: tab === t.id ? 'white' : 'transparent', boxShadow: tab === t.id ? 'var(--shadow-sm)' : 'none',
              fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              color: tab === t.id ? 'var(--text)' : 'var(--text-muted)', transition: 'all 0.2s',
            }}>
              {t.icon} {t.label}
              {t.count > 0 && <span style={{ background: 'var(--danger)', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.688rem', fontWeight: 800 }}>{t.count}</span>}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === 'overview' && (
          <div>
            <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '32px' }}>
              <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
                <Building2 size={24} style={{ color: 'var(--primary)', margin: '0 auto 8px' }} />
                <div className="stat-value">{myProperties.length}</div>
                <div className="stat-label">Active Listings</div>
              </div>
              <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
                <Eye size={24} style={{ color: 'var(--durham-purple)', margin: '0 auto 8px' }} />
                <div className="stat-value">{myRequests.length}</div>
                <div className="stat-label">Viewing Requests</div>
              </div>
              <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
                <Users size={24} style={{ color: 'var(--secondary)', margin: '0 auto 8px' }} />
                <div className="stat-value">48</div>
                <div className="stat-label">Profile Views</div>
              </div>
              <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
                <Clock size={24} style={{ color: '#F59E0B', margin: '0 auto 8px' }} />
                <div className="stat-value">{landlord.responseTime}</div>
                <div className="stat-label">Response Time</div>
              </div>
            </div>
            <h4 style={{ marginBottom: '16px' }}>Recent Listings</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
              {myProperties.slice(0, 4).map(p => {
                const area = durhamAreas.find(a => a.id === p.area);
                return (
                  <div className="card" key={p.id} style={{ overflow: 'hidden' }}>
                    <div style={{ height: '140px', overflow: 'hidden' }}>
                      <img src={p.photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '16px' }}>
                      <h4 style={{ fontSize: '0.938rem', margin: '0 0 6px' }}>{p.title}</h4>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                        <MapPin size={12} /> {area?.name} · {p.bedrooms} bed
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 800, color: 'var(--primary)' }}>£{p.rentPP}<span style={{ fontWeight: 500, color: 'var(--text-muted)', fontSize: '0.75rem' }}>/pp</span></span>
                        <span className="badge badge-success" style={{ fontSize: '0.625rem' }}><Calendar size={10} /> {p.availableDate}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Listings */}
        {tab === 'listings' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
            {myProperties.map(p => {
              const area = durhamAreas.find(a => a.id === p.area);
              return (
                <motion.div key={p.id} whileHover={{ y: -4 }} className="card" style={{ overflow: 'hidden' }}>
                  <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                    <img src={p.photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {p.billsIncluded && <span className="badge badge-success" style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '0.625rem' }}><CheckCircle size={10} /> Bills Inc.</span>}
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ margin: '0 0 6px' }}>{p.title}</h4>
                    <div style={{ fontSize: '0.813rem', color: 'var(--text-muted)', marginBottom: '8px' }}>{p.address}, {area?.name}</div>
                    <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
                      <span className="badge badge-ghost" style={{ fontSize: '0.625rem' }}>{p.bedrooms} bed</span>
                      <span className="badge badge-ghost" style={{ fontSize: '0.625rem' }}>{p.bathrooms} bath</span>
                      <span className="badge badge-ghost" style={{ fontSize: '0.625rem' }}>{p.furnished ? 'Furnished' : 'Unfurnished'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--primary)' }}>£{p.rent}<span style={{ fontSize: '0.75rem', fontWeight: 500 }}>/mo</span></span>
                      <button className="btn btn-secondary btn-sm">Edit</button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Viewing Requests */}
        {tab === 'requests' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {myRequests.length === 0 ? (
              <div className="card" style={{ padding: '60px', textAlign: 'center' }}>
                <Eye size={40} style={{ color: 'var(--text-muted)', margin: '0 auto 16px' }} />
                <h3 style={{ marginBottom: '8px' }}>No Viewing Requests Yet</h3>
                <p style={{ color: 'var(--text-muted)' }}>Student groups will be able to request viewings for your properties.</p>
              </div>
            ) : (
              myRequests.map(req => {
                const property = properties.find(p => p.id === req.propertyId);
                const group = groups.find(g => g.id === req.groupId);
                const members = group?.memberIds.map(id => students.find(s => s.id === id)).filter(Boolean) || [];
                return (
                  <div className="card" key={req.id} style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div>
                        <h4 style={{ margin: '0 0 4px' }}>Viewing Request — {property?.title}</h4>
                        <div style={{ fontSize: '0.813rem', color: 'var(--text-muted)' }}>
                          <Calendar size={12} style={{ display: 'inline', marginRight: '4px' }} /> {req.requestedDate} · Submitted {req.submittedAt}
                        </div>
                      </div>
                      <span className={`badge ${req.status === 'Pending' ? 'badge-warning' : req.status === 'Accepted' ? 'badge-success' : 'badge-danger'}`}>
                        {req.status}
                      </span>
                    </div>

                    {/* Group Summary */}
                    <div style={{ background: 'var(--bg-alt)', borderRadius: 'var(--radius-lg)', padding: '16px', marginBottom: '16px' }}>
                      <div style={{ fontSize: '0.688rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Student Group: {group?.name}</div>
                      <div style={{ display: 'flex', gap: '-6px', marginBottom: '12px' }}>
                        {members.map((m, i) => (
                          <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '16px' }}>
                            <img src={m.avatar} alt="" className="avatar avatar-sm" />
                            <div>
                              <div style={{ fontSize: '0.813rem', fontWeight: 700 }}>{m.name}</div>
                              <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>{m.course} · {m.year}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <span className="badge badge-success"><Shield size={10} /> All Verified</span>
                        <span className="badge badge-ghost"><Users size={10} /> {members.length} students</span>
                        <span className="badge badge-ghost">Avg budget: £{group?.avgBudget}/pp</span>
                      </div>
                    </div>

                    {/* Message */}
                    {req.message && (
                      <div style={{ padding: '12px 16px', background: '#EEF2FF', borderRadius: 'var(--radius-md)', marginBottom: '16px', fontSize: '0.875rem', fontStyle: 'italic', color: '#3730A3' }}>
                        "{req.message}"
                      </div>
                    )}

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className="btn btn-success btn-sm"><CheckCircle size={14} /> Accept</button>
                      <button className="btn btn-secondary btn-sm"><MessageCircle size={14} /> Message</button>
                      <button className="btn btn-ghost btn-sm" style={{ color: 'var(--danger)' }}><XCircle size={14} /> Decline</button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LandlordDashboard;
