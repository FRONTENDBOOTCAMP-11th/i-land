import useUserStore from "@zustand/userStore";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function useAxiosInstance() {
  const { user } = useUserStore();

  const navigate = useNavigate();

  const location = useLocation();

  const instance = axios.create({
    baseURL: "https://11.fesp.shop",
    timeout: 1000 * 15,
    headers: {
      "client-id": "final06",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });

  instance.interceptors.request.use(config => {
    // 로그인 상태인 경우, user.accessToken 을 headers 에 추가
    if (user) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      const { response } = error;
      // 응답 데이터가 401(accessToken 이 없음)
      if (response?.status === 401) {
        navigateLogin();
      }
      return Promise.reject(error);
    },
  );

  function navigateLogin() {
    const gotoLogin = confirm(
      // confirm 창에서 확인 누른 경우, 로그인으로 이동
      "로그인 후 이용 가능합니다.\n로그인 페이지로 이동하시겠습니까?",
    );
    // state 는 location 객체에 state 객체 > from 이라는 속성으로 추가
    gotoLogin
      ? navigate("/user/login", { state: { from: location.pathname } })
      : navigate(0);
  }
  return instance;
}
