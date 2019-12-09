import { check } from 'express-validator';

export default {
  addAttendeeSchema: [
    check('name')
      .not()
      .isEmpty()
      .withMessage('Name is required')
      .trim()
      .isLength({ min: 2, max: 75 })
      .withMessage('Name should be between 2 to 75 characters'),

    check('gender')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Gender is required')
      .isIn(['male', 'female'])
      .withMessage("Accepted values are 'male' or 'female'"),

    check('email')
      .not()
      .isEmpty()
      .withMessage('Email address is required')
      .isEmail()
      .withMessage('Enter a valid email address')
      .normalizeEmail(),
  ],
};
