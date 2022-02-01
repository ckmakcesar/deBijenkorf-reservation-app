module.exports = {
  development: {
    username: 'reservation_service',
    password: null,
    database: 'reservations',
    host: '127.0.0.1',
    port: 15432,
    dialect: 'postgres',
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    timezone: '+01:00', // TODO: review correction w.r.t. time zone
  },
  test: {
    username: 'reservation_service',
    password: null,
    database: 'reservations',
    host: '127.0.0.1',
    port: 15432,
    dialect: 'postgres',
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    timezone: '+01:00',
  },
};
