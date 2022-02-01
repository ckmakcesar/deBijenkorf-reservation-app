import React from 'react';
import { ToastContainer } from 'react-toastify';

import { TOAST_LIMIT, TOAST_DURATION_MS } from '../../constants';

import '../../styles/misc/Toast.css';

// simple message push - for errors
const ToastNotification = () => (
  <div id='Toast-container'>
    <ToastContainer
      limit={TOAST_LIMIT}
      autoClose={TOAST_DURATION_MS}
    />
  </div>
);

export default ToastNotification;
