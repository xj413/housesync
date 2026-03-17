import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, List, Columns, Filter, Bed, Bath, Banknote, CheckCircle, X, ChevronRight, Star, Zap, Navigation } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { durhamAreas, properties, calculateGroupHouseFit, students } from '../data/durhamData';

// Durham area positions on our custom map (relative %)
const areaPositions = {
  'nevilles-cross': { x: 22, y: 65 },
  'gilesgate': { x: 72, y: 35 },
  'langley-moor': { x: 15, y: 88 },
  'viaduct': { x: 45, y: 48 },
  'city-centre': { x: 50, y: 42 },
  'claypath': { x: 65, y: 38 },
  'framwellgate-moor': { x: 38, y: 18 },
};

// Property positions (slight offsets from area centers)
const getPropertyPosition = (property, idx) => {
  const base = areaPositions[property.area] || { x: 50, y: 50 };
  const offsets = [
    { x: 0, y: 0 }, { x: 4, y: -3 }, { x: -3, y: 4 }, { x: 5, y: 2 },
    { x: -4, y: -2 }, { x: 2, y: 5 }, { x: -2, y: -5 }, { x: 3, y: -4 },
    { x: -5, y: 3 }, { x: 6, y: -1 },
  ];
  const off = offsets[idx % offsets.length];
  return { x: Math.max(5, Math.min(95, base.x + off.x)), y: Math.max(5, Math.min(95, base.y + off.y)) };
};

const PropertyListings = () => {
  const { getUserGroup, currentUser, savedProperties, toggleSavedProperty } = useApp();
  const group = getUserGroup();
  const [view, setView] = useState('split');
  const [hoveredProperty, setHoveredProperty] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ area: 'all', minBudget: 0, maxBudget: 1000, minBeds: 1, minBaths: 1, billsIncluded: 'any' });

  const scoredProperties = useMemo(() => {
    if (!group) {
      return properties.map(p => ({ property: p, score: 0, reasons: [], issues: [] }));
    }
    return properties.map(p => ({ property: p, ...calculateGroupHouseFit(group, p, students) })).sort((a, b) => b.score - a.score);
  }, [group]);

  const filteredProperties = useMemo(() => scoredProperties.filter(sp => {
    const p = sp.property;
    if (filters.area !== 'all' && p.area !== filters.area) return false;
    if (p.rentPP < filters.minBudget || p.rentPP > filters.maxBudget) return false;
    if (p.bedrooms < filters.minBeds) return false;
    if (p.bathrooms < filters.minBaths) return false;
    if (filters.billsIncluded === 'yes' && !p.billsIncluded) return false;
    if (filters.billsIncluded === 'no' && p.billsIncluded) return false;
    return true;
  }), [scoredProperties, filters]);

  const groupPreferredAreas = group ? [...new Set(group.memberIds.flatMap(id => students.find(s => s.id === id)?.preferredAreas || []))] : currentUser?.preferredAreas || [];

  // Render map
  const renderMap = (isFullWidth) => (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: isFullWidth ? '75vh' : '100%', background: '#0C1222', borderRadius: isFullWidth ? 'var(--radius-xl)' : 0, overflow: 'hidden' }}>
      {/* Grid background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(79,70,229,0.12) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* River Wear (stylized line) */}
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <path d="M 100 300 Q 300 250 450 450 T 800 600 T 950 750" fill="none" stroke="rgba(59,130,246,0.15)" strokeWidth="30" strokeLinecap="round" />
        <path d="M 100 300 Q 300 250 450 450 T 800 600 T 950 750" fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 6" />
      </svg>

      {/* Campus marker */}
      <div style={{ position: 'absolute', left: '52%', top: '35%', transform: 'translate(-50%, -50%)', zIndex: 5, pointerEvents: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 12px rgba(245,158,11,0.5)', border: '2px solid rgba(245,158,11,0.3)' }} />
          <span style={{ fontSize: '0.563rem', fontWeight: 800, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>Durham Uni</span>
        </div>
      </div>

      {/* Area labels */}
      {Object.entries(areaPositions).map(([areaId, pos]) => {
        const area = durhamAreas.find(a => a.id === areaId);
        const isPreferred = groupPreferredAreas.includes(areaId);
        return (
          <div key={areaId} style={{
            position: 'absolute', left: `${pos.x}%`, top: `${pos.y - 7}%`,
            transform: 'translate(-50%, -50%)', zIndex: 2, pointerEvents: 'none',
          }}>
            <span style={{
              fontSize: '0.563rem', fontWeight: 800,
              color: isPreferred ? 'rgba(126,49,123,0.7)' : 'rgba(255,255,255,0.2)',
              textTransform: 'uppercase', letterSpacing: '0.15em', whiteSpace: 'nowrap',
            }}>
              {area?.name}
            </span>
            {isPreferred && (
              <div style={{
                position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                width: '80px', height: '80px', borderRadius: '50%',
                background: 'rgba(126,49,123,0.06)', border: '1px solid rgba(126,49,123,0.15)',
                zIndex: -1,
              }} />
            )}
          </div>
        );
      })}

      {/* Property pins */}
      {filteredProperties.map((sp, idx) => {
        const pos = getPropertyPosition(sp.property, idx);
        const isSelected = selectedProperty?.id === sp.property.id;
        const isHovered = hoveredProperty?.id === sp.property.id;
        return (
          <div key={sp.property.id}
            style={{ position: 'absolute', left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)', zIndex: isSelected || isHovered ? 25 : 10, cursor: 'pointer' }}
            onClick={() => setSelectedProperty(isSelected ? null : sp.property)}
            onMouseEnter={() => setHoveredProperty(sp.property)}
            onMouseLeave={() => setHoveredProperty(null)}
          >
            {/* Pin */}
            <motion.div whileHover={{ scale: 1.2 }} style={{
              padding: '4px 10px', borderRadius: 'var(--radius-full)',
              background: isSelected ? 'var(--durham-purple)' : isHovered ? 'var(--primary)' : 'white',
              color: isSelected || isHovered ? 'white' : 'var(--text)',
              fontSize: '0.688rem', fontWeight: 800, boxShadow: isSelected ? '0 0 0 4px rgba(126,49,123,0.3), 0 4px 12px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.3)',
              whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px',
              transition: 'all 0.2s ease',
            }}>
              £{sp.property.rentPP}
              {group && <span style={{ fontSize: '0.563rem', opacity: 0.8 }}>·{sp.score}%</span>}
            </motion.div>

            {/* Popup on hover */}
            <AnimatePresence>
              {(isHovered || isSelected) && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  style={{
                    position: 'absolute', bottom: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)',
                    background: 'white', borderRadius: 'var(--radius-lg)', padding: '0', boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                    minWidth: '260px', overflow: 'hidden', zIndex: 30,
                  }}
                >
                  <div style={{ height: '100px', overflow: 'hidden' }}>
                    <img src={sp.property.photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '12px 14px' }}>
                    <div style={{ fontWeight: 800, fontSize: '0.875rem', marginBottom: '4px' }}>{sp.property.title}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                      <MapPin size={11} /> {durhamAreas.find(a => a.id === sp.property.area)?.name} · {sp.property.bedrooms} bed · {sp.property.bathrooms} bath
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 800, color: 'var(--primary)' }}>£{sp.property.rentPP}<span style={{ fontWeight: 500, color: 'var(--text-muted)', fontSize: '0.688rem' }}>/pp</span></span>
                      {group && (
                        <span className={`badge ${sp.score >= 70 ? 'badge-success' : sp.score >= 50 ? 'badge-warning' : 'badge-danger'}`} style={{ fontSize: '0.688rem' }}>
                          {sp.score}% fit
                        </span>
                      )}
                    </div>
                    <Link to={`/property/${sp.property.id}`} style={{ display: 'block', marginTop: '8px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textAlign: 'center' }}>
                      View Details →
                    </Link>
                  </div>
                  {/* Arrow */}
                  <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '8px solid white' }} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* Map Legend */}
      <div style={{
        position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(15,23,42,0.85)',
        backdropFilter: 'blur(12px)', borderRadius: 'var(--radius-md)', padding: '12px 16px',
        border: '1px solid rgba(255,255,255,0.08)', zIndex: 20,
      }}>
        <div style={{ fontSize: '0.625rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Legend</div>
        <div style={{ display: 'flex', gap: '16px', fontSize: '0.688rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }} />
            <span style={{ color: '#94A3B8' }}>Campus</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--durham-purple)', boxShadow: '0 0 6px rgba(126,49,123,0.4)' }} />
            <span style={{ color: '#94A3B8' }}>Preferred Area</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '16px', height: '3px', borderRadius: '2px', background: 'rgba(59,130,246,0.3)' }} />
            <span style={{ color: '#94A3B8' }}>River Wear</span>
          </div>
        </div>
      </div>

      {/* Area insights panel */}
      {group && (
        <div style={{
          position: 'absolute', top: '16px', right: '16px', background: 'rgba(15,23,42,0.85)',
          backdropFilter: 'blur(12px)', borderRadius: 'var(--radius-md)', padding: '14px 18px',
          border: '1px solid rgba(255,255,255,0.08)', zIndex: 20, maxWidth: '200px',
        }}>
          <div style={{ fontSize: '0.625rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Group Insights</div>
          {(() => {
            const bestValue = [...filteredProperties].sort((a, b) => a.property.rentPP - b.property.rentPP)[0];
            const bestFit = filteredProperties[0];
            const closestArea = durhamAreas.sort((a, b) => parseFloat(a.distanceToCampus) - parseFloat(b.distanceToCampus))[0];
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {bestValue && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Banknote size={12} style={{ color: '#10B981' }} />
                    <span style={{ fontSize: '0.688rem', color: '#94A3B8' }}>Best value: <span style={{ color: 'white', fontWeight: 700 }}>{durhamAreas.find(a => a.id === bestValue.property.area)?.name}</span></span>
                  </div>
                )}
                {bestFit && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Star size={12} style={{ color: '#F59E0B' }} />
                    <span style={{ fontSize: '0.688rem', color: '#94A3B8' }}>Top match: <span style={{ color: 'white', fontWeight: 700 }}>{bestFit.score}%</span></span>
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Navigation size={12} style={{ color: '#6366F1' }} />
                  <span style={{ fontSize: '0.688rem', color: '#94A3B8' }}>Nearest: <span style={{ color: 'white', fontWeight: 700 }}>{closestArea?.name}</span></span>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );

  // Render property card
  const renderPropertyCard = (sp) => {
    const p = sp.property;
    const isSelected = selectedProperty?.id === p.id;
    const area = durhamAreas.find(a => a.id === p.area);
    return (
      <Link to={`/property/${p.id}`} key={p.id}
        onMouseEnter={() => setHoveredProperty(p)}
        onMouseLeave={() => setHoveredProperty(null)}
        onClick={(e) => { if (view === 'split') { e.preventDefault(); setSelectedProperty(isSelected ? null : p); } }}
      >
        <motion.div whileHover={{ y: -2 }} className="card" style={{
          overflow: 'hidden', border: isSelected ? '2px solid var(--durham-purple)' : '1px solid var(--border-light)',
          transition: 'all 0.2s ease', marginBottom: view === 'split' ? '12px' : 0,
        }}>
          <div style={{ height: view === 'list' ? '180px' : '120px', overflow: 'hidden', position: 'relative' }}>
            <img src={p.photos[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {p.billsIncluded && (
              <span className="badge badge-success" style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '0.625rem' }}>
                <CheckCircle size={10} /> Bills Inc.
              </span>
            )}
            {group && (
              <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <div className={`score-circle ${sp.score >= 70 ? 'score-high' : sp.score >= 50 ? 'score-medium' : 'score-low'}`} style={{ width: '36px', height: '36px', fontSize: '0.688rem' }}>
                  {sp.score}
                </div>
              </div>
            )}
          </div>
          <div style={{ padding: view === 'list' ? '20px' : '14px' }}>
            <h4 style={{ fontSize: view === 'list' ? '1.063rem' : '0.875rem', margin: '0 0 6px' }}>{p.title}</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
              <MapPin size={12} /> {area?.name} · {area?.walkTime} to campus
            </div>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
              <span className="badge badge-ghost" style={{ fontSize: '0.625rem' }}><Bed size={10} /> {p.bedrooms} bed</span>
              <span className="badge badge-ghost" style={{ fontSize: '0.625rem' }}><Bath size={10} /> {p.bathrooms} bath</span>
              {p.furnished && <span className="badge badge-ghost" style={{ fontSize: '0.625rem' }}>Furnished</span>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--primary)' }}>£{p.rentPP}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/pp/mo</span>
              </div>
              {view === 'list' && (
                <Link to={`/property/${p.id}`} className="btn btn-primary btn-sm">View <ChevronRight size={14} /></Link>
              )}
            </div>
            {sp.reasons.length > 0 && view === 'list' && (
              <div style={{ marginTop: '10px', borderTop: '1px solid var(--border-light)', paddingTop: '10px' }}>
                {sp.reasons.slice(0, 2).map((r, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.688rem', color: '#059669', marginBottom: '2px' }}>
                    <CheckCircle size={10} /> {r}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </Link>
    );
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Top Bar */}
      <div style={{ padding: '20px 0', borderBottom: '1px solid var(--border)', background: 'white' }}>
        <div className="container-lg" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ margin: '0 0 4px' }}>Durham Properties</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.813rem', margin: 0 }}>
              {filteredProperties.length} properties {group ? `matched for "${group.name}"` : 'available'}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {/* Filters */}
            <button onClick={() => setShowFilters(!showFilters)} className={`btn btn-secondary btn-sm ${showFilters ? 'active' : ''}`}>
              <Filter size={14} /> Filters
            </button>
            {/* View Toggle */}
            <div style={{ display: 'flex', background: 'var(--bg-alt)', borderRadius: 'var(--radius-md)', padding: '3px' }}>
              {[{ id: 'list', icon: <List size={16} /> }, { id: 'map', icon: <MapPin size={16} /> }, { id: 'split', icon: <Columns size={16} /> }].map(v => (
                <button key={v.id} onClick={() => setView(v.id)} style={{
                  padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: 'none',
                  background: view === v.id ? 'white' : 'transparent', boxShadow: view === v.id ? 'var(--shadow-sm)' : 'none',
                  color: view === v.id ? 'var(--primary)' : 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px',
                  fontWeight: 700, fontSize: '0.75rem', transition: 'all 0.2s',
                }}>
                  {v.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ background: 'white', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
            <div className="container-lg" style={{ padding: '20px 24px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <div>
                <label className="form-label" style={{ marginBottom: '4px' }}>Area</label>
                <select className="form-select" style={{ padding: '8px 12px', fontSize: '0.813rem' }}
                  value={filters.area} onChange={e => setFilters(f => ({ ...f, area: e.target.value }))}>
                  <option value="all">All Areas</option>
                  {durhamAreas.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label" style={{ marginBottom: '4px' }}>Max Budget (pp)</label>
                <select className="form-select" style={{ padding: '8px 12px', fontSize: '0.813rem' }}
                  value={filters.maxBudget} onChange={e => setFilters(f => ({ ...f, maxBudget: +e.target.value }))}>
                  {[400, 500, 600, 700, 800, 1000].map(n => <option key={n} value={n}>£{n}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label" style={{ marginBottom: '4px' }}>Min Beds</label>
                <select className="form-select" style={{ padding: '8px 12px', fontSize: '0.813rem' }}
                  value={filters.minBeds} onChange={e => setFilters(f => ({ ...f, minBeds: +e.target.value }))}>
                  {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n}+</option>)}
                </select>
              </div>
              <div>
                <label className="form-label" style={{ marginBottom: '4px' }}>Bills</label>
                <select className="form-select" style={{ padding: '8px 12px', fontSize: '0.813rem' }}
                  value={filters.billsIncluded} onChange={e => setFilters(f => ({ ...f, billsIncluded: e.target.value }))}>
                  <option value="any">Any</option>
                  <option value="yes">Included</option>
                  <option value="no">Not included</option>
                </select>
              </div>
              <button onClick={() => setFilters({ area: 'all', minBudget: 0, maxBudget: 1000, minBeds: 1, minBaths: 1, billsIncluded: 'any' })}
                className="btn btn-ghost btn-sm"><X size={12} /> Clear</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      {view === 'list' && (
        <div className="container" style={{ padding: '32px 24px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
            {filteredProperties.map(sp => renderPropertyCard(sp))}
          </div>
        </div>
      )}

      {view === 'map' && (
        <div style={{ padding: '24px' }}>
          <div className="container-lg">
            {renderMap(true)}
          </div>
        </div>
      )}

      {view === 'split' && (
        <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', height: 'calc(100vh - 150px)' }}>
          {/* List panel */}
          <div style={{ overflowY: 'auto', padding: '20px', borderRight: '1px solid var(--border)', background: 'var(--bg)' }}>
            {filteredProperties.map(sp => renderPropertyCard(sp))}
          </div>
          {/* Map panel */}
          {renderMap(false)}
        </div>
      )}
    </div>
  );
};

export default PropertyListings;
