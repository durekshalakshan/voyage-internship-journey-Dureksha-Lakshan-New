import React from 'react';
import FileUpload from './components/FileUpload';
import SendEmail from './components/SendEmail';
import ExportData from './components/ExportData';
import './App.css'; 
function App() {
  return (
    <div className="app-container">
      <h1>Advanced React App</h1>
      <div className="card">
        <FileUpload />
      </div>
      <div className="card">
        <SendEmail />
      </div>
      <div className="card">
        <ExportData />
      </div>
    </div>
  );
}

export default App;
