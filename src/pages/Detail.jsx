import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useUserStore from "@zustand/userStore";
import useAxiosInstance from "@hooks/useAxiosInstance";
import ProductsDetailInfomation from "@components/detail/ProductsDetailInfomation";
import ProductsExplanation from "@components/detail/ProductsExplanation";
import AddReview from "@components/detail/AddReview";
import { useNavigate } from "react-router-dom"; // 추가: React Router
import ReviewList from "@components/detail/ReviewList";

export default function Detail() {
  const axios = useAxiosInstance();
  const { user } = useUserStore();
  const { _id } = useParams(); // URL에서 id 추출
  const navigate = useNavigate(); // 추가: useNavigate 훅
  const [loading, setLoading] = useState(true); // 로딩
  const [error, setError] = useState(null); // 에러
  const [product, setProduct] = useState(null); // 상품 초기값 null
  const [reviewContent, setReviewContent] = useState(""); // textarea 상태

  // 상품 상세 조회 (/products/{_id})
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/products/${_id}`);
      setProduct(response?.data);
    } catch (err) {
      setError(err);
    }
  };

  // 구매 후기 등록
  const addReview = async content => {
    if (!user?.accessToken) {
      const goLogin = window.confirm(
        "로그인이 필요합니다.\n로그인 페이지로 이동하시겠습니까?",
      );
      console.log("1");
      if (!goLogin) {
        return;
      } else {
        navigate("/user/login");
        return;
      }
    } else if (content?.trim() === "") {
      alert("내용을 입력해주세요");
      return;
    } else if (content?.length <= 1) {
      alert("최소 2글자 이상은 입력하셔야합니다.");
      return;
    }
    try {
      await axios.post(`/replies`, {
        content: content,
        order_id: user?._id,
        image: user?.image,
      });
      setReviewContent(""); // 리뷰 추가 후 textarea 비우기
      fetchProduct();
    } catch (err) {
      setError(err);
    }
  };

  // _id값 변경시 실행
  useEffect(() => {
    fetchProduct(); // 상품 정보 가져오기
    setLoading(false); // 로딩 종료
  }, [_id]);
  const ProductsReviewLength = product?.item?.replies?.length; // 등록된 후기 개수
  const ProductsReview = product?.item?.replies; // 등록된 후기
  // 정상 작동이 안 될 시에 로딩, 에러 표시
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>상품 정보를 불러오는 중입니다...</div>;
  return (
    <main className="container px-24 py-5 bg-white">
      <ProductsDetailInfomation
        user={user}
        product={product}
        setLoading={setLoading}
        setError={setError}
      />
      <hr className="text-gray1 border border-solid my-10"></hr>
      <ProductsExplanation product={product} />
      <hr className="text-gray1 border border-solid my-10"></hr>
      <p className="mb-[40px] section-title">상품 후기</p>
      <p className="mb-[30px] text-[16px] font-normal">
        후기 {ProductsReviewLength} 개
      </p>
      <div name="reviewBox" className="flex flex-col mb-20 gap-y-7">
        <ReviewList user={user} ProductsReview={ProductsReview} />
      </div>
      <AddReview
        reviewContent={reviewContent}
        addReview={addReview}
        setReviewContent={setReviewContent}
      />
    </main>
  );
}
