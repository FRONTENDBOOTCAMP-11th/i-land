import PropTypes from "prop-types";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useState } from "react";

export default function ReviewList({ user, ProductsReview, _id, setError, deleteProductReview, setProductReview }) {
  const axios = useAxiosInstance();
  const formatDate = dateString => {
    const date = new Date(dateString);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  return (
    <div className="flex flex-col gap-y-5">
      {ProductsReview?.map((review, index) => (
        <div
          key={index}
          className="flex flex-col p-10 border border-solid rounded-lg border-gray1"
        >
          <div className="flex justify-between mb-5">
            <div className="flex items-center gap-x-4">
              <img
                className="w-[50px] h-[50px]  border-2 border-gray1 rounded-full"
                src={"https://11.fesp.shop/" + review.user?.image}
                alt="유저 프로필 사진"
              />
              <p className="text-[20px] font-bold">{review.user?.name}</p>
            </div>
            <p className="text-[16px]">{formatDate(review.createdAt)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[16px]">{review.content}</p>
            {user?.accessToken && user._id === review.user?._id && (
              <div className="flex gap-[20px]">
                <button className="h-[50px] py-[14px] px-9 text-[18px] font-bold border border-solid border-gray2 rounded-lg">
                  수정
                </button>
                <button
                  className="h-[50px] py-[14px] px-9 text-[18px] font-bold text-white bg-point-red rounded-lg"
                  onClick={() => deleteProductReview(review._id)}
                >
                  삭제
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

ReviewList.propTypes = {
  user: PropTypes.object.isRequired,
  ProductsReview: PropTypes.object.isRequired,
};
