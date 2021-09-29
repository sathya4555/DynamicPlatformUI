import axios, { AxiosRequestConfig } from "axios";

let instance = axios.create();

instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    let socketId = window.sessionStorage.getItem("socket_id");
    config.headers.Referrer = window.location.host;
    config.headers.socketId = socketId;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//on successful response
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    //log error in sqs
    // logExceptionMessageToSQS(error);
    return Promise.reject(error);
  }
);

export default instance;
