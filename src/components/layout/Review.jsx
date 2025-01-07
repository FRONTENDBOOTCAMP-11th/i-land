import { useState, useEffect } from "react";
import useAxiosInstance from "@hooks/useAxiosInstance";

export default function Review({ _id, productReview, setProductReview }) {
  const axios = useAxiosInstance();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const formatDate = dateString => {
    const date = new Date(dateString);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };
  const deleteProductReview = async reply_id => {
    try {
      await axios.delete(`/posts/${_id}/replies/${reply_id}`);
      setProductReview(prevReviews =>
        prevReviews.filter(review => review.id !== reply_id),
      );
    } catch (err) {
      setError(err);
    }
  };

  const fetchProductReview = async () => {
    try {
      const response = await axios.get(`/posts/${_id}/replies`);
      setProductReview(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductReview();
  }, [_id]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error.message}</p>;
  if (productReview.item.length === 0) {
    return <p>리뷰가 없습니다.</p>;
  }

  return (
    <div className="flex flex-col gap-y-5">
      {productReview.item.map((review, index) => (
        <div
          key={index}
          className="flex flex-col p-10 border border-solid rounded-lg border-gray1"
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-x-4">
              <img
                className="w-[50px] h-[50px]"
                src={"https://11.fesp.shop/files/final06/" + review.user.image}
                alt="유저 프로필 사진"
              />
              <p className="text-[20px] font-bold">{review.user.name}</p>
            </div>
            <p className="text-[16px]">{formatDate(review.createdAt)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[16px]">{review.content}</p>
            <div>
              <button className="h-[50px] py-[14px] px-9 text-[18px] font-bold border border-solid border-gray2 rounded-lg">
                수정
              </button>
              <button
                className="h-[50px] py-[14px] px-9 text-[18px] font-bold text-white bg-point-red rounded-lg"
                onClick={() => deleteProductReview(review.id)}
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
