import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducers from '../reducers';
import * as sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  thunk,
  sagaMiddleware,
];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({ collapsed: true })); // browser console debugger -> development only
}

const store = createStore(rootReducers, applyMiddleware(...middlewares));

Object.values(sagas).forEach(sagaMiddleware.run);

export default store;
