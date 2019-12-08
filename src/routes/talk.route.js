import { Router } from 'express';
import talkController from '../controllers/talk.controller';
import talkSchema from '../validations/talk.validator';
import validator from '../middleware/validator';

const talk = Router();

const { addTalkSchema, paramSchema, updateTalkSchema } = talkSchema;
const {
  addTalk, getAllTalks, getATalk, updateATalk, deleteATalk,
} = talkController;

talk.post(
  '/',
  validator(addTalkSchema),
  addTalk,
);

talk.get(
  '/',
  getAllTalks,
);

talk.get(
  '/:talkId',
  validator(paramSchema),
  getATalk,
);

talk.patch(
  '/:talkId',
  validator(updateTalkSchema),
  updateATalk,
);

talk.delete(
  '/:talkId',
  validator(paramSchema),
  deleteATalk,
);

export default talk;
