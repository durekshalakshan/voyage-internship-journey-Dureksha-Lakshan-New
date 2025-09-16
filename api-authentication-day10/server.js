import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import { authenticateToken } from './middleware/auth.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/api/users', authenticateToken, userRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
