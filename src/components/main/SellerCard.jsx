import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 이미지 경로 정규 표현식
const imgRegex = /^\/.*/;

SellerCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    totalSales: PropTypes.number.isRequired,
  }),
};

export default function SellerCard({ item }) {
  return (
    <li className="w-[180px]">
      {/* 상품 카드 클릭 시 상품 페이지로 이동 */}
      <Link to="#" aria-label="상품 페이지로 이동">
        <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
          <img
            className="size-full"
            src={
              imgRegex.test(item.image)
                ? `https://11.fesp.shop${item.image}`
                : item.image
            }
            alt=""
          />
        </div>
        <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
          {item.name}
        </h3>
        <p className="mb-[10px">
          총 판매 횟수 : <strong>{item.totalSales.toLocaleString()}</strong>건
        </p>
      </Link>
    </li>
  );
}
