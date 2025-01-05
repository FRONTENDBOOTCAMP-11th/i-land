import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Review() {
  const baseURL = "https://11.fesp.shop";
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productReview, setProductReview] = useState([]); // 상품 리뷰
  const [submitReview, setSubmitReview] = useState([]); // 상품 리뷰 등록

  useEffect(() => {
    const fetchProductReview = async () => {  // 상품 후기 가져오기
      try {
        const response = await axios.get(baseURL + `/posts/1/replies`, {
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            'client-id': 'final06',
          }
        });
        setProductReview(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductReview();
  }, []);

  const addReview = async () => {
    try {
      const response = await axios.post(baseURL + `/posts/1/replies`, {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          'client-id': 'final06',
        }
      });
      setSubmitReview(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

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
            <p className="text-[16px]">{formatDate(review.createdAt)}</p> {/* 포맷된 날짜 출력 */}
          </div>
          <div className="flex justify-between">
            <p className="text-[16px]">{review.content}</p>
            <div>
              <button className="h-[50px] py-[14px] px-9 text-[18px] font-bold border border-solid border-gray2 rounded-lg">
                수정
              </button>
              <button className="h-[50px] py-[14px] px-9 text-[18px] font-bold text-white bg-point-red rounded-lg">
                삭제
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
