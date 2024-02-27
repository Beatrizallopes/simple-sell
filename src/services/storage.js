
const _setToken = (tokenObj) => {
  localStorage.setItem('token', tokenObj.token);
  // localStorage.setItem('refreshToken', tokenObj.refreshToken);
};

const _getIdToken = () => localStorage.getItem('token');
const _getRefreshToken = () => {
  const refreshToken = localStorage.getItem('refreshToken');
  return refreshToken;
}

const _clearToken = () => {
  localStorage.removeItem('token');
  // localStorage.removeItem('refreshToken');
};

const _setUserInfo = (userInfo) => {
  localStorage.setItem('email', userInfo?.email);
  localStorage.setItem('id_user', userInfo?.id_user);
  localStorage.setItem('user_role', userInfo?.user_role);
  localStorage.setItem('company_name', userInfo?.company_name);
  localStorage.setItem('fk_companies_id_company', userInfo?.fk_companies_id_company);

};

const _getUserInfo = () => {
  const email = localStorage.getItem('email');
  const id_user = localStorage.getItem('id_user');
  const user_role = localStorage.getItem('user_role');
  const company_name = localStorage.getItem('company_name');
  const fk_companies_id_company = localStorage.getItem('fk_companies_id_company');
  return {email, id_user, user_role, company_name, fk_companies_id_company};
}

const _logout = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('token');
  localStorage.removeItem('id_user');
  localStorage.removeItem('user_role');
  localStorage.removeItem('company_name');
  localStorage.removeItem('fk_companies_id_company');
  // localStorage.removeItem('refreshToken');
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
