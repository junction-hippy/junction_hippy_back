import express from 'express';
import * as CheckGameService from '../services/CheckGameService';
import * as UserCheck from '../middlewares/UserCheck';
const router = express.Router();

router.post('/', UserCheck.UserCheckByLol, CheckGameService.createGroup);
router.post('/connection', CheckGameService.connectCheck);
export default router;
