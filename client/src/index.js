import React, { Suspense } from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { store, persistor } from './redux/store';
import Spinner from './components/Spinner/Spinner';
// import "./Internationalization/i18n";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <Suspense fallback={<Spinner />}>
                    <App />
                </Suspense>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorkerRegistration.register();
