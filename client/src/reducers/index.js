import { combineReducers } from 'redux';

import reservations from './reservations';

const rootReducers = combineReducers({
  reservations,
});

export default rootReducers;