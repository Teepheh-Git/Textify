import axios from "axios";
import envs from "../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

let headers = {};


const AxiosInstance = axios.create({
  baseUrl: envs.DEV_BACKEND_URL,
  headers,
});

AxiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

export default AxiosInstance;
