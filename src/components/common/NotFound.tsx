import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-4">페이지를 찾을 수 없습니다</p>
        <p className="text-gray-500 mb-8">요청하신 페이지는 존재하지 않거나 현재 접근할 수 없습니다.</p>
        <Link to="/" className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
