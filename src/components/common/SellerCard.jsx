import { Link } from "react-router-dom";

export default function SellerCard() {
  <li className="w-[180px]">
    {/* 상품 카드 클릭 시 상품 페이지로 이동 */}
    <Link to="#" aria-label="상품 페이지로 이동">
      <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
        <img src="" alt="" />
        <button
          type="button"
          aria-label="상품 찜하기 버튼"
          className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
        >
          <img
            src="/assets/icons/heart-smm.svg"
            className="w-4 h-[14px] hidden"
          />
          <img src="/assets/icons/heart-fill-sm.svg" className="w-4 h-[14px]" />
        </button>
      </div>
      <div className="flex items-center gap-1 mb-[10px]">
        <p className="text-[12px] text-gray3 line-clamp-1">Name</p>
        <img
          src="/assets/icons/chevron-right.svg"
          className="w-[3px] h-[6px]"
        />
      </div>
      <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
        판매자명
      </h3>
      <p className="mb-[10px">1,999 명</p>
    </Link>
  </li>;
}
