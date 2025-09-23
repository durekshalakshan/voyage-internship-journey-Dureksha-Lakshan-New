const express = require('express');
const cors = require('cors');
const fileRoutes = require('./routes/fileRoutes');
const emailRoutes = require('./routes/emailRoutes');
const exportRoutes = require('./routes/exportRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/files', fileRoutes);       
app.use('/email', emailRoutes);      
app.use('/export', exportRoutes);    

module.exports = app;
