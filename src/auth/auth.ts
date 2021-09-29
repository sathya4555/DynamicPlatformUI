// import { logExceptionMessageToSQS } from "./../utils/log/SQSLogging";
import axios, { AxiosRequestConfig } from "axios";
import { getUserAccessToken } from "./UserManager";

let instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    let token = getUserAccessToken();
    let socketId = window.sessionStorage.getItem("socket_id");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.Referrer = window.location.host;
      config.headers.socketId = socketId;
    }
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
