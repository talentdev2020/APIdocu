import { apiPath } from './config';
import axios from 'axios';
export const getData = () => {
  return axios.get('https://cors-anywhere.herokuapp.com/' + apiPath);
};
