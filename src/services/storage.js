
const _setToken = (tokenObj) => {
  localStorage.setItem('token', tokenObj.token);
};

const _getIdToken = () => localStorage.getItem('token');
const _getRefreshToken = () => {
  const refreshToken = localStorage.getItem('refreshToken');
  return refreshToken;
}

const _clearToken = () => {
  localStorage.removeItem('token');
};

const _setUserInfo = (userInfo) => {
  localStorage.setItem('email', userInfo?.email);
  localStorage.setItem('id_user', userInfo?.id_user);
};

const _getUserInfo = () => {
  const email = localStorage.getItem('email');
  const id_user = localStorage.getItem('id_user');
  return {email, id_user};
}

const _logout = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('token');
};

const LocalStorageService = () => ({
  setToken: _setToken,
  getIdToken: _getIdToken,
  getRefreshToken: _getRefreshToken,
  clearToken: _clearToken,
  logout: _logout,
  setUserInfo: _setUserInfo,
  getUserInfo: _getUserInfo,
});

export default LocalStorageService;
