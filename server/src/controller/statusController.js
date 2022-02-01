const expressRouter = require('express-promise-router');

const Status = require('../models/Status');

const statusController = expressRouter();

statusController.get(
  '/reservations/statuses',
  async (_, res) => {
    const statuses = await Status.findAll();
    res.status(200).json(statuses);
  },
);

module.exports = { statusController };
