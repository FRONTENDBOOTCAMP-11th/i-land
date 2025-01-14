import { Link } from "react-router-dom";

export default function SearchNoResult() {
  return (
    <div className="mt-[110px] flex flex-col items-center gap-[30px]">
      <img src="/src/assets/images/error.png" alt="검색 결과 없음" />
      <p className="text-[24px] font-bold">검색 결과가 없어요 😭</p>
      <Link to="/" className="text-blue-500 underline">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
