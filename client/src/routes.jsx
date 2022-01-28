import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ReservationsPage from './containers/ReservationsPage';

const SwitchRoutes = () => (
  <Routes>
    <Route exact path={'/'} element={<ReservationsPage />} />

    {/* Falling out of bounce -> 404 */}
    <Route path='*' element={<div>404</div>} />
  </Routes>
);

export default SwitchRoutes;
