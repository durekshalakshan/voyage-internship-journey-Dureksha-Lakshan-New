const fs = require('fs');
const { Parser } = require('json2csv');

const exportCSV = (req, res) => {
  try {
    const logs = JSON.parse(fs.readFileSync('./logs.json', 'utf-8') || '[]');
    const fields = ['type', 'filename', 'to', 'subject', 'time'];
    const parser = new Parser({ fields });
    const csv = parser.parse(logs);

    res.header('Content-Type', 'text/csv');
    res.attachment('logs.csv');
    return res.send(csv);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error exporting CSV' });
  }
};

module.exports = { exportCSV };
