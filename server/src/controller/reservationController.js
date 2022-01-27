const express = require('express');
const { param, body } = require('express-validator');

const Reservation = require('../models/Reservation');
const { isValidRequest } = require('../utils/utils');

const reservationController = express.Router();

reservationController.post(
  '/',
  [
    body('name').isString(),
    body('storeId').isInt(),
    body('statusId').toInt(),
    body('time').isDate(),
  ],
  async (req, res) => {
    if (!isValidRequest(req, res)) return; // when req is NOT valid, res.sent with error and exit

    try {
      const newReservation = req.body;
      const data = await Reservation.create(newReservation);
      res.status(201).json(data);
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
    const data = await Reservation.findAll({
      order: [['time', 'ASC']], // default: order by time, in ascending order
    });
    res.status(200).json(data);
  },
);

reservationController.put(
  '/:reservationId',
  [
    param('reservationId').toInt(),
    body('name').optional().isString(),
    body('storeId').optional().isInt(),
    body('statusId').optional().toInt(),
    body('time').optional().isDate(),
  ],
  async (req, res) => {
    if (!isValidRequest(req, res)) return; // when req is NOT valid, res.sent with error and exit

    const { name, storeId, statusId, time } = req.body;
    if (!name && !storeId && !statusId && !time) {
      res.status(400).json({
        message: 'Request Validation Error',
        details: 'At least one of the fields { name, storeId, statusId, time } needs to be updated',
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
        time,
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

module.exports = { reservationController };
