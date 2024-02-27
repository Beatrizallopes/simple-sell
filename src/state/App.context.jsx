import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import LocalStorageService from '../services/storage';

const AppContext = createContext();
const { Consumer } = AppContext;

function Provider({ children }) {
  const localStorageService = LocalStorageService();
  const [snack, setSnack] = useState({
    open: false,
    severity: 'success', // success, error, warning, info
    message: '',
  });
  const [userInfo, setUserInfo] = useState(localStorageService.getUserInfo() || {
    name: '',
    email: '',
  });

  const state = {
    snackState: [snack, setSnack],
    userInfoState: [userInfo, setUserInfo],
  };

  return (
    <AppContext.Provider
      value={state}
    >
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element,
};

Provider.defaultProps = {
  children: null,
};

export default AppContext;

export { Provider, Consumer };