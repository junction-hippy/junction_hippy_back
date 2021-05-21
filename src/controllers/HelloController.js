import express from 'express';
import * as HelloService from '../services/HelloService';

const router = express.Router();
router.get('/', HelloService.hi);

export default router;
