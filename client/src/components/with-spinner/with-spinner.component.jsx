import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles.jsx';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );

export default WithSpinner;
