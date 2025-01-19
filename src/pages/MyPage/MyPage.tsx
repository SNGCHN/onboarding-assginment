import { useState, FormEvent } from "react";
import useAuthStore from "../../store/useAuthStore";
import useUpdateProfile from "../../hooks/auth/useUpdateProfile";
import Page from "../../components/layout/Page";
import ProfileImageUpload from "../../components/profile/ProfileImageUpload";

export default function MyPage() {
  const { user, logout } = useAuthStore();
  const { mutate: updateProfile } = useUpdateProfile();
  const [newNickname, setNewNickname] = useState(user?.nickname || "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateProfile({ nickname: newNickname });
  };

  return (
    <Page>
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">마이페이지</h1>

        <ProfileImageUpload />

        <div className="bg-white p-4 rounded shadow mb-6 mt-6">
          <div className="mb-2">
            <span className="font-semibold">아이디: </span> {user?.id}
          </div>
          <div className="mb-2">
            <span className="font-semibold">닉네임: </span> {user?.nickname}
          </div>
          <div>
            <span className="font-semibold">아바타 URL: </span> {user?.avatar ?? "없음"}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mb-6">
          <label className="block font-semibold mb-1">닉네임 수정</label>
          <input type="text" value={newNickname} onChange={e => setNewNickname(e.target.value)} className="border border-gray-300 px-2 py-1 rounded w-full mb-2" />

          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">
            수정하기
          </button>
        </form>

        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400">
          로그아웃
        </button>
      </div>
    </Page>
  );
}
