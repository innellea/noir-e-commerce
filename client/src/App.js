import React, { lazy, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.scss';
import ErrorBoundary from './components/error-boundary/error-boundary';
import Footer from './components/footer/Footer';
import Header from './components/header/header';
import Spinner from './components/Spinner/Spinner';
import { GlobalStyles } from './components/Themes/globalStyles';
import { darkTheme, lightTheme } from './components/Themes/Themes';
import { subscribeToNotifications } from './firebase/firebase.utils';
import useDarkMode from './hooks/useDarkMode';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { checkUserSession } from './redux/user/users.actions';
import PrivateRoute from './routes/private-route';
import PublicRoute from './routes/public-route';

// import { useTranslation } from "react-i18next";

// Lazy Load Pages.
const HomePage = lazy(() => import('./pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/shop/shop'));
const CheckoutContainer = lazy(() =>
    import('./pages/checkout/checkout.container')
);
const ContactPage = lazy(() => import('./pages/contact/contact'));
// const AccountPage = lazy(() => import("./pages/account/account"));

const LoginAndRegister = lazy(() =>
    import('./pages/LoginAndRegister/LoginAndRegister')
);

const App = ({ checkUserSession }) => {
    /*
     * TODO:
     * TypeScript
     * Testing
     * AccountPage
     */
    // const { i18n } = useTranslation();
    // const darkMode = useDarkMode();
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    const unsubscribeFromAuth = null;
    useEffect(() => {
        subscribeToNotifications();

        checkUserSession();
        return () => {
            unsubscribeFromAuth();
        };
    }, [checkUserSession]);

    const location = useLocation();
    return (
        <React.Fragment>
            <ThemeProvider theme={themeMode}>
                <>
                    <GlobalStyles />

                    <Header />
                    {/* //! Toggler in development */}
                    {/*   <Toggle
                                    theme={theme}
                                    toggleTheme={themeToggler}
                                /> */}
                    <ErrorBoundary>
                        <Suspense fallback={<Spinner />}>
                            <Switch>
                                <PublicRoute
                                    exact
                                    path={['/', '/home']}
                                    component={HomePage}
                                />

                                <PublicRoute
                                    path='/shop'
                                    component={ShopPage}
                                />
                                <PublicRoute
                                    restricted
                                    path='/auth'
                                    component={LoginAndRegister}
                                />
                                <PublicRoute
                                    exact
                                    path='/contact'
                                    component={ContactPage}
                                />
                                <PrivateRoute
                                    exact
                                    path='/checkout'
                                    component={CheckoutContainer}
                                />
                                <PublicRoute component={PageNotFound} />
                            </Switch>
                        </Suspense>
                        {!location.pathname.match(
                            /^\/$|\/+(home|checkout|contact|shop)$/
                        ) ? (
                            <></>
                        ) : (
                            <Footer />
                        )}
                    </ErrorBoundary>
                </>
            </ThemeProvider>
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(App);
