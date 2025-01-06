import React, { useState, useEffect } from 'react';
import useAxiosInstance from '@hooks/useAxiosInstance';

export default function Review({_id }) {
  const baseURL = "https://11.fesp.shop";
  const axios = useAxiosInstance();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productReview, setProductReview] = useState([]); // 상품 리뷰
  const [deleteProductReview, setDeleteProductReview] = useState([]); // 상품 리뷰 삭제
  const [patchProductReview, setPatchProductReview] = useState([]); // 상품 리뷰 수정정
  const formatDate = (dateString) => {  // 날짜 포맷팅 함수
    const date = new Date(dateString);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const DeleteProductReview = async () => {   // 상품 리뷰 삭제
    try {
      const response = await axios.delete(`/posts/${_id}/replies/${reply_id}`);
      setDeleteProductReview(response.data);
      console.log(1);
    } catch (err) {
      setError(err);
    }
  };

  const PatchProductReview = async () => {  // 상품 리뷰 수정
    try {
      const response = await axios.fetch(`/posts/${_id}/replies/${reply_id}`);
      setPatchProductReview(response.data);
      console.log(1);
    } catch (err) {
      setError(err);
    }
  };
  
  const fetchProductReview = async () => {  // 상품 후기 가져오기
    try {
      const response = await axios.get(`/posts/${_id}/replies`);
      setProductReview(response.data);
    } catch (err) {
      setError(err);
    }
  };


    
  console.log(deleteProductReview);
  

    useEffect(() => {
      const fetchData = async () => {
        fetchProductReview();
        setLoading(false); // 두 호출이 끝난 후 loading false 설정
      };
      fetchData();
  }, [_id]);


  // 로딩 중일 때
  if (loading) return <p>로딩 중...</p>;
  // 에러 발생 시
  if (error) return <p>오류 발생: {error.message}</p>;
  // productReview가 비어 있는지 확인
  if (!productReview.item || productReview.item.length === 0) {
    return <p>리뷰가 없습니다.</p>;
  }

  return (
    <div className="flex flex-col gap-y-5">
      {productReview.item.map((review, index) => (
        <div key={index} className="flex flex-col p-10 border border-solid rounded-lg border-gray1">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-4">
              <img className="w-[50px] h-[50px]" src ={ baseURL + "/files/final06/" + review.user.image} alt="유저 프로필 사진" />
              <p className="text-[20px] font-bold">{review.user.name}</p>
            </div>
            <p className="text-[16px]">{formatDate(review.createdAt)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[16px]">{review.content}</p>
            <div>
              <button
               className="h-[50px] py-[14px] px-9 text-[18px] font-bold border border-solid border-gray2 rounded-lg"
               onClick={PatchProductReview}
               >
                수정
              </button>
              <button
               className="h-[50px] py-[14px] px-9 text-[18px] font-bold text-white bg-point-red rounded-lg"
               onClick={DeleteProductReview}
               >
                삭제
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
