import { check, param } from 'express-validator';

export default {
  addTalkSchema: [
    check('topic')
      .not()
      .isEmpty()
      .withMessage('Topic of the talk is required')
      .trim()
      .isLength({ min: 3 })
      .withMessage('Topic should not be less than 3 characters'),

    check('location')
      .not()
      .isEmpty()
      .withMessage('Location of the talk is required')
      .trim()
      .isLength({ min: 3 })
      .withMessage('Location should not be less than 3 characters'),

    check('hostId')
      .not()
      .isEmpty()
      .withMessage('Host ID is required'),
  ],

  updateTalkSchema: [
    check('topic')
      .optional()
      .trim()
      .matches(/[a-zA-Z]{3}/)
      .withMessage('Topic must contain at least 3 letters if you want to update it')
      .isLength({ min: 5 })
      .withMessage('Topic shouldn\'t be less than 5 characters if you want to update it'),

    check('location')
      .optional()
      .trim()
      .matches(/[a-zA-Z]{3}/)
      .withMessage('Location must contain at least 3 letters if you want to update it')
      .isLength({ min: 5 })
      .withMessage('Location shouldn\'t be less than 5 characters if you want to update it'),
  ],

  paramSchema: [
    param('talkId')
      .not()
      .isEmpty()
      .withMessage('Talk ID is required')
      .isInt()
      .withMessage('Talk ID is invalid (should be an int value)'),
  ],
};
