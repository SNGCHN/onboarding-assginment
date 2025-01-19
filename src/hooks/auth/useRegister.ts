import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/auth";
import type { RegisterRequest } from "../../types/apiType";

export default function useRegister() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (registerData: RegisterRequest) => registerUser(registerData),
    onSuccess: data => {
      if (data.success) {
        alert("회원가입이 완료되었습니다. 로그인해주세요.");
        navigate("/login");
      }
    },
    onError: () => {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    },
  });

  return mutation;
}
