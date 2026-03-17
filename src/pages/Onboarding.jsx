import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Shield, MapPin, User, BookOpen, Calendar, Home, Moon, Sun, Sparkles, Volume2, Users as UsersIcon, Cigarette, Coffee } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { durhamAreas } from '../data/durhamData';

const steps = ['Verification', 'Basics', 'Housing', 'Lifestyle', 'Bio'];

const Onboarding = () => {
  const { login } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [verified, setVerified] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', year: '', course: '', age: '',
    budgetMin: 450, budgetMax: 650, preferredAreas: [], moveInDate: 'July 2026',
    preferredHouseSize: 4, bathroomPref: 'Shared', sleepSchedule: 'Regular',
    cleanliness: 'Clean', noiseTolerance: 'Medium', guestFrequency: 'Occasional',
    smoking: 'Non-smoker', studyStyle: 'Mix', socialVibe: 'Balanced', genderPref: 'No preference',
    dealbreakers: [], bio: '',
  });
  const upd = (key, val) => setForm(p => ({ ...p, [key]: val }));
  const toggleArea = (id) => upd('preferredAreas', form.preferredAreas.includes(id) ? form.preferredAreas.filter(a => a !== id) : [...form.preferredAreas, id]);

  const handleVerify = () => { setTimeout(() => setVerified(true), 1200); };
  const canProceed = step === 0 ? verified : step === 1 ? form.name && form.course : true;

  const handleComplete = () => { login('student'); navigate('/dashboard'); };

  const renderStep = () => {
    switch (step) {
      case 0: return (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: verified ? '#ECFDF5' : '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Shield size={28} style={{ color: verified ? '#059669' : '#4F46E5' }} />
            </div>
            <h3>Student Verification</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.938rem' }}>Verify your Durham University email to get started</p>
          </div>
          <div className="form-group">
            <label className="form-label">University Email</label>
            <input className="form-input" placeholder="yourname@durham.ac.uk" value={form.email}
              onChange={e => upd('email', e.target.value)} />
          </div>
          {!verified ? (
            <button onClick={handleVerify} className="btn btn-primary btn-lg" style={{ width: '100%' }}
              disabled={!form.email.endsWith('@durham.ac.uk')}>
              Send Verification Code
            </button>
          ) : (
            <div style={{ padding: '20px', background: '#ECFDF5', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <Shield size={24} style={{ color: '#059669', marginBottom: '8px' }} />
              <div style={{ fontWeight: 800, color: '#065F46' }}>✓ Email Verified</div>
              <div style={{ fontSize: '0.813rem', color: '#059669' }}>You are a verified Durham University student</div>
            </div>
          )}
        </div>
      );
      case 1: return (
        <div>
          <h3 style={{ marginBottom: '24px' }}>Basic Information</h3>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" placeholder="e.g. Alex Thompson" value={form.name} onChange={e => upd('name', e.target.value)} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Year of Study</label>
              <select className="form-select" value={form.year} onChange={e => upd('year', e.target.value)}>
                <option value="">Select...</option>
                {['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Postgrad'].map(y => <option key={y}>{y}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Age</label>
              <input className="form-input" type="number" placeholder="20" value={form.age} onChange={e => upd('age', e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Course / Department</label>
            <input className="form-input" placeholder="e.g. Computer Science" value={form.course} onChange={e => upd('course', e.target.value)} />
          </div>
        </div>
      );
      case 2: return (
        <div>
          <h3 style={{ marginBottom: '24px' }}>Housing Preferences</h3>
          <div className="form-group">
            <label className="form-label">Monthly Budget Range (£ per person)</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <input className="form-input" type="number" placeholder="Min" value={form.budgetMin} onChange={e => upd('budgetMin', +e.target.value)} />
              <input className="form-input" type="number" placeholder="Max" value={form.budgetMax} onChange={e => upd('budgetMax', +e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Preferred Durham Areas</label>
            <div className="chip-grid">
              {durhamAreas.map(a => (
                <button key={a.id} className={`chip ${form.preferredAreas.includes(a.id) ? 'active' : ''}`} onClick={() => toggleArea(a.id)}>
                  <MapPin size={12} /> {a.name}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label">Preferred House Size</label>
              <select className="form-select" value={form.preferredHouseSize} onChange={e => upd('preferredHouseSize', +e.target.value)}>
                {[2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} bedrooms</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Bathroom Preference</label>
              <select className="form-select" value={form.bathroomPref} onChange={e => upd('bathroomPref', e.target.value)}>
                {['Shared', 'Ensuite preferred', 'No preference'].map(b => <option key={b}>{b}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Move-in Date</label>
            <select className="form-select" value={form.moveInDate} onChange={e => upd('moveInDate', e.target.value)}>
              {['July 2026', 'August 2026', 'September 2026'].map(d => <option key={d}>{d}</option>)}
            </select>
          </div>
        </div>
      );
      case 3: return (
        <div>
          <h3 style={{ marginBottom: '24px' }}>Lifestyle Preferences</h3>
          {[
            { key: 'sleepSchedule', label: 'Sleep Schedule', options: ['Early Bird', 'Regular', 'Night Owl'] },
            { key: 'cleanliness', label: 'Cleanliness Level', options: ['Very Clean', 'Clean', 'Relaxed'] },
            { key: 'noiseTolerance', label: 'Noise Tolerance', options: ['Low', 'Medium', 'High'] },
            { key: 'guestFrequency', label: 'Guest Frequency', options: ['Rarely', 'Occasional', 'Often'] },
            { key: 'smoking', label: 'Smoking', options: ['Non-smoker', 'Social smoker', 'Regular smoker'] },
            { key: 'socialVibe', label: 'Social Vibe', options: ['Quiet', 'Balanced', 'Social'] },
            { key: 'studyStyle', label: 'Study Style', options: ['Home', 'Library', 'Mix'] },
          ].map(field => (
            <div key={field.key} className="form-group">
              <label className="form-label">{field.label}</label>
              <div className="chip-grid">
                {field.options.map(opt => (
                  <button key={opt} className={`chip ${form[field.key] === opt ? 'active' : ''}`}
                    onClick={() => upd(field.key, opt)}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
      case 4: return (
        <div>
          <h3 style={{ marginBottom: '24px' }}>Final Touches</h3>
          <div className="form-group">
            <label className="form-label">Short Bio</label>
            <textarea className="form-input" rows={4} placeholder="Tell potential housemates about yourself..."
              value={form.bio} onChange={e => upd('bio', e.target.value)} style={{ resize: 'vertical' }} />
          </div>
          <div className="form-group">
            <label className="form-label">Dealbreakers (optional)</label>
            <input className="form-input" placeholder="e.g. Smoking indoors, Loud parties" />
          </div>
          <div className="form-group">
            <label className="form-label">Gender Preference for Housemates</label>
            <div className="chip-grid">
              {['No preference', 'Male only', 'Female only'].map(opt => (
                <button key={opt} className={`chip ${form.genderPref === opt ? 'active' : ''}`}
                  onClick={() => upd('genderPref', opt)}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '40px 0 80px' }}>
      <div className="container-sm">
        {/* Progress */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Step {step + 1} of {steps.length} — {steps[step]}
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>{Math.round(((step + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="progress-bar"><div className="progress-fill" style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
        </div>

        {/* Card Content */}
        <div className="card" style={{ padding: '40px' }}>
          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            {renderStep()}
          </motion.div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
          <button onClick={() => setStep(s => s - 1)} className="btn btn-secondary btn-lg" disabled={step === 0} style={{ opacity: step === 0 ? 0.5 : 1 }}>
            <ChevronLeft size={18} /> Back
          </button>
          {step < steps.length - 1 ? (
            <button onClick={() => setStep(s => s + 1)} className="btn btn-primary btn-lg" disabled={!canProceed} style={{ opacity: canProceed ? 1 : 0.5 }}>
              Continue <ChevronRight size={18} />
            </button>
          ) : (
            <button onClick={handleComplete} className="btn btn-primary btn-lg">
              Complete Profile <Sparkles size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
