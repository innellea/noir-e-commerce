import { createStore, applyMiddleware } from "redux";

// middleware
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; ///TODO : add middlewares

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
