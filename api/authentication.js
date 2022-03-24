import fetchClient from './client';

const login = (username, password) =>
  fetchClient.post('/auth/login', {username, password});

const Signin = userInfo => fetchClient.post('/auth/register', userInfo);

export default {
  login,
  Signin,
};
