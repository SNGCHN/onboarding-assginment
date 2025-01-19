import axios, { AxiosInstance } from "axios";

// 토큰 가져오는 함수
function getToken(): string {
  return localStorage.getItem("accessToken") || "";
}

// axios 인스턴스
const client: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 인터셉터 설정
client.interceptors.request.use(
  config => {
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
client.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
    }
    return Promise.reject(error);
  },
);

export default client;
