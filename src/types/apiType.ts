export interface User {
  id: string;
  nickname: string;
  avatar: string | null;
}

export interface RegisterRequest {
  id: string;
  password: string;
  nickname: string;
}

export interface RegisterResponse {
  message: string;
  success: boolean;
}

export interface LoginRequest {
  id: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  userId: string;
  success: boolean;
  avatar: string | null;
  nickname: string;
}

export interface UserResponse {
  id: string;
  nickname: string;
  avatar: string | null;
  success: boolean;
}

export interface ProfileUpdateRequest {
  avatar?: File;
  nickname?: string;
}

export interface ProfileUpdateResponse {
  avatar: string | null;
  nickname: string;
  message: string;
  success: boolean;
}
