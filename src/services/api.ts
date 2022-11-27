import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: process.env.API_PUBLIC_URL,
});

api.interceptors.response.use(
  (res) => {
    const { data } = res || {};
    if ((res?.status === 201 || res?.status === 200)) {
      toast.success(data?.message);
    }
    return res;
  },
  (error: any) => {
    const { response } = error;
    return Promise.reject(response);
  }
);

export default api;
