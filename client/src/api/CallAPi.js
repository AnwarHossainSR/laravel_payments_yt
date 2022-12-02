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
    console.log(data);
    return await axios.post(url, data);
  } catch (error) {
    if (error.Ax) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  }
};
