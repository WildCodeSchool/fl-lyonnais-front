import axios from 'axios';
const baseURL = process.env.REACT_APP_API_URL;

const API = axios.create({ baseURL });

const placeTokenInRequestHeaders = req => {
  const token = window.localStorage.getItem('authToken');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
};

API.interceptors.request.use(placeTokenInRequestHeaders);

const logoutIfUnauthorizedOrForbidden = error => {
  if (error.response && (error.response.status === 401 || error.response.status === 403)) {
    localStorage.setItem('authToken', '')
    window.location.replace('/connexion')
  } else {
    return Promise.reject(error);
  }
}

API.interceptors.response.use(res => res, logoutIfUnauthorizedOrForbidden);

export default API;
