import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 추가: React Router
import ProductsReview from "@components/layout/ProductsReview";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";

export default function DetailFooter({_id}) {
  const { user } = useUserStore();
  const axios = useAxiosInstance();
  const navigate = useNavigate(); // 추가: useNavigate 훅
  const [loading, setLoading] = useState(true); // 로딩
  const [error, setError] = useState(null); // 에러
  const [product, setProduct] = useState(null); // 상품 정보
  const [userInfo, setUserInfo] = useState(null); // 유저 정보
  const [productReview, setProductReview] = useState([]); // 상품 리뷰
  const [reviewContent, setReviewContent] = useState(""); // textarea 상태

  // 현재 유저 정보 가져오기
  const fetchUser = async () => {
    if (!user?._id) return; // user가 없으면 조기 리턴
    try {
      const response = await axios.get(`/users/${user?._id}`); // user._id를 통해서 로그인한 유저의 _id 값을 호출
      setUserInfo(response.data.item);
    } catch (err) {
      setError(err);
    }
  };

  // 구매 후기 등록
  const addReview = async content => {
    if (!user?.accessToken) {
      alert("리뷰 등록은 로그인시 이용 가능합니다.");
      navigate("/user/login"); // 로그인 페이지로 이동
      return;
    }
    try {
      const response = await axios.post(
        `/replies`,
        {
          content: content,
          order_id: userInfo?._id,
          product_id: product?.item?._id,
          image: userInfo?.image,
        },
        {
          headers: { Authorization: `Bearer ${user?.accessToken}` }, // 로그인 상태인 유저의 엑세스  토큰
        },
      );
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

  // 상품 상세 정보
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/products/${_id}`);
      setProduct(response?.data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchUser(); // 유저 정보
    fetchProduct(); // 상품 상세 정보
    setLoading(false); // 로딩 종료
  }, [_id]);

  const ProductsReviewLength = product?.item?.replies?.length; // 등록된 후기 개수
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error.message}</p>;
  if (ProductsReviewLength === 0) return <p>리뷰가 없습니다.</p>;
  return (
    <section name="detailFooter">
      <p className="mb-10 section-title">상품 후기</p>
      <div>
        <p className="mb-7 text-[16px] font-normal">
          후기 {ProductsReviewLength} 개
        </p>
        <div name="reviewBox" className="mb-20 flex flex-col gap-y-7">
          <ProductsReview _id={_id} />
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
