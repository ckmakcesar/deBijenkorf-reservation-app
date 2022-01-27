const compression = require('compression');
const express = require('express');
const path = require('path');

const { reservationController } = require('./controller/reservationController');
const { logger } = require('./utils/logger');
const { SERVER_PORT, SERVER_HOST } = require('./env');

const app = express();

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // as body parser for incoming request

app.use((req, _, next) => { logger.info(`${req.method} ${req.originalUrl}`); next(); });

app.use('/api/v1/reservations', reservationController);

app.listen(SERVER_PORT, () => {
  logger.log('info', `Server URL: http://${SERVER_HOST}:${SERVER_PORT}`);
});
