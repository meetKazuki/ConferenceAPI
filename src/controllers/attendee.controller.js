import Attendee from '../database/models/Attendee';

export default {
  addAttendee: (req, res) => {
    const user = Attendee.create(req.body);
    return res.status(201).json({
      status: 'success',
      message: 'attendee successfully added',
      data: user,
    });
  },
};
