const sendEmailUtil = require('../utils/email');
const fs = require('fs');

const sendEmail = async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
      return res.status(400).json({ msg: 'All fields are required' });
    }

    await sendEmailUtil(to, subject, text);

    const logsPath = './logs.json';
    let logs = [];
    if (fs.existsSync(logsPath)) {
      logs = JSON.parse(fs.readFileSync(logsPath, 'utf-8'));
    }
    logs.push({ type: 'email', to, subject, time: new Date().toISOString() });
    fs.writeFileSync(logsPath, JSON.stringify(logs, null, 2));

    res.json({ msg: 'Email sent successfully' }); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error sending email' });
  }
};

module.exports = { sendEmail };
