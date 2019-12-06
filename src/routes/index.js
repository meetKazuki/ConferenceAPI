import { Router } from 'express';
import attendee from './attendee.route';
import talk from './talk.route';

const router = Router();

router.use('/attendees', attendee);
router.use('/talks', talk);

export default router;
