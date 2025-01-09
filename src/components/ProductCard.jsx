import { Link } from "react-router-dom";

const baseURL = "https://11.fesp.shop";

export default function ProductCard({ item }) {
  return (
    <li className="w-[180px]">
      <Link
        to={`/products/${item.product._id}`}
        aria-label="상품 페이지로 이동"
      >
        <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
          <img
            src={baseURL + item.product.mainImages[0].path}
            alt={`${item.product.name} 상품 이미지`}
          />
          <button
            type="button"
            aria-label="상품 찜하기 버튼"
            className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
          >
            <img
              src="/assets/icons/heart-smm.svg"
              className="w-4 h-[14px] hidden"
            />
            <img
              src="/assets/icons/heart-fill-sm.svg"
              className="w-4 h-[14px]"
            />
          </button>
        </div>
        <div className="flex items-center gap-1 mb-[10px]">
          <p className="text-[12px] text-gray3 line-clamp-1">상품 판매자 명</p>
          <img
            src="/assets/icons/chevron-right.svg"
            className="w-[3px] h-[6px]"
          />
        </div>
        <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
          {item.product.name}
        </h3>
        <p className="mb-[10px]">{item.product.price.toLocaleString()} 원</p>
        <div className="flex gap-x-[6px] gap-y-1 flex-wrap">
          <div className="px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
            만화/애니메이션
          </div>
          <div className="px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
            만화/애니메이션
          </div>
          <div className="px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
            만화/애니메이션
          </div>
          <div className="px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
            만화/애니메이션
          </div>
        </div>
      </Link>
    </li>
  );
}
