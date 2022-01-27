const SERVER_HOST = process.env.SERVER_HOST || 'localhost';
const SERVER_PORT = parseInt(process.env.SERVER_PORT) || 8081;

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  SERVER_HOST,
  SERVER_PORT,
  NODE_ENV,
};
