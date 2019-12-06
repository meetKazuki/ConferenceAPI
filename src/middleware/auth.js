import Attendee from '../../database/models/Attendee';
import { ApplicationError } from '../helpers/error';

export default {
  checkExistingUser: (req, _, next) => {
    const { email } = req.body;

    const getUser = Attendee.findOne('email', email);
    if (getUser) return next(new ApplicationError(409, 'user already exist'));

    return next();
  },
};
