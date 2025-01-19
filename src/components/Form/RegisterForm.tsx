import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRegister from "../../hooks/auth/useRegister";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const [errors, setErrors] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const { mutate: register, isPending } = useRegister();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "id":
        // 아이디는 영문, 숫자 조합, 최소 4자 최대 12자
        const idPattern = /^(?=.*\d)[a-zA-Z0-9]{4,12}$/;
        setErrors(prev => ({
          ...prev,
          id: !idPattern.test(value) ? "아이디는 4-12자의 영문, 숫자로 구성되어야 합니다." : "",
        }));
        break;

      case "password":
        // 비밀번호는 최소 8자, 대소문자, 숫자, 특수문자 포함
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        setErrors(prev => ({
          ...prev,
          password: !passwordPattern.test(value) ? "비밀번호는 최소 8자, 대소문자, 숫자, 특수문자를 포함해야 합니다." : "",
        }));
        break;

      case "confirmPassword":
        setErrors(prev => ({
          ...prev,
          confirmPassword: value !== formData.password ? "비밀번호가 일치하지 않습니다." : "",
        }));
        break;

      case "nickname":
        // 닉네임은 2-10자 한글, 영문, 숫자 허용
        const nicknamePattern = /^[가-힣a-zA-Z0-9]{2,10}$/;
        setErrors(prev => ({
          ...prev,
          nickname: !nicknamePattern.test(value) ? "닉네임은 2-10자의 한글, 영문, 숫자로 구성되어야 합니다." : "",
        }));
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 최종 전체 유효성 검사
    const newErrors = {
      id: formData.id ? "" : "아이디를 입력해주세요.",
      password: formData.password ? "" : "비밀번호를 입력해주세요.",
      confirmPassword: formData.confirmPassword ? "" : "비밀번호 확인을 입력해주세요.",
      nickname: formData.nickname ? "" : "닉네임을 입력해주세요.",
    };

    // 비밀번호 일치 확인
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    setErrors(newErrors);

    // 모든 에러가 없을 때만 제출
    if (Object.values(newErrors).every(error => error === "")) {
      register({
        id: formData.id,
        password: formData.password,
        nickname: formData.nickname,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <button onClick={() => navigate("/")} className="font-semibold text-indigo-600 hover:text-indigo-500 mb-4">
          ← 홈으로 돌아가기
        </button>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">회원가입</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* 아이디 입력 */}
            <div>
              <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                아이디
              </label>
              <div className="mt-2">
                <input
                  id="id"
                  name="id"
                  type="text"
                  value={formData.id}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.id ? "ring-red-500" : "ring-gray-300"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2`}
                />
                {errors.id && <p className="mt-1 text-sm text-red-600">{errors.id}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                비밀번호
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.password ? "ring-red-500" : "ring-gray-300"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2`}
                />
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                비밀번호 확인
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.confirmPassword ? "ring-red-500" : "ring-gray-300"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2`}
                />
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="nickname" className="block text-sm font-medium leading-6 text-gray-900">
                닉네임
              </label>
              <div className="mt-2">
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  value={formData.nickname}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
                    errors.nickname ? "ring-red-500" : "ring-gray-300"
                  } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2`}
                />
                {errors.nickname && <p className="mt-1 text-sm text-red-600">{errors.nickname}</p>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isPending}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400"
              >
                {isPending ? "회원가입 중..." : "회원가입"}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="relative flex justify-center text-sm">
                <button onClick={() => navigate("/login")} className="font-semibold text-indigo-600 hover:text-indigo-500">
                  이미 계정이 있으신가요? 로그인 하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
