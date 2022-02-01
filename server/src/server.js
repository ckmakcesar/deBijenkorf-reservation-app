const compression = require('compression');
const express = require('express');
const path = require('path');

const { reservationController } = require('./controller/reservationController');
const { logger } = require('./utils/logger');
const { SERVER_PORT, SERVER_HOST } = require('./env');

const app = express();
const publicPath = express.static(path.join(__dirname, '..', 'public'), { redirect: false });

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // as body parser for incoming request

app.use((req, _, next) => { logger.info(`${req.method} ${req.originalUrl}`); next(); });

// For all urls that are NOT /api/, serve with the built frontend client (located at ./server/public)
const indexPath = path.join(__dirname, '..', 'public', 'index.html');
app.use(publicPath);
app.get(/^\/(?!api\/).*/, (_, res) => { res.sendFile(indexPath) });

app.use('/api/v1/reservations', reservationController);

app.listen(SERVER_PORT, () => {
  logger.log('info', `Server URL: http://${SERVER_HOST}:${SERVER_PORT}`);
});
