import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';
import Routes from './routes';
import ToastNotification from './components/misc/ToastNotification';

import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />

      {/* Global Level Components Below */}
      <ToastNotification />
    </BrowserRouter>
  </Provider>
);

export default App;
