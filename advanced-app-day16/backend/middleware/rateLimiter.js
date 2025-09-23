const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  message: 'Too many requests, try again later.',
});

module.exports = limiter;
