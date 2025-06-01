import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: process.env.BACKEND_URL,
});

const onRequest = async (config: AxiosRequestConfig): Promise<any> => {
  return config;
};

const onRequestError = async (error: AxiosError): Promise<any> => {
  return Promise.reject(error);
};

const onResponse = async (response: AxiosResponse): Promise<any> => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<any> => {
  return Promise.reject(error);
};

api.interceptors.request.use(onRequest, onRequestError);
api.interceptors.response.use(onResponse, onResponseError);
