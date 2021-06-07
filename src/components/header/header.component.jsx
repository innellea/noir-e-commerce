// Style
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
// Firebase
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// Components
import CartIcon from '../cart-icon/cart-icon.component';
import FavIcon from '../favicon/FavIcon.jsx';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles';

const Header = ({
  currentUser,
  hidden,
  siteTitle,
  siteDescription,
  siteUrl,
}) => (
  <HeaderContainer>
    <FavIcon />
    <Helmet>
      <html lang='en' amp />
      <title>{siteTitle}</title>
      <meta name='description' content={siteDescription} />
      <link rel='canonical' href={siteUrl} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@wesbos' />
      <meta name='twitter:title' content={siteTitle} />
      <meta name='twitter:description' content={siteDescription} />
      <meta name='twitter:image' content={`${siteUrl}/twitter-card.png`} />
    </Helmet>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/'>HOME</OptionLink>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon styles='' />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool,
  siteDescription: PropTypes.string,
  siteTitle: PropTypes.string,
  siteUrl: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Noir',
  siteDescription: 'Clothing website',
  siteUrl: '',
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
