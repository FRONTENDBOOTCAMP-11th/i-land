import CategoryChip from "@components/common/CategoryChip";
import ProductLikeBtn from "@components/common/ProductLikeBtn";
import useAxiosInstance from "@hooks/useAxiosInstance";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseURL = "https://11.fesp.shop";

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

export default function ProductCard({ item }) {
  const axios = useAxiosInstance();

  const [sellerName, setSellerName] = useState();

  // 상품 판매자 이름 획득
  const fetchSellerInfo = async _id => {
    const res = await axios.get(`/products/${_id}`);
    const sellerName = res.data.item.seller.name;
    setSellerName(sellerName);
  };

  useEffect(() => {
    fetchSellerInfo(item._id);
  }, []);

  // 상품 카테고리 칩 출력
  const categoryList = item.extra.category?.map((item, index) => (
    <CategoryChip key={index} category={item} />
  ));

  return (
    <li className="w-[180px] relative">
      {/* 상품 카드 클릭 시 상품 페이지로 이동 */}
      <Link to={`/products/${item._id}`} aria-label="상품 페이지로 이동">
        <div className="aspect-[180/180] rounded-[8px] border border-gray3 overflow-hidden">
          <img
            src={
              baseURL +
              (item.mainImages[0]?.path || "/files/final06/default-profile.png")
            }
            alt={`${item.name} 상품 이미지`}
          />
        </div>
      </Link>
      <ProductLikeBtn id={item._id} />
      <Link to={`/products/${item._id}`} aria-label="상품 페이지로 이동">
        <div className="flex items-center gap-1 mb-[10px] pt-3">
          <p className="text-[12px] text-gray3 line-clamp-1">{sellerName}</p>
          <img
            src="/assets/icons/chevron-right.svg"
            className="w-[3px] h-[6px]"
          />
        </div>
        <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
          {item.name}
        </h3>
        <p className="mb-[10px]">{item.price.toLocaleString()} 원</p>
        <div className="flex gap-x-[6px] gap-y-1 flex-wrap">{categoryList}</div>
      </Link>
    </li>
  );
}
