const expressRouter = require('express-promise-router');

const Store = require('../models/Store');

const storeController = expressRouter();

storeController.get(
  '/reservations/stores',
  async (_, res) => {
    const stores = await Store.findAll();
    res.status(200).json(stores);
  },
);

module.exports = { storeController };
