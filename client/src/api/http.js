import axios from 'axios';
import { ERRORS } from '../constants';

const http = axios.create({
  baseURL: '/api/v1',
  headers: { 'Content-type': 'application/json' },
});

const responseHandler = (response) => response.data;

const errorHandler = (error) => Promise.reject(error.response?.data || { message: ERRORS.common.REQUEST_FAILURE_UNKNOWN });

http.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default http;
