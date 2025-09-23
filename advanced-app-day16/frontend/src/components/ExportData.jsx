import React from 'react';
import API from '../api/api';

export default function ExportData() {
  const handleExport = async () => {
    try {
      const res = await API.get('/export', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'logs.csv');
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      alert('Error exporting CSV');
    }
  };

  return (
    <div>
      <h2>Export Data</h2>
      <button onClick={handleExport}>Export CSV</button>
    </div>
  );
}
