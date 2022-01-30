const { toast } = require('react-toastify');

const { TOAST_LEVELS } = require('../constants/misc');
const toastMessages = require('../constants/toastMessages');

export const addToast = (text, level) => toast[level || TOAST_LEVELS.INFO](text, {
  position: "bottom-left",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
});

export const addActionSuccessToast = (type) => addToast(toastMessages[`${type}_SUCCESS`], TOAST_LEVELS.SUCCESS);

export const addActionFailureToast = (type) => addToast(toastMessages[`${type}_FAILURE`], TOAST_LEVELS.ERROR);
