import { Router } from 'express';
import talk from './talk.route';

const router = Router();

router.use('/talks', talk);

export default router;
