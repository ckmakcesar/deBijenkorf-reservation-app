const app = require('./app');
const { logger } = require('./utils/logger');
const { SERVER_PORT, SERVER_HOST } = require('./env');

const server = app.listen(SERVER_PORT, () => {
  logger.log('info', `Server URL: http://${SERVER_HOST}:${SERVER_PORT}`);
});

module.exports = server;
