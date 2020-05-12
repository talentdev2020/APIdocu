import { apiPath } from './config';
import axios from 'axios';
export const getData = () => {
  return axios.get(apiPath);
};
