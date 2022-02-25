import fetchClient from './client';

const login = (username, password) =>
  fetchClient.post('/auth/login', {username, password});

export default {
  login,
};
