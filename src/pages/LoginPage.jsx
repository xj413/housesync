import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Mail, ArrowRight, Building2, Eye, EyeOff } from 'lucide-react';
import { useApp } from '../context/AppContext';

const LoginPage = ({ signup }) => {
  const { login } = useApp();
  const navigate = useNavigate();
  const [tab, setTab] = useState('student');
  const [email, setEmail] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleStudentLogin = () => { login('student'); navigate('/dashboard'); };
  const handleStudentSignup = () => { login('student'); navigate('/onboarding'); };
  const handleLandlordLogin = () => { login('landlord'); navigate('/landlord'); };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', padding: '40px 20px' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ width: '100%', maxWidth: '440px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--gradient-main)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, fontSize: '1.125rem', marginBottom: '16px' }}>HS</div>
          <h3 style={{ marginBottom: '8px' }}>{signup ? 'Create your account' : 'Welcome back'}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.938rem' }}>
            {signup ? 'Join the Durham student housing community' : 'Sign in to continue'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div style={{ display: 'flex', background: 'var(--bg-alt)', borderRadius: 'var(--radius-lg)', padding: '4px', marginBottom: '28px' }}>
          {[{ id: 'student', label: 'Student', icon: <Shield size={16} /> }, { id: 'landlord', label: 'Landlord', icon: <Building2 size={16} /> }].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              flex: 1, padding: '12px', borderRadius: 'var(--radius-md)', border: 'none',
              background: tab === t.id ? 'white' : 'transparent', boxShadow: tab === t.id ? 'var(--shadow-sm)' : 'none',
              fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              color: tab === t.id ? 'var(--text)' : 'var(--text-muted)', transition: 'all 0.2s',
            }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <div className="card" style={{ padding: '32px' }}>
          {tab === 'student' ? (
            <>
              <div className="form-group">
                <label className="form-label">Durham Email</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="form-input" placeholder="yourname@durham.ac.uk"
                    value={email} onChange={e => setEmail(e.target.value)}
                    style={{ paddingLeft: '42px' }} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <div style={{ position: 'relative' }}>
                  <input className="form-input" type={showPass ? 'text' : 'password'} placeholder="Enter password" />
                  <button onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)' }}>
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              {signup && (
                <div style={{ padding: '14px', background: '#ECFDF5', borderRadius: 'var(--radius-md)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Shield size={18} style={{ color: '#059669' }} />
                  <span style={{ fontSize: '0.813rem', fontWeight: 600, color: '#065F46' }}>
                    We verify all students via @durham.ac.uk email
                  </span>
                </div>
              )}
              <button onClick={signup ? handleStudentSignup : handleStudentLogin} className="btn btn-primary btn-lg" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}>
                {signup ? 'Create Student Account' : 'Sign In'} <ArrowRight size={18} />
              </button>
            </>
          ) : (
            <>
              <div className="form-group">
                <label className="form-label">Landlord Email</label>
                <input className="form-input" placeholder="your@email.co.uk" />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input className="form-input" type="password" placeholder="Enter password" />
              </div>
              <button onClick={handleLandlordLogin} className="btn btn-accent btn-lg" style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}>
                {signup ? 'Register as Landlord' : 'Sign In'} <ArrowRight size={18} />
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
