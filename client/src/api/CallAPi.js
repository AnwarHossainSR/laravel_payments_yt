import axios from 'axios';



const token = localStorage.getItem("token");
axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

//get api
export const get = async (url) => {
  return await axios.get(url);
};

//post api
export const post = async (url, data) => {
  try {
    return await axios.post(url, data);
  } catch (error) {
    return error.response.data;
  }
};
