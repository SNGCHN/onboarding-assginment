import client from "./client";
import { RegisterRequest, RegisterResponse, LoginRequest, LoginResponse, UserResponse, ProfileUpdateRequest, ProfileUpdateResponse } from "../types/apiType";

// 회원가입 함수
// POST /register
// body: { id, password, nickname }
export async function registerUser(data: RegisterRequest): Promise<RegisterResponse> {
  const response = await client.post<RegisterResponse>("/register", data);
  return response.data;
}

// 로그인 함수
//  POST /login
//  body: { id, password }
export async function loginUser(data: LoginRequest): Promise<LoginResponse> {
  const response = await client.post<LoginResponse>("/login", data);
  return response.data;
}

// 유저 정보 조회
// GET /user
// 요청 헤더에 Authorization: Bearer [token]이 자동 삽입됨(client 인터셉터에서 처리)
export async function getUserInfo(): Promise<UserResponse> {
  // client.get<UserResponse>("/user")로 GET 요청
  const response = await client.get<UserResponse>("/user");
  return response.data;
}

// 프로필 업데이트
// PATCH /profile
// body: FormData에 avatar(파일), nickname(문자열) 중 하나 또는 둘 다 담아서 전송
export async function updateProfile(data: ProfileUpdateRequest): Promise<ProfileUpdateResponse> {
  // FormData 인스턴스 생성
  const formData = new FormData();

  // 각 data가 존재하면 formData에 삽입
  if (data.avatar) {
    formData.append("avatar", data.avatar);
  }

  if (data.nickname) {
    formData.append("nickname", data.nickname);
  }

  // patch 요청. Content-Type을 multipart/form-data로 보내야 하므로
  // client.interceptors에는 "application/json"이 기본이지만,
  // 여기선 axios 호출 시 별도 설정을 추가할 수도 있음.
  const response = await client.patch<ProfileUpdateResponse>("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}
