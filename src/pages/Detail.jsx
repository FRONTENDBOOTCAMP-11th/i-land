// import { useState, useEffect } from "react";
import DetailHeader from "@components/layout/DetailHader";
// import useAxiosInstance from "@hooks/useAxiosInstance";
// import useUserStore from "@zustand/userStore";

export default function Detail({_id=1}) {
//   const { user } = useUserStore();
//   const axios = useAxiosInstance();
//   const [product, setProduct] = useState(); // 상품 정보
//   const [userInfo, setUserInfo] = useState(); // 유저 정보
//   const [productReview, setProductReview] = useState([]); // 상품 리뷰
//   const [loading, setLoading] = useState(true); // 로딩
//   const [error, setError] = useState(null); // 에러
//   const [reviewContent, setReviewContent] = useState(""); // textarea 상태


//   // // 현재 유저 정보 가져오기
//   // const fetchUser = async () => {
//   //   try {
//   //     const response = await axios.get(`/users/${user._id}`); // user._id를 통해서 로그인한 유저의 _id 값을 호출
//   //     setUserInfo(response.data.item);
//   //     console.log("가져온 유저정보", userInfo);
//   //   } catch (err) {
//   //     setError(err);
//   //   }
//   // };

//   // // 상품 정보 가져오기
//   // const fetchProduct = async () => {
//   //   try {
//   //     const response = await axios.get(`/products/${_id}`);
//   //     setProduct(response.data.item);
//   //     console.log("가져온 상품 정보", product);
//   //   } catch (err) {
//   //     setError(err);
//   //   }
//   // };

//   // // 상품 후기 가져오기
//   // const fetchProductReview = async () => {
//   //   try {
//   //     const response = await axios.get(`/replies/${_id}`);
//   //     if (response.data.item === 0) {
//   //       console.log("댓글이 없습니다.");
//   //     }
//   //     setProductReview(response);
//   //     console.log("가져온 상품 후기123", productReview.data.item.length);
//   //   } catch (err) {
//   //     setError(err);
//   //   }
//   // };

//   // // 리뷰 추가
//   // const addReview = async content => {
//   //   try {
//   //     const response = await axios.post(`/replies/`, {
//   //       content: content,
//   //       order_id: userInfo._id,
//   //       product_id: product._id,
//   //     });
//   //     setProductReview(prevReviews => {
//   //       return Array.isArray(prevReviews)
//   //         ? [...prevReviews, response.data]
//   //         : [response.data];
//   //     });
//   //     setReviewContent(""); // 리뷰 추가 후 textarea 비우기
//   //   } catch (err) {
//   //     setError(err);
//   //   }
//   // };

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     // await fetchUser(); // 유저 정보 가져오기
//   //     // await fetchProductReview(); // 상품 리뷰 가져오기
//   //     setLoading(false); // 호출이 끝난 후 loading false 설정
//   //   };
//   //   fetchData();
//   // }, [_id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//   if (!product) return <div>상품 정보를 불러오는 중입니다...</div>;

  return (
    <main className="container px-24 py-5 bg-white">
      <DetailHeader _id={_id} />
      <hr className="text-gray1 border border-solid my-10"></hr>

    </main>
  );
}
