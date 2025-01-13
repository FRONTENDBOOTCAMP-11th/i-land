import useAxiosInstance from "@hooks/useAxiosInstance";
import PropTypes from "prop-types";
import { useState } from "react";

ProductLikeBtn.propTypes = {
  id: PropTypes.number.isRequired,
};

export default function ProductLikeBtn({ id }) {
  const axios = useAxiosInstance();

  // zustand 찜한 상품에 대한 store 추가 필요
  const [likeProduct, setLikeProduct] = useState();

  // 상품 찜하기(bookmark) API
  const bookmarkProduct = () => {
    setLikeProduct(!likeProduct);
  };

  return (
    <button
      type="button"
      aria-label="상품 찜하기 버튼"
      className="absolute grid bg-white rounded-full size-7 place-items-center left-36 top-36 border border-gray2"
      onClick={bookmarkProduct}
    >
      {likeProduct ? (
        <img src="/assets/icons/heart-fill-sm.svg" className="w-4 h-[14px]" />
      ) : (
        <img src="/assets/icons/heart-sm.svg" className="w-4 h-[14px]" />
      )}
    </button>
  );
}
