import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "@zustand/userStore";
import useAxiosInstance from "@hooks/useAxiosInstance";
import ProductsDetailInfomation from "@components/detail/ProductsDetailInfomation";
import ProductsExplanation from "@components/detail/ProductsExplanation";
import AddReview from "@components/detail/AddReview";
import ReviewList from "@components/detail/ReviewList";
import { Helmet } from "react-helmet-async";

export default function Detail() {
  const axios = useAxiosInstance();
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { _id } = useParams(); // URL에서 id 추출
  const products_id = Number(_id);
  const [loading, setLoading] = useState(true); // 로딩
  const [error, setError] = useState(null); // 에러
  const [products, setProduct] = useState(null); // 상품 초기값 null
  const [like, setLike] = useState(null); // 찜 상태
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
        navigate("/users/login");
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
      console.log(err);
    }
  };
  // 찜 상태 확인
  const checkIfLiked = async () => {
    if (!user.accessToken) return;
    try {
      const response = await axios.get(`/bookmarks/product/${products_id}`);
      if (response.data && response.data.item) {
        setLike(response.data.item._id); // 찜한 상품 ID 저장
      } else {
        setLike(null);
      }
    } catch (err) {
      if (err.response.status !== 404) {
        console.error(err.response.data.message);
      }
    }
  };

  // _id값 변경시 실행
  useEffect(() => {
    // 로그인 상태가 아니라면 찜하기 상태 불러오지 않음
    checkIfLiked();
    fetchProduct(); // 상품 정보 가져오기
    setLoading(false); // 로딩 종료
  }, [_id]);

  // 정상 작동이 안 될 시에 로딩, 에러 표시
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!products) return <div>상품 정보를 불러오는 중입니다...</div>;
  return (
    <>
      <Helmet>
        <title>{products.item.name} - ILAND</title>

        <meta property="og:title" content={`${products.item.name} - ILAND`} />
        <meta
          property="og:description"
          content="ILAND에서 내 취향을 모아보세요."
        />
      </Helmet>
      <main className="container px-24 py-5 bg-white">
        <ProductsDetailInfomation
          user={user}
          products_id={products_id}
          products={products}
          like={like}
          setLike={setLike}
          fetchProduct={fetchProduct}
        />
        <hr className="my-10 border border-solid text-gray1"></hr>
        <ProductsExplanation products={products} />
        <hr className="my-10 border border-solid text-gray1"></hr>
        <p className="mb-[40px] section-title">상품 후기</p>
        <p className="mb-[30px] text-[16px] font-normal">
          후기 {ProductsReviewLength} 개
        </p>
        <ReviewList
          user={user}
          ProductsReview={ProductsReview}
          fetchProduct={fetchProduct}
        />
        <AddReview
          reviewContent={reviewContent}
          addReview={addReview}
          setReviewContent={setReviewContent}
        />
      </main>
    </>
  );
}
