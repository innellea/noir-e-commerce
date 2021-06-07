/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

MenuItem.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  imageUrl: PropTypes.any,
  linkUrl: PropTypes.any,
  match: PropTypes.shape({
    url: PropTypes.any,
  }),
  size: PropTypes.any,
  title: PropTypes.string,
};

export default withRouter(MenuItem);
