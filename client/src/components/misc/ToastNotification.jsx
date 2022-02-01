import React from 'react';
import { ToastContainer } from 'react-toastify';

import { TOAST_LIMIT } from '../../constants';

// simple message push - for errors
const ToastNotification = () => (
  <div id='Toast-container'>
    <ToastContainer limit={TOAST_LIMIT} />
  </div>
);

export default ToastNotification;
