import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 추가: React Router
import useUserStore from "@zustand/userStore";
import useAxiosInstance from "@hooks/useAxiosInstance";
import ProductsDetailInfomation from "@components/detail/ProductsDetailInfomation";
import ProductsExplanation from "@components/detail/ProductsExplanation";
import AddReview from "@components/detail/AddReview";
import ReviewList from "@components/detail/ReviewList";

export default function Detail() {
  const axios = useAxiosInstance();
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { _id } = useParams(); // URL에서 id 추출
  const [loading, setLoading] = useState(true); // 로딩
  const [error, setError] = useState(null); // 에러
  const [products, setProduct] = useState(null); // 상품 초기값 null
  const [reviewContent, setReviewContent] = useState(""); // textarea 상태
  const ProductsReviewLength = products?.item?.replies?.length; // 등록된 후기 개수
  const ProductsReview = products?.item?.replies; //  등록된 후기 (in products)

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
        product_id: products?.item?._id,
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
  // 정상 작동이 안 될 시에 로딩, 에러 표시
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!products) return <div>상품 정보를 불러오는 중입니다...</div>;
  return (
    <main className="container px-24 py-5 bg-white">
      <ProductsDetailInfomation
        user={user}
        products={products}
        setLoading={setLoading}
        setError={setError}
      />
      <hr className="text-gray1 border border-solid my-10"></hr>
      <ProductsExplanation products={products} />
      <hr className="text-gray1 border border-solid my-10"></hr>
      <p className="mb-[40px] section-title">상품 후기</p>
      <p className="mb-[30px] text-[16px] font-normal">
        후기 {ProductsReviewLength} 개
      </p>
      <ReviewList
        user={user}
        ProductsReview={ProductsReview}
        _id={_id}
        setError={setError}
        fetchProduct={fetchProduct}
        useState={useState}
        setReviewContent={setReviewContent}
      />
      <AddReview
        reviewContent={reviewContent}
        addReview={addReview}
        setReviewContent={setReviewContent}
      />
    </main>
  );
}
