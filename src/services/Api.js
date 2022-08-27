// Api.js
import axios from "axios";

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
  baseURL: " http://localhost:8000", // it's not recommended to have this info here.
});

// implement a method to execute all the request from here.
const apiRequest = (method, url, request = {}) => {
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": true,
    "Access-Control-Allow-Credentials": true,
  };
  //using the axios instance to perform the request that received from each http method
  return axiosAPI({
    url,
    method,
    headers,
    data: request,
  })
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

// function to execute the http get request
const get = (url, request) => apiRequest("GET", url, request);

// function to execute the http post request
const post = (url, request) => apiRequest("POST", url, request);

// expose your method to other services or actions
const API = {
  get,
  post,
};
export default API;
