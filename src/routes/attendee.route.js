import { Router } from 'express';
import attendeeController from '../controllers/attendee.controller';
import attendeeMiddleware from '../middleware/auth';
import attendeeSchema from '../validations/attendee.validator';
import validator from '../middleware/validator';

const attendee = Router();

const { addAttendeeSchema } = attendeeSchema;
const { checkExistingUser } = attendeeMiddleware;
const { addAttendee } = attendeeController;

attendee.post(
  '/',
  validator(addAttendeeSchema),
  checkExistingUser,
  addAttendee,
);

export default attendee;
