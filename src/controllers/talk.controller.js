import DB from '../database';
import { NotFoundError } from '../helpers/error';
import Talk from '../database/models/Talk';

export default {
  addTalk: (req, res) => {
    const talk = Talk.create(req.body);
    return res.status(201).json({
      status: 'success',
      message: 'talk event successfully added',
      data: talk,
    });
  },

  getAllTalks: (_, res) => {
    const talks = Talk.all();
    return res.status(200).json({
      status: 'success',
      message: 'talk events successfully retrieved',
      data: talks,
    });
  },

  getATalk: (req, res, next) => {
    const talk = Talk.find(parseInt(req.params.talkId, 10));
    if (!talk) return next(new NotFoundError('talk event does not exist'));
    return res.status(200).json({
      status: 'success',
      message: 'talk event successfully retrieved',
      data: talk,
    });
  },

  updateATalk: (req, res, next) => {
    const talk = Talk.find(parseInt(req.params.talkId, 10));
    if (!talk) return next(new NotFoundError('talk event does not exist'));

    const updatedTalk = talk.update(req.body);
    return res.status(200).json({
      status: 'success',
      message: 'talk event successfully updated',
      data: updatedTalk,
    });
  },

  deleteATalk: (req, res, next) => {
    const talkId = parseInt(req.params.talkId, 10);
    const talk = DB.talks.find((record) => record.id === talkId);
    // console.log('talk in question', talk);

    if (!talk) return next(new NotFoundError('talk event does not exist'));
    DB.talks.filter((record) => record.id !== talkId);

    return res.status(200).json({
      status: 'success',
      message: `talk event with ID ${talkId} has been deleted`,
    });
  },
};
