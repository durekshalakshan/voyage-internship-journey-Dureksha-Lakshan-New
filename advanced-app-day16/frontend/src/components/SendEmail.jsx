import React, { useState } from 'react';
import API from '../api/api';

export default function SendEmail() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [msg, setMsg] = useState('');

  const handleSend = async () => {
    if (!to || !subject || !text) return setMsg('Please fill all fields');

    try {
      const res = await API.post('/email', { to, subject, text });
      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Error sending email');
    }
  };

  return (
    <div>
      <h2>Send Email</h2>
      <input type="email" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
      <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <textarea placeholder="Message" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSend}>Send Email</button>
      {msg && <p className="msg">{msg}</p>}
    </div>
  );
}
