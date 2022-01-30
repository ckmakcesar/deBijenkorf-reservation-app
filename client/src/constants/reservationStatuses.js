const keyMirror = require('keymirror');

const reservationStatusCodes = keyMirror({
  READY: null,
  IN_PROGRESS: null,
  TODO: null,
});

const reservationStatusCodesToColors = {
  [reservationStatusCodes.READY]: 'green',
  [reservationStatusCodes.IN_PROGRESS]: 'orange',
  [reservationStatusCodes.TODO]: 'red',
}

module.exports = {
  reservationStatusCodes,
  reservationStatusCodesToColors,
};
