const express = require('express');
const { exportCSV } = require('../controllers/exportController');
const router = express.Router();

router.get('/', exportCSV);

module.exports = router;
