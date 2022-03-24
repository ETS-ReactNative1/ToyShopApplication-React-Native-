import {create} from 'axios';

const fetchClient = create({
  baseURL: 'https://toyshopapi.herokuapp.com/api',
});

export default fetchClient;