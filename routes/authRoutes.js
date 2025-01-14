import express from 'express';
import { createToken } from '../controllers/authController.js';

const router = express.Router();

router.get('/create-token', createToken);

export default router;
