import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Building2, Search, CheckCircle, MapPin, Star, Zap } from 'lucide-react';

const LandingPage = () => {
  const durhamAreas = ['Viaduct', 'City Centre', 'Gilesgate', 'Claypath', 'Nevilles Cross', 'Framwellgate Moor', 'Langley Moor'];

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'var(--gradient-hero)', color: 'white', padding: '120px 0 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(126,49,123,0.08)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(79,70,229,0.08)', filter: 'blur(60px)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="badge badge-purple" style={{ marginBottom: '20px', background: 'rgba(126,49,123,0.2)', color: '#C88AC5', border: '1px solid rgba(126,49,123,0.3)', fontSize: '0.688rem', padding: '6px 14px' }}>
                <Shield size={12} /> Built exclusively for Durham University
              </div>
              <h1 style={{ color: 'white', fontSize: '3.75rem', lineHeight: 1.08, marginBottom: '24px' }}>
                Find the right people.<br />
                <span style={{ background: 'linear-gradient(135deg, #A78BFA, #C88AC5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Find the right house.
                </span>
              </h1>
              <p style={{ fontSize: '1.125rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '36px', maxWidth: '480px' }}>
                HouseSync Durham matches you with compatible housemates, helps you form a group, and connects your group to verified local properties — all in one place.
              </p>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '48px' }}>
                <Link to="/signup" className="btn btn-xl btn-pill" style={{ background: 'var(--gradient-main)', color: 'white', boxShadow: '0 8px 30px rgba(79,70,229,0.35)' }}>
                  I'm a Student <ArrowRight size={18} />
                </Link>
                <Link to="/login" className="btn btn-xl btn-pill btn-secondary" style={{ background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <Building2 size={18} /> Landlord Portal
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '32px' }}>
                {[{ n: '2,400+', l: 'Students Matched' }, { n: '180+', l: 'Properties Listed' }, { n: '4.9★', l: 'User Rating' }].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '1.375rem', fontWeight: 900, color: 'white' }}>{s.n}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              {/* Hero Visual: Durham Map Preview */}
              <div style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '32px', backdropFilter: 'blur(20px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <div style={{ fontSize: '0.688rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Durham Property Map</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 800, color: 'white' }}>7 Areas · 180+ Listings</div>
                  </div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                </div>
                {/* Mini area cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {durhamAreas.slice(0, 6).map((area, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px', padding: '14px', transition: 'all 0.3s ease',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '0.813rem', fontWeight: 700, color: 'white' }}>{area}</div>
                          <div style={{ fontSize: '0.688rem', color: '#64748B', fontWeight: 600 }}>{Math.floor(Math.random() * 20 + 10)} homes</div>
                        </div>
                        <MapPin size={14} style={{ color: '#7E317B' }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(79,70,229,0.12)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Zap size={16} style={{ color: '#A78BFA' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#A78BFA' }}>Interactive map with live property pins</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="badge badge-primary" style={{ marginBottom: '12px' }}>How It Works</div>
            <h2>From housemates to house viewing, all in one place.</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '16px auto 0', fontSize: '1.063rem' }}>
              Three simple steps to find your perfect Durham home and the right people to share it with.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { step: '01', title: 'Verify & Match', desc: 'Sign up with your @durham.ac.uk email. Complete your profile and get matched with compatible housemates based on budget, lifestyle, and area preferences.', icon: <Search size={28} />, color: '#4F46E5' },
              { step: '02', title: 'Build Your Group', desc: 'Create or join a housing group of 2–6 students. See your group compatibility matrix and shared preferences at a glance.', icon: <Users size={28} />, color: '#7E317B' },
              { step: '03', title: 'Find Your House', desc: 'Browse properties tailored to your group. Compare houses on an interactive Durham map, then request viewings directly from landlords.', icon: <Building2 size={28} />, color: '#0D9488' },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="card" style={{ padding: '36px', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${item.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--border)', lineHeight: 1 }}>{item.step}</span>
                </div>
                <h4 style={{ marginBottom: '12px' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.938rem', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Durham-Specific Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-purple" style={{ marginBottom: '12px' }}>Durham Exclusive</div>
              <h2 style={{ marginBottom: '20px' }}>Built specifically for<br /><span style={{ color: 'var(--durham-purple)' }}>Durham students</span></h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.063rem', marginBottom: '32px', lineHeight: 1.7 }}>
                We know the difference between Gilesgate and Viaduct, and why it matters. Every feature is designed around real Durham student housing needs.
              </p>
              <div style={{ display: 'grid', gap: '16px' }}>
                {[
                  'All 7 major student areas covered',
                  'Verified @durham.ac.uk accounts only',
                  'Real-time property availability',
                  'Group-to-property smart matching',
                  'Direct landlord communication',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={18} style={{ color: 'var(--success)', flexShrink: 0 }} />
                    <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {durhamAreas.map((area, i) => (
                <motion.div key={i} whileHover={{ scale: 1.03 }} className="card card-flat" style={{ padding: '20px' }}>
                  <MapPin size={20} style={{ color: 'var(--durham-purple)', marginBottom: '8px' }} />
                  <div style={{ fontWeight: 700, fontSize: '0.938rem', marginBottom: '4px' }}>{area}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{Math.floor(Math.random() * 25 + 8)} properties</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{
            background: 'var(--gradient-hero)', borderRadius: '32px', padding: '80px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(126,49,123,0.15)', filter: 'blur(60px)' }} />
            <h2 style={{ color: 'white', fontSize: '2.75rem', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
              Ready to find your perfect Durham house?
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.125rem', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px', position: 'relative', zIndex: 1 }}>
              Join thousands of Durham students already using HouseSync to find housemates and homes.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', position: 'relative', zIndex: 1 }}>
              <Link to="/signup" className="btn btn-xl btn-pill" style={{ background: 'white', color: 'var(--text)', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
                Get Started Free <ArrowRight size={18} />
              </Link>
              <Link to="/login" className="btn btn-xl btn-pill" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Building2 size={18} /> Landlord Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border)', background: 'var(--bg)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--gradient-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, fontSize: '0.625rem' }}>HS</div>
            <span style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-muted)' }}>HouseSync Durham © 2026</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Made for Durham students, by Durham students.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
