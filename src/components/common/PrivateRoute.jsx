import { Navigate, Outlet } from "react-router-dom";

import useUserStore from "@zustand/userStore";

export default function PrivateRoute() {
  const { user } = useUserStore();

  if (!user || !user.accessToken) {
    // 로그인이 되어있지 않은 경우 로그인 페이지로 리다이렉션
    alert("로그인이 필요한 페이지입니다. 로그인 페이지로 이동합니다.");
    return <Navigate to="/users/login" replace />;
  }

  return <Outlet />;
}
