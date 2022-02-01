const compression = require('compression');
const express = require('express');
const expressRouter = require('express-promise-router');
const path = require('path');

const { logger } = require('./utils/logger');
const { reservationController } = require('./controller/reservationController');
const { storeController } = require('./controller/storeController');
const { statusController } = require('./controller/statusController');

const app = express();
const publicPath = express.static(path.join(__dirname, '..', 'public'), { redirect: false });

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // as body parser for incoming request
app.use((req, _, next) => { logger.info(`${req.method} ${req.originalUrl}`); next(); });

// For all urls that are NOT starting with /api/, serve with the built frontend client (located at ./server/public)
const indexPath = path.join(__dirname, '..', 'public', 'index.html');
app.use(publicPath);
app.get(/^\/(?!api\/).*/, (_, res) => { res.sendFile(indexPath) });

const v1Router = expressRouter();
v1Router.use('/', reservationController);
v1Router.use('/', storeController);
v1Router.use('/', statusController);
app.use('/api/v1', v1Router);

module.exports = app;
