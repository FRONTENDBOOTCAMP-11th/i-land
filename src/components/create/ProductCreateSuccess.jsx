import { Link } from "react-router-dom";

export default function ProductCreateSuccess({ onReset }) {
  return (
    <div className="mt-[110px] flex flex-col items-center gap-[30px]">
      <img src="/assets/images/success.svg" alt="상품 등록 완료" />
      <p className="text-[24px] font-bold mb-[30px]">
        상품 등록이 완료되었어요 😄
      </p>
      <div className="flex justify-center gap-7">
        <Link
          to="/"
          className="w-[140px] h-[50px] py-[14px] px-9 border-2 border-gray2 rounded-lg font-bold flex items-center justify-center"
        >
          메인으로
        </Link>
        <button
          onClick={onReset}
          className="w-[140px] h-[50px] py-[14px] px-9 rounded-lg bg-point-blue font-bold text-white flex items-center justify-center"
        >
          상품 등록
        </button>
      </div>
    </div>
  );
}
