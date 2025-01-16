import { useNavigate } from "react-router-dom";

export default function SearchNoResult() {
  const navigate = useNavigate();

  // 이전 페이지로 돌아가는 함수
  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className="mt-[110px] flex flex-col items-center gap-[30px]">
      <img src="/assets/images/error.png" alt="검색 결과 없음" />
      <p className="text-[24px] font-bold">검색 결과가 없어요 😭</p>
      <button
        onClick={handleGoBack}
        className="px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
      >
        이전 페이지로 돌아가기
      </button>
    </div>
  );
}
