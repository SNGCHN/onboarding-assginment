import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean; // true는 인증 필요, false는 비인증 상태에서만 접근 가능
}

export default function ProtectedRoute({ children, requireAuth = true }: ProtectedRouteProps) {
  const token = localStorage.getItem("accessToken");
  const location = useLocation();

  // 인증이 필요한 페이지인데 토큰이 없는 경우 로그인 페이지로 리다이렉션
  if (requireAuth && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 비인증 상태에서만 접근 가능한 페이지인데 토큰이 있는 경우 메인페이지로 리다이렉션
  if (!requireAuth && token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
