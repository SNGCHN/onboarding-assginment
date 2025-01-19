import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../../api/auth";
import useAuthStore from "../../store/useAuthStore";
import type { ProfileUpdateRequest } from "../../types/apiType";

interface User {
  id: string;
  nickname: string;
  avatar: string | null;
}

export default function useUpdateProfile() {
  const queryClient = useQueryClient();
  const setUser = useAuthStore(state => state.setUser);

  const mutation = useMutation({
    mutationFn: (updateData: ProfileUpdateRequest) => updateProfile(updateData),
    onSuccess: data => {
      if (data.success) {
        setUser((prev: User | null) =>
          prev
            ? {
                ...prev,
                nickname: data.nickname,
                avatar: data.avatar,
              }
            : null,
        );

        queryClient.invalidateQueries({ queryKey: ["user"] });

        alert("프로필이 성공적으로 업데이트되었습니다.");
      }
    },
    onError: () => {
      alert("프로필 업데이트에 실패했습니다. 다시 시도해주세요.");
    },
  });

  return mutation;
}
