const { validationResult } = require('express-validator');

const isValidRequest = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      message: 'Request Validation Error',
      errors: errors.array(),
    });
    return false;
  }
  return true;
};

module.exports = {
  isValidRequest,
};
