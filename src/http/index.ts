import { MethodTypes } from "@/enums";
import { AnyObjectType } from "@/types/AnyObjectType";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  let token = localStorage.getItem("jwt");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

axios.interceptors.response.use((response: AxiosResponse) => {
  return response.data;
});
export interface IAxiosPayload {
  method: MethodTypes;
  baseURL: string;
  url: string;
  data?: AnyObjectType;
}

export interface IFetcherProps {
  method: MethodTypes;
  url: string;
  data?: AnyObjectType;
}
export const fetcher = async ({ method, url, data }: IFetcherProps) => {
  try {
    let axiosPayload: IAxiosPayload = {
      method,
      baseURL: import.meta.env.VITE_API_URL,
      url,
    };
    if (method === MethodTypes.POST && data) {
      axiosPayload = { ...axiosPayload, data };
    }
    const response = await axios({ ...axiosPayload });
    return response;
  } catch (error: any) { 
    if (
      (error.response.status === 401 &&
        window.location.pathname !== "/login") ||
      error.response.status === 403 ||
      error.response.status === 422
    ) {
      localStorage.removeItem("jwt");
      window.location.href = "login";
    }
    if (error?.response.status === 401) return error?.response;
  }
};
