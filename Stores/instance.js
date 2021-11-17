import axios from "axios";

export const baseURL = "http://10.0.0.4:8000";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
