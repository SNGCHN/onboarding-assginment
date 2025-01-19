import { PropsWithChildren } from "react";
import useProfile from "../../hooks/auth/useProfile";
import useAuthStore from "../../store/useAuthStore";

export default function AuthInitializer({ children }: PropsWithChildren) {
  const { error } = useProfile();
  const logout = useAuthStore(state => state.logout);

  if (error) {
    logout();
  }

  return <>{children}</>;
}
