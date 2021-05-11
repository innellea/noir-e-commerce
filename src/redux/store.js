import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

// middleware
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; ///TODO : add middlewares

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
