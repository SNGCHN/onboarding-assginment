import { Link } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

function Navigation() {
  const { user, logout } = useAuthStore();

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {user ? (
          <>
            <li>
              <Link to="/mypage" className="hover:text-indigo-600">
                {user.nickname}님의 프로필
              </Link>
            </li>
            <li>
              <button onClick={logout} className="hover:text-indigo-600">
                로그아웃
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="hover:text-indigo-600">
                로그인
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-indigo-600">
                회원가입
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
