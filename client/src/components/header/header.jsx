import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CartDropdown from '../cart-dropdown/cart-dropdown';
import CartIcon from '../cart-icon/cart-icon';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/users.actions';

import {
    HeaderContainer,
    LogoContainer,
    LogoImage,
    OptionLink,
    OptionsContainer,
    Title
} from './header.styles';

const Header = ({ currentUser, hidden, dispatch }) => {
    let [fixed, setFixed] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // A Clean Up Function -> Serves As ComponentWillUnMount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const handleScroll = (event) => {
        // fixed navbar
        if (window.scrollY > 80 && !fixed) {
            setFixed(true);
        }
        // reset navbar
        if (window.scrollY < 80 && fixed) {
            setFixed(false);
        }
    };
    fixed = fixed ? 'fixed' : false;
    return (
        <HeaderContainer fixed={fixed}>
            <LogoContainer as={Link} to='/'>
                <LogoImage />
            </LogoContainer>
            <Title as={Link} to='/'>
                N O I R
            </Title>
            <OptionsContainer fixed={fixed}>
                <OptionLink fixed={fixed} to='/shop'>
                    Shop
                </OptionLink>

                <OptionLink fixed={fixed} to='/contact'>
                    Contact
                </OptionLink>
                {currentUser ? (
                    <OptionLink
                        to='/'
                        fixed={fixed}
                        onClick={() => dispatch(signOutStart())}
                    >
                        Sign Out
                    </OptionLink>
                ) : (
                    <OptionLink fixed={fixed} to='/auth'>
                        Sign In
                    </OptionLink>
                )}
                <CartIcon fixed={fixed} />
            </OptionsContainer>
            <CartDropdown hidden={hidden} />
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(React.memo(Header));
