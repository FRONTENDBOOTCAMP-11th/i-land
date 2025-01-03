import React, { useState, useEffect } from 'react';

export default function Review(){
const [productReview, setProductReview] = useState([]); // 상품 리뷰v
  return(
  <div className="flex flex-col p-10 border border-solid rounded-lg border-gray1 gap-y-5">
    <div className="flex justify-between">
      <div className="flex items-center gap-x-4">
        <img className="w-[50px] h-[50px]" src="/assets/images/profile-default.png" alt="" />
        <p className="text-[20px] font-bold">하찮은쇼핑백</p>
      </div>
      <p className="text-[16px]">2024년 12월 20일</p>
      <p>{productReview.item[0].createdAt}</p>
    </div>
    <div className="flex justify-between">
      <p className="text-[16px]">{productReview.item[0].content}</p>
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
  );
}