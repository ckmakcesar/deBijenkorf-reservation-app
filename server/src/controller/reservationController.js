const express = require('express');
const { param, body } = require('express-validator');

const Reservation = require('../models/Reservation');
const Store = require('../models/Store');
const Status = require('../models/Status');
const { isValidRequest } = require('../utils/utils');

const reservationController = express.Router();

reservationController.post(
  '/',
  [
    body('name').isString(),
    body('storeId').isInt(),
    body('statusId').toInt(),
    body('date').isDate(),
  ],
  async (req, res) => {
    if (!isValidRequest(req, res)) return; // when req is NOT valid, res.sent with error and exit

    try {
      const newReservation = req.body;
      const createdReservation = await Reservation.create(newReservation);
      res.status(201).json(createdReservation);
    } catch (e) {
      res.status(400).json({
        message: e?.name,
        details: e?.errors,
      });
    }
  },
);

reservationController.get(
  '/',
  async (_, res) => {
    const reservations = await Reservation.findAll({
      order: [['date', 'ASC']], // default: order by date, in ascending order
    });
    res.status(200).json(reservations);
  },
);

reservationController.put(
  '/:reservationId',
  [
    param('reservationId').toInt(),
    body('name').optional().isString(),
    body('storeId').optional().isInt(),
    body('statusId').optional().toInt(),
    body('date').optional().isDate(),
  ],
  async (req, res) => {
    if (!isValidRequest(req, res)) return; // when req is NOT valid, res.sent with error and exit

    const { name, storeId, statusId, date } = req.body;
    if (!name && !storeId && !statusId && !date) {
      res.status(400).json({
        message: 'Request Validation Error',
        details: 'At least one of the fields { name, storeId, statusId, date } needs to be updated',
      });
      return; // when req is NOT valid, res.sent with error and exit
    }

    const { reservationId } = req.params;
    const reservation = await Reservation.findByPk(reservationId);
    if (reservation) {
      const updatedReservation = await reservation.update({
        name,
        storeId,
        statusId,
        date,
      });
      res.status(200).json(updatedReservation);
    } else {
      res.status(404).json({ message: 'Resource Not Found' });
    }
  },
);

reservationController.delete(
  '/:reservationId',
  [
    param('reservationId').isInt(),
  ],
  async (req, res) => {
    const { reservationId } = req.params;
    const reservation = await Reservation.findByPk(reservationId);
    if (reservation) {
      await reservation.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Resource Not Found' });
    }
  },
);

reservationController.get(
  '/stores',
  async (_, res) => {
    const stores = await Store.findAll();
    res.status(200).json(stores);
  },
);

reservationController.get(
  '/statuses',
  async (_, res) => {
    const statuses = await Status.findAll();
    res.status(200).json(statuses);
  },
);

module.exports = { reservationController };
