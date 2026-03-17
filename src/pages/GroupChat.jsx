import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Send, Users, Building2, ArrowLeft, Image, Smile, Paperclip } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { students } from '../data/durhamData';

const GroupChat = () => {
  const { currentUser, getUserGroup, addChatMessage } = useApp();
  const group = getUserGroup();
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [group?.chatMessages]);

  if (!group) {
    return (
      <div style={{ padding: '80px 0', textAlign: 'center', minHeight: '100vh', background: 'var(--bg)' }}>
        <div className="container-sm">
          <Users size={48} style={{ color: 'var(--text-muted)', margin: '0 auto 16px' }} />
          <h3>No Group Chat Yet</h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Join or create a group to start chatting.</p>
          <Link to="/group" className="btn btn-primary">Create Group</Link>
        </div>
      </div>
    );
  }

  const members = group.memberIds.map(id => students.find(s => s.id === id)).filter(Boolean);

  const handleSend = () => {
    if (!message.trim()) return;
    addChatMessage(group.id, currentUser.id, message);
    setMessage('');
  };

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 72px)', background: 'var(--bg)' }}>
      {/* Sidebar */}
      <div style={{ width: '280px', borderRight: '1px solid var(--border)', background: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid var(--border)' }}>
          <h4 style={{ margin: '0 0 4px' }}>{group.name}</h4>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>{members.length} members</p>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
          <div style={{ fontSize: '0.688rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Members</div>
          {members.map(m => (
            <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', borderRadius: 'var(--radius-md)', marginBottom: '4px', background: m.id === currentUser.id ? 'var(--bg-alt)' : 'transparent' }}>
              <div style={{ position: 'relative' }}>
                <img src={m.avatar} alt="" className="avatar avatar-sm" />
                <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--success)', border: '2px solid white' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.813rem', fontWeight: 600 }}>{m.name.split(' ')[0]} {m.id === currentUser.id && '(You)'}</div>
                <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>{m.course}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: '16px', borderTop: '1px solid var(--border)' }}>
          <Link to="/properties" className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
            <Building2 size={14} /> Browse Houses
          </Link>
        </div>
      </div>

      {/* Chat Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border)', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h4 style={{ margin: 0, fontSize: '1rem' }}>#{group.name.toLowerCase().replace(/\s+/g, '-')}</h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{group.chatMessages.length} messages</span>
          </div>
          <div className="badge badge-ghost">{group.status}</div>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {group.chatMessages.map((msg, i) => {
            const sender = students.find(s => s.id === msg.sender);
            const isOwn = msg.sender === currentUser.id;
            const isSystem = msg.sender === 'system';

            if (isSystem) {
              return (
                <div key={i} style={{ textAlign: 'center', margin: '16px 0' }}>
                  <span style={{ display: 'inline-block', padding: '8px 16px', background: '#FFFBEB', borderRadius: 'var(--radius-full)', fontSize: '0.813rem', fontWeight: 600, color: '#92400E', maxWidth: '80%' }}>
                    {msg.text}
                  </span>
                  <div style={{ fontSize: '0.625rem', color: 'var(--text-muted)', marginTop: '4px' }}>{msg.time}</div>
                </div>
              );
            }

            return (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexDirection: isOwn ? 'row-reverse' : 'row' }}>
                <img src={sender?.avatar || currentUser.avatar} alt="" className="avatar avatar-sm" style={{ marginTop: '4px', flexShrink: 0 }} />
                <div style={{ maxWidth: '65%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexDirection: isOwn ? 'row-reverse' : 'row' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{sender?.name.split(' ')[0] || 'You'}</span>
                    <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>{msg.time}</span>
                  </div>
                  <div style={{
                    padding: '12px 16px', borderRadius: '16px', fontSize: '0.875rem', lineHeight: 1.5,
                    background: isOwn ? 'var(--primary)' : 'white',
                    color: isOwn ? 'white' : 'var(--text)',
                    borderBottomRightRadius: isOwn ? '4px' : '16px',
                    borderBottomLeftRadius: isOwn ? '16px' : '4px',
                    boxShadow: 'var(--shadow-xs)',
                  }}>
                    {msg.text}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border)', background: 'white' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button className="btn btn-ghost btn-icon btn-sm" style={{ color: 'var(--text-muted)' }}><Paperclip size={18} /></button>
            <input
              className="form-input" placeholder="Type a message..."
              value={message} onChange={e => setMessage(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              style={{ flex: 1, borderRadius: 'var(--radius-full)' }}
            />
            <button onClick={handleSend} className="btn btn-primary btn-icon" style={{ borderRadius: '50%', width: '44px', height: '44px' }}>
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
