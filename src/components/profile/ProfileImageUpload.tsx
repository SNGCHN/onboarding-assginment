import { useState, useRef, ChangeEvent } from "react";
import useUpdateProfile from "../../hooks/auth/useUpdateProfile";

const ProfileImageUpload = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { mutate: updateProfile } = useUpdateProfile();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 파일 크기 제한 (예: 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("파일 크기는 5MB를 초과할 수 없습니다.");
        return;
      }

      // 허용된 이미지 파일 타입
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        alert("jpg, png, gif 파일만 업로드 가능합니다.");
        return;
      }

      setSelectedFile(file);

      // 이미지 미리보기
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      updateProfile({ avatar: selectedFile });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center">
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/jpeg,image/png,image/gif" className="hidden" />

      <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 relative" onClick={triggerFileInput}>
        {preview ? <img src={preview} alt="Profile Preview" className="w-full h-full rounded-full object-cover" /> : <span className="text-gray-500">이미지 선택</span>}
      </div>

      {selectedFile && (
        <button onClick={handleUpload} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          프로필 이미지 업로드
        </button>
      )}
    </div>
  );
};

export default ProfileImageUpload;
