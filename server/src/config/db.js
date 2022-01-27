module.exports = {
  development: {
    username: 'reservation_service',
    password: null,
    database: 'reservations',
    host: '127.0.0.1',
    port: 15432,
    dialect: 'postgres',
    // timezone: 'CET', // TODO: review correction w.r.t. time zone
  },
};
