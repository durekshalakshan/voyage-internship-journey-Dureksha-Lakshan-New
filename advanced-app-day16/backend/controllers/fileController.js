const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

const uploadFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: 'No file uploaded' });

    const logsPath = './logs.json';
    let logs = [];
    if (fs.existsSync(logsPath)) {
      logs = JSON.parse(fs.readFileSync(logsPath, 'utf-8'));
    }

    logs.push({ type: 'upload', filename: req.file.filename, time: new Date().toISOString() });
    fs.writeFileSync(logsPath, JSON.stringify(logs, null, 2));

    res.json({ msg: 'File uploaded successfully', file: req.file.filename });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { upload, uploadFile };
