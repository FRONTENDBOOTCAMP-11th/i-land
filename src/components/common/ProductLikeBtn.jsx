import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

ProductLikeBtn.propTypes = {
  _id: PropTypes.number.isRequired,
};

export default function ProductLikeBtn({ _id }) {
  const axios = useAxiosInstance();

  // zustand 찜한 상품에 대한 store 추가 필요
  const [likeProduct, setLikeProduct] = useState();

  const { user } = useUserStore();

  // 사용자가 찜한 상품 표시
  const showIsBookmarked = async id => {
    if (user) {
      try {
        const res = await axios.get(`/bookmarks/product/${id}`);
        console.log(res.data.item);
        setLikeProduct(res.data.item._id);
      } catch (err) {
        console.error(err.response.data.message);
      }
    }
  };

  // 상품 찜하기(bookmark) API
  const bookmarkProduct = async id => {
    if (likeProduct) {
      try {
        const res = await axios.delete(`/bookmarks/${likeProduct}`);
        console.log(res.data.item);
        setLikeProduct(null);
      } catch (err) {
        console.error(err.response.data.message);
      }
    } else {
      try {
        const res = await axios.post("/bookmarks/product", {
          target_id: id,
        });
        console.log(res.data.item);
        setLikeProduct(res.data.item._id);
      } catch (err) {
        console.error(err.response.data.message);
      }
    }
  };

  useEffect(() => {
    showIsBookmarked(_id);
  }, []);

  return (
    <button
      type="button"
      aria-label="상품 찜하기 버튼"
      className="absolute grid bg-white rounded-full size-7 place-items-center left-36 top-36 border border-gray2"
      onClick={() => {
        bookmarkProduct(_id);
      }}
    >
      {likeProduct ? (
        <img src="/assets/icons/heart-fill-sm.svg" className="w-4 h-[14px]" />
      ) : (
        <img src="/assets/icons/heart-sm.svg" className="w-4 h-[14px]" />
      )}
    </button>
  );
}
