import React from 'react';
import { ToastContainer } from 'react-toastify';

import { TOAST_LIMIT } from '../../constants';

// simple message push - for errors
const ToastNotification = () => (
  <ToastContainer limit={TOAST_LIMIT} />
);

export default ToastNotification;
