import { create } from "zustand";
import type { User } from "../types/apiType";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (userOrUpdater: User | null | ((prev: User | null) => User | null)) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>(set => ({
  user: null,
  isAuthenticated: false,
  setUser: userOrUpdater =>
    set(state => {
      const newUser = typeof userOrUpdater === "function" ? userOrUpdater(state.user) : userOrUpdater;

      return {
        user: newUser,
        isAuthenticated: !!newUser,
      };
    }),
  logout: () => {
    localStorage.removeItem("accessToken");
    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));

export default useAuthStore;
