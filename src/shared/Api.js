import axios from "axios";
// IE에서 axios 통신 결과 캐싱되는 현상 방지
axios.defaults.headers.common = {
  Pragma: "no-cache",
};

const BACKEND_URL = "http://localhost:4000"; // 로컬서버

// console.log(process.env);

export const userApi = axios.create({
  baseURL: `${BACKEND_URL}/api/user`,
});
