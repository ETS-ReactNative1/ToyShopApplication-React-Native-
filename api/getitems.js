import fetchClient from './client';

const gettoysdata = () => fetchClient.get('/product');

export default {
  gettoysdata,
};
