import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Calendar, CheckCircle, XCircle, ArrowLeft, Heart, Share2, Users, Banknote, Home, Shield, Clock, Star, Send } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { durhamAreas, properties, students, calculateGroupHouseFit } from '../data/durhamData';

const HouseDetail = () => {
  const { id } = useParams();
  const { getUserGroup, savedProperties, toggleSavedProperty, allLandlords, sendViewingRequest } = useApp();
  const property = properties.find(p => p.id === id);
  const group = getUserGroup();
  const [activePhoto, setActivePhoto] = useState(0);
  const [showViewingModal, setShowViewingModal] = useState(false);
  const [viewingDate, setViewingDate] = useState('');
  const [viewingMessage, setViewingMessage] = useState('');
  const [viewingSent, setViewingSent] = useState(false);

  if (!property) return <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}><h2>Property not found</h2></div>;

  const area = durhamAreas.find(a => a.id === property.area);
  const landlord = allLandlords.find(l => l.propertyIds.includes(property.id));
  const isSaved = savedProperties.includes(property.id);

  // Calculate group fit if in a group
  let groupFit = null;
  if (group) {
    groupFit = calculateGroupHouseFit(group, property, students);
  }

  const totalCostPP = property.rentPP + (property.billsIncluded ? 0 : property.estBills);

  const handleSendViewing = () => {
    if (group) sendViewingRequest(group.id, property.id, viewingMessage, viewingDate);
    setViewingSent(true);
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Gallery */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--border)' }}>
        <div className="container-lg" style={{ padding: '24px 24px 0' }}>
          <Link to="/properties" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '16px' }}>
            <ArrowLeft size={16} /> Back to listings
          </Link>
        </div>
        <div className="container-lg" style={{ padding: '0 24px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '8px', borderRadius: 'var(--radius-xl)', overflow: 'hidden', maxHeight: '400px' }}>
            <div style={{ overflow: 'hidden' }}>
              <img src={property.photos[activePhoto]} alt="" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '8px' }}>
              {property.photos.slice(1, 3).map((photo, i) => (
                <div key={i} style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => setActivePhoto(i + 1)}>
                  <img src={photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
              {property.photos.length <= 1 && (
                <div style={{ background: 'var(--bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  No more photos
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '32px' }}>
          {/* Main Content */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <h2 style={{ margin: '0 0 8px' }}>{property.title}</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                  <MapPin size={16} /> {property.address}, {area?.name} · {area?.walkTime} walk to campus
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => toggleSavedProperty(property.id)} className="btn btn-secondary btn-icon">
                  <Heart size={18} fill={isSaved ? '#EF4444' : 'none'} color={isSaved ? '#EF4444' : undefined} />
                </button>
                <button className="btn btn-secondary btn-icon"><Share2 size={18} /></button>
              </div>
            </div>

            {/* Quick Facts */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', marginTop: '16px', flexWrap: 'wrap' }}>
              <span className="badge badge-ghost"><Bed size={12} /> {property.bedrooms} Bedrooms</span>
              <span className="badge badge-ghost"><Bath size={12} /> {property.bathrooms} Bathrooms</span>
              <span className={`badge ${property.billsIncluded ? 'badge-success' : 'badge-ghost'}`}>
                {property.billsIncluded ? <><CheckCircle size={12} /> Bills Included</> : <><Banknote size={12} /> Bills Extra</>}
              </span>
              <span className="badge badge-ghost"><Home size={12} /> {property.furnished ? 'Furnished' : 'Unfurnished'}</span>
              <span className="badge badge-ghost"><Calendar size={12} /> {property.availableDate}</span>
            </div>

            {/* Description */}
            <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
              <h4 style={{ marginBottom: '16px' }}>About This Property</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>{property.description}</p>
              <h4 style={{ marginBottom: '12px', fontSize: '1rem' }}>Features</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {property.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                    <CheckCircle size={14} style={{ color: 'var(--success)', flexShrink: 0 }} /> {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Group Fit */}
            {groupFit && (
              <div className="card" style={{ padding: '28px', marginBottom: '24px', background: groupFit.score >= 70 ? '#F0FDF4' : 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h4 style={{ margin: 0 }}><Users size={18} style={{ display: 'inline', marginRight: '8px' }} />Group Fit Analysis</h4>
                  <div className={`score-circle ${groupFit.score >= 70 ? 'score-high' : groupFit.score >= 50 ? 'score-medium' : 'score-low'}`}>
                    {groupFit.score}
                  </div>
                </div>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {groupFit.reasons.map((r, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                      <CheckCircle size={14} style={{ color: '#059669' }} /> <span style={{ color: '#065F46' }}>{r}</span>
                    </div>
                  ))}
                  {groupFit.issues.map((issue, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
                      <XCircle size={14} style={{ color: '#DC2626' }} /> <span style={{ color: '#991B1B' }}>{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* Price Card */}
            <div className="card" style={{ padding: '28px', marginBottom: '16px', position: 'sticky', top: '88px' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>
                  £{property.rentPP}<span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>/pp/mo</span>
                </div>
                <div style={{ fontSize: '0.813rem', color: 'var(--text-muted)' }}>£{property.rent} total/month</div>
              </div>
              {!property.billsIncluded && (
                <div style={{ padding: '12px 16px', background: 'var(--bg-alt)', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.813rem', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Rent</span><span style={{ fontWeight: 700 }}>£{property.rentPP}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.813rem', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Est. Bills</span><span style={{ fontWeight: 700 }}>~£{property.estBills}</span>
                  </div>
                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: '8px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', fontWeight: 800 }}>
                    <span>Total/pp</span><span style={{ color: 'var(--primary)' }}>~£{totalCostPP}</span>
                  </div>
                </div>
              )}
              <button onClick={() => setShowViewingModal(true)} className="btn btn-primary btn-lg" style={{ width: '100%', marginBottom: '10px', borderRadius: 'var(--radius-lg)' }}>
                <Send size={16} /> Request Viewing
              </button>
              <button onClick={() => toggleSavedProperty(property.id)} className="btn btn-secondary btn-lg" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}>
                <Heart size={16} fill={isSaved ? '#EF4444' : 'none'} color={isSaved ? '#EF4444' : undefined} />
                {isSaved ? 'Saved' : 'Save Property'}
              </button>

              {/* Landlord */}
              {landlord && (
                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <img src={landlord.avatar} alt="" className="avatar avatar-md" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{landlord.name}</div>
                      <div style={{ fontSize: '0.688rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Shield size={10} style={{ color: 'var(--success)' }} /> Verified · <Clock size={10} /> {landlord.responseTime}
                      </div>
                    </div>
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <Star size={12} style={{ color: '#F59E0B' }} />
                      <span style={{ fontWeight: 800, fontSize: '0.813rem' }}>{landlord.rating}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Viewing Request Modal */}
      {showViewingModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, padding: '20px' }}
          onClick={() => setShowViewingModal(false)}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            onClick={e => e.stopPropagation()}
            className="card" style={{ maxWidth: '480px', width: '100%', padding: '32px' }}>
            {viewingSent ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <CheckCircle size={48} style={{ color: 'var(--success)', margin: '0 auto 16px' }} />
                <h3 style={{ marginBottom: '8px' }}>Viewing Requested!</h3>
                <p style={{ color: 'var(--text-muted)' }}>The landlord will respond within {landlord?.responseTime}.</p>
                <button onClick={() => setShowViewingModal(false)} className="btn btn-primary btn-lg" style={{ marginTop: '20px' }}>Done</button>
              </div>
            ) : (
              <>
                <h3 style={{ marginBottom: '4px' }}>Request a Viewing</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.875rem' }}>
                  {group ? `Requesting as "${group.name}" (${group.memberIds.length} members)` : 'Send a viewing request to the landlord'}
                </p>
                <div className="form-group">
                  <label className="form-label">Preferred Date & Time</label>
                  <input className="form-input" placeholder="e.g. Saturday 22 Mar, 2:00 PM" value={viewingDate} onChange={e => setViewingDate(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Message to Landlord</label>
                  <textarea className="form-input" rows={3} placeholder="Introduce your group and mention any specific questions..."
                    value={viewingMessage} onChange={e => setViewingMessage(e.target.value)} style={{ resize: 'vertical' }} />
                </div>
                {group && (
                  <div style={{ padding: '12px', background: '#EEF2FF', borderRadius: 'var(--radius-md)', marginBottom: '16px', fontSize: '0.813rem', color: '#3730A3', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Shield size={14} /> All {group.memberIds.length} members are verified Durham students
                  </div>
                )}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => setShowViewingModal(false)} className="btn btn-secondary btn-lg" style={{ flex: 1 }}>Cancel</button>
                  <button onClick={handleSendViewing} className="btn btn-primary btn-lg" style={{ flex: 1 }}><Send size={16} /> Send Request</button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HouseDetail;
