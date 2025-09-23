import React, { useState } from 'react';
import API from '../api/api';

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState('');

  const handleUpload = async () => {
    if (!file) return setMsg('Please select a file');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await API.post('/files', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMsg(res.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Error uploading file');
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {msg && <p className="msg">{msg}</p>}
    </div>
  );
}
