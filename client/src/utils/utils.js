const moment = require('moment');

// convert from Array of Objects to Object of Objects (prop=Obj; key from specified 2nd arguement)
export const mapByKey = (arr, key) => (arr ? arr.reduce((map, element) => (map[element[key]] = element, map), {}) : {});

export const removeObjProps = (obj, props) => {
  const newObj = { ...obj };
  const propsList = Array.isArray(props) ? props : [props]; // make 2nd argument 'props' an array if it is not
  propsList.forEach((prop) => {
    delete newObj[prop];
  });
  return newObj;
};

// check if the argument is an empty object or not
export const isEmptyObj = (obj) => !!obj && Object.keys(obj).length === 0 && obj.constructor === Object;

export const isFromTodayOn = (time) => (new Date(time).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0));

// directly remove props from the original obj that are NOT empty string / null / undefined
export const cleanObject = (obj) => {
  Object.keys(obj).forEach(key => (
    obj[key] === undefined || obj[key] === '' || obj[key] === null
      ? delete obj[key]
      : {}
  ));
  return obj;
};

export const formatDate = (date) => moment(date).format('YYYY-MM-DD');

export const formatDateTime = (dateTime) => moment(dateTime).format('MMM Do YYYY, h:mm a');

export const isEscKeyDown = (e) => e.key === 'Escape'; // ESCAPE key pressed
