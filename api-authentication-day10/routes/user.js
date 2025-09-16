import express from 'express';
const router = express.Router();

router.get('/profile', (req, res) => {
    res.json({ message: `Welcome ${req.user.username}`, user: req.user });
});

export default router;
