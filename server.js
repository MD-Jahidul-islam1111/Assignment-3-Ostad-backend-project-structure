import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mainRoutes from './routes/mainRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/api', mainRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
