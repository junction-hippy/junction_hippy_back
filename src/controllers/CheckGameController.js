import express from 'express';
import * as UserCheck from '../middlewares/UserCheck';
import * as CheckGameService from '../services/CheckGameService';
const router = express.Router();

router.post('/', UserCheck.UserCheckByLol, CheckGameService.createGroup);
router.post('/connection', CheckGameService.connectCheck);
router.patch('/chime', CheckGameService.updateChimeId);
router.get('/:chimeId', CheckGameService.findUserChimeId);
router.delete('/:chimeId', CheckGameService.deleteChimeId);

export default router;
