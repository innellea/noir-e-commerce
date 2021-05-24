
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const middlewares = [];




if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
  
}

// const store = createStore(
//   rootReducer,
//   defaultState,
//   enhancers
// );

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

export default { store, persistStore };