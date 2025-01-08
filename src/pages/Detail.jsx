import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Review from "@components/layout/Review";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";

export default function Detail({ _id=1 }) {
  const { user } = useUserStore();
  const axios = useAxiosInstance();
  const [product, setProduct] = useState(); // 상품 정보
  const [userInfo, setUserInfo] = useState(); // 유저 정보
  const [productReview, setProductReview] = useState([]); // 상품 리뷰
  const [loading, setLoading] = useState(true); // 로딩
  const [error, setError] = useState(null); // 에러
  const [count, setCount] = useState(1); // 상품 수량
  const [reviewContent, setReviewContent] = useState(""); // textarea 상태

  const plusValue = () => {
    if (count < product.item.quantity - product.item.buyQuantity) {
      setCount(count + 1);
    }
  };
  const minusValue = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const inputNum = event => {
    const value = event.target.value;
    if (!isNaN(value) && value.trim() !== "") {
      setCount(Number(value));
    }
  };

  // 현재 유저 정보 가져오기
  const fetchUser = async () => {
    try {
      const response = await axios.get(`/users/${user._id}`); // user._id를 통해서 로그인한 유저의 _id 값을 호출
      setUserInfo(response.data.item);
      console.log("가져온 유저정보", userInfo);
    } catch (err) {
      setError(err);
    }
  };

  // 상품 정보 가져오기
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/products/${_id}`);
      setProduct(response.data.item);
      console.log("가져온 상품 정보", product);
    } catch (err) {
      setError(err);
    }
  };

  // 상품 후기 가져오기
  const fetchProductReview = async () => {
    try {
      const response = await axios.get(`/replies/${_id}`);
      if (response.data === 0) {
        console.log("댓글이 없습니다.");
      }
      console.log("가져온 상품 후기", response.data);
      setProductReview(response.data.item);
    } catch (err) {
      setError(err);
    }
  };

  // 리뷰 추가
  const addReview = async content => {
    try {
      const response = await axios.post(
        `/replies/`,
        {
          content: content,
          order_id: userInfo._id,
          product_id: product._id,
        },
        {
          headers: { Authorization: `Bearer ${user.accessToken}` },
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

  useEffect(() => {
    const fetchData = async () => {
      await fetchProduct(); // 상품 정보 가져오기
      await fetchProductReview(); // 상품 리뷰 가져오기
      await fetchUser(); // 유저 정보 가져오기
      setLoading(false); // 호출이 끝난 후 loading false 설정
    };
    fetchData();
  }, [_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>상품 정보를 불러오는 중입니다...</div>;

  return (
    <main className="container px-24 py-5 bg-white">
      <section name="detailHeader">
        <div className="flex items-center gap-x-20">
          <div className="relative w-[480px] h-[480px]">
            <img
              className="w-full h-full"
              src={"https://11.fesp.shop" + product.mainImages[0].path}
              alt="상품 이미지"
            />
            <button>
              <img
                className="absolute left-[16px] top-[50%]"
                src="/assets/icons/left.svg"
                alt=""
              />
            </button>
            <button>
              <img
                className="absolute right-[16px] top-[50%]"
                src="/assets/icons/right.svg"
                alt=""
              />
            </button>
            <p className="absolute left-[50%] -translate-x-1/2 bottom-[10px] w-[51px] h-[23px] flex items-center justify-center text-[14px] text-gray3 bg-white bg-opacity-70 border border-solid rounded-[26px]">
              {1}/{product.mainImages.length}
            </p>
          </div>
          <div className="w-96 flex flex-col gap-y-7">
            <a
              className="text-[18px]  text-gray3 flex gap-x-[10px] items-center"
              href=""
            >
              <p className="text-gray3 text-[18px] not-italic font-normal">
                {product.name}
              </p>
              <img
                src="/src/assets/icons/chevron-right.svg"
                className="w-[6px] h-3"
              />
            </a>
            <p className="text-black text-[32px] not-italic font-bold">
              {product.name}
            </p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-[24px]">
                {product.price.toLocaleString()} 원
              </p>
              <p className="font-bold text-[18px]">
                현재 수량 {product.quantity - product.buyQuantity} 개
              </p>
            </div>
            <select
              className="w-100 h-10 px-3 text-[14px] not-italic border border-solid border-gray2 rounded-lg"
              name="productOption"
              id=""
            >
              <option value="">상품 옵션을 선택해 주세요</option>
              <option value="">선택1</option>
              <option value="">선택2</option>
              <option value="">선택3</option>
            </select>
            <div className="flex justify-between">
              <div className="font-bold items-center text-[18px] flex gap-x-2">
                <button onClick={minusValue}>
                  <img src="/assets/icons/minus.svg" alt="" />
                </button>
                <input
                  className="text-right border border-solid rounded w-7 h-7 border-gray2"
                  type="text"
                  value={count}
                  min="1"
                  max={product.quantity - product.buyQuantity}
                  name="countUp"
                  onChange={inputNum}
                  readOnly={true}
                />
                <button onClick={plusValue}>
                  <img src="/assets/icons/plus.svg" alt="" />
                </button>
              </div>
              <p className="text-black text-[24px] font-bold">
                총 {(count * product.price).toLocaleString()} 원
              </p>
            </div>
            <div className="flex justify-between">
              <Link to="/bookmarks">
                <button>
                  <img src="/assets/icons/heart_full_blue.svg" alt="" />
                </button>
              </Link>
              <Link to="/carts">
                <button className="h-[50px] py-[14px] px-9 border-2 border-gray2 rounded-lg border-solid box-border">
                  <p className="text-[18px] font-bold">장바구니</p>
                </button>
              </Link>
              <Link>
                <button className="h-[50px] py-[14px] px-9 rounded-lg bg-point-blue box-border">
                  <p className="text-[18px] text-white font-bold">바로구매</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <hr className="text-gray1 border border-solid my-10"></hr>
      <section name="detailMain">
        <p className="mt-5 section-title">상품 설명</p>
        <div name="productContent">{product.content}</div>
      </section>
      <hr className="text-gray1 border border-solid my-10"></hr>
      <section name="detailFooter">
        <p className="mb-10 section-title">상품 후기</p>
        <div>
          <p className="mb-7 text-[16px] font-normal">
            후기 {productReview.length} 개
          </p>
          <div name="reviewBox" className="mb-20 flex flex-col gap-y-7">
            <Review
              _id={_id}
              productReview={productReview}
              setProductReview={setProductReview}
            />
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
                onClick={addReview(reviewContent)}
              >
                리뷰 등록
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
