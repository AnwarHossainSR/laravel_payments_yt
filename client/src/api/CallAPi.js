import axios from 'axios';

let token = localStorage.getItem('token');

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common = { Authorization: `bearer ${token}` };

//get api
export const get = (url, params) => {
  return axios.get(url, { params });
};

//post api
export const post = async (url, data) => {
  try {
    return await axios.post(url, data);
  } catch (error) {
    return error.response.data;
  }
};
