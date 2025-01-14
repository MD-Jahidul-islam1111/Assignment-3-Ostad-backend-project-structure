import express from 'express';
import { getHelloWorld, postBody } from '../controllers/mainController.js';

const router = express.Router();

router.get('/hello', getHelloWorld);
router.post('/post-body', postBody);

export default router;
