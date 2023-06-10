// import axios from "axios";

// const BASE_URL = "https://www.pre-onboarding-selection-task.shop/";

// // 인증이 필요없는 요청
// const axiosApi = (url, options) => {
//   const instance = axios.create({ baseURL: url, ...options });
//   return instance;
// };

// // 인증이 필요한 요청
// const axiosAuthApi = (url, options) => {
//   const accessToken = localStorage.getItem("accessToken");
//   const instance = axios.create({
//     baseURL: url,
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//     ...options,
//   });

//   return instance;
// };

// export const defaultInstance = axiosApi(BASE_URL);
// export const authInstance = axiosAuthApi();

// authInstance.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("accessToken");
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });
