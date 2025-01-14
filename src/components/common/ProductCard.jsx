import CategoryChip from "@components/common/CategoryChip";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const baseURL = "https://11.fesp.shop";

// ProductCard 에 props 는 하나의 item 항목만 전달
ProductCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number,
    mainImages: PropTypes.array,
    name: PropTypes.string,
    price: PropTypes.number,
    extra: PropTypes.shape({
      category: PropTypes.array,
    }),
  }),
};

// 상품 판매자 name 조회
export default function ProductCard({ item }) {
  // 상품 카테고리 칩 출력
  const categoryList = item.extra.category?.map((item, index) => (
    <CategoryChip key={index} category={item} />
  ));

  return (
    <li className="w-[180px] relative">
      {/* 상품 카드 클릭 시 상품 페이지로 이동 */}
      <Link to={`/products/${item._id}`} aria-label="상품 페이지로 이동">
        <div className="aspect-[180/180] rounded-[8px] border border-gray3 overflow-hidden bg-white content-center">
          <img
            src={
              baseURL +
              (item.mainImages[0]?.path || "/files/final06/default-profile.png")
            }
            alt={`${item.name} 상품 이미지`}
          />
        </div>
        <h3 className="text-[18px] font-bold my-3 leading-normal line-clamp-2">
          {item.name}
        </h3>
        <p className="mb-[10px]">{item.price.toLocaleString()} 원</p>
        <div className="flex gap-x-[6px] gap-y-1 flex-wrap">{categoryList}</div>
      </Link>
    </li>
  );
}
