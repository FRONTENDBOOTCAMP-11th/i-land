import ProductsReview from "@components/layout/ProductsReview";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useState, useEffect } from "react";
import useUserStore from "@zustand/userStore";

export default function DetailFooter({_id}) {
  const { user } = useUserStore();
  const axios = useAxiosInstance();
  const [loading, setLoading] = useState(true); // 로딩
  const [error, setError] = useState(null); // 에러
  const [product, setProduct] = useState(); // 상품 정보
  const [userInfo, setUserInfo] = useState(); // 유저 정보
  const [productReview, setProductReview] = useState([]); // 상품 리뷰
  const [reviewContent, setReviewContent] = useState(""); // textarea 상태

  // 상품 후기 목록 조회
  const fetchProductReview = async () => {
    try {
      const response = await axios.get(`/replies/products/${_id}`);
      if (response.data.item === 0) {
        console.log("댓글이 없습니다.");
      }
      setProductReview(response);
    } catch (err) {
      setError(err);
    }
  };

  // 리뷰 추가
  const addReview = async content => {
    try {
      const response = await axios.post(`/replies/`, {
        content: content,
        order_id: userInfo._id,
        product_id: product._id,
      });
      setProductReview(prevReviews => {
        return Array.isArray(prevReviews)
          ? [...prevReviews, response.data]
          : [response.data];
      });
      setReviewContent(""); // 리뷰 추가 후 textarea 비우기
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchProductReview(); // 상품 정보 가져오기
      setLoading(false); // 호출이 끝난 후 loading false 설정
    };
    fetchData();
  }, [_id]);
  console.log("상품후기목록입니다.", productReview.data);
  return (
    <section name="detailFooter">
      <p className="mb-10 section-title">상품 후기</p>
      <div>
        <p className="mb-7 text-[16px] font-normal">
          후기 {productReview.length} 개
        </p>
        <div name="reviewBox" className="mb-20 flex flex-col gap-y-7">
          <ProductsReview _id={_id} productReview={productReview} />
        </div>
        <div className="flex flex-col gap-y-7">
          <p className="section-title">상품의 후기를 작성하세요</p>
          <div className="p-10 border rounded-lg h-52 border-gray2">
            <textarea
              className="w-full h-full text-[24px] resize-none outline-none"
              placeholder="내용을 입력하세요"
              value={reviewContent}
              onChange={e => setReviewContent(e.target.value)} // textarea 값 변경 시 상태 업데이트
            ></textarea>
          </div>
          <div>
            <button
              className="h-[50px] py-[14px] px-9 text-[18px] text-white bg-point-blue rounded-[8px] font-bold"
              onClick={() => addReview(reviewContent)}
            >
              리뷰 등록
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
