import axios from "axios";

const BASE_URL = "https://www.pre-onboarding-selection-task.shop/";

// 인증이 필요없는 요청
const axiosApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};
export const defaultInstance = axiosApi(BASE_URL);