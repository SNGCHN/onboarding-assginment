import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../api/auth";
import useAuthStore from "../../store/useAuthStore";
import { useEffect } from "react";

export default function useProfile() {
  const setUser = useAuthStore(state => state.setUser);

  const query = useQuery({
    queryKey: ["user-profile"] as const,
    queryFn: () => getUserInfo(),
    enabled: !!localStorage.getItem("accessToken"),
  });

  useEffect(() => {
    if (query.error) {
      localStorage.removeItem("accessToken");
      setUser(null);
    } else if (query.data?.success) {
      setUser({
        id: query.data.id,
        nickname: query.data.nickname,
        avatar: query.data.avatar,
      });
    }
  }, [query.data, query.error, setUser]);

  return query;
}
