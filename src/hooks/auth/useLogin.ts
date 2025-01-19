import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import useAuthStore from "../../store/useAuthStore";
import type { LoginRequest } from "../../types/apiType";

export default function useLogin() {
  const navigate = useNavigate();
  const setUser = useAuthStore(state => state.setUser);

  const mutation = useMutation({
    mutationFn: (loginData: LoginRequest) => loginUser(loginData),
    onSuccess: data => {
      if (data.success) {
        localStorage.setItem("accessToken", data.accessToken);

        setUser({
          id: data.userId,
          nickname: data.nickname,
          avatar: data.avatar,
        });

        navigate("/");
      }
    },
    onError: () => {
      alert("로그인 실패. 아이디/비밀번호를 확인하세요.");
    },
  });

  return mutation;
}
