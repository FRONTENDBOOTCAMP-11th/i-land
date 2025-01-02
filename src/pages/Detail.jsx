import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Detail({_id}) {
  const baseURL = "https://11.fesp.shop"

  const [product, setProduct] = useState(null); // 상품 정보
  const [productReview, setProductReview] = useState([]); // 상품 리뷰
  const [loading, setLoading] = useState(true); // 로딩
  const [error, setError] = useState(null); // 에러
  const [count, setCount] = useState(1);  // 상품 수량
  
  const plusValue = () => { setCount(count + 1) };
  const minusValue = () => { setCount(count - 1) };
  const inputNum = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.trim() !== '') {
      setCount(Number(value));
    }
  };
  
  useEffect(() => {
    if (count < 1) {
      alert("1개 이하는 구매할 수 없습니다.");
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get( baseURL + `/products/1`,{
          headers: {
            'Content-Type': 'application/json', // request의 데이터 타입
            accept: 'application/json', // response의 데이터 타입
            'client-id': 'final06',
          }});
        setProduct(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    const fetchProductReview = async () => {
      try {
        const response = await axios.get( baseURL + `/replies/products/2`,{
          headers: {
            'Content-Type': 'application/json', // request의 데이터 타입
            accept: 'application/json', // response의 데이터 타입
            'client-id': 'final06',
          }});
        setProductReview(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductReview();
    fetchProduct();
  }, [_id]);
  




  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  console.log(productReview)
  return (
    <main className="container px-24 py-5 bg-white">
      <section name="detailHeader">
        <div className="flex items-center gap-x-20">
          <div className="relative w-[480px] h-[480px]">
            <img
              className="w-full h-full"
              src={product.item.img}
              alt=""
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
              {1}/{product.item.img}
            </p>
          </div>
          <div className="w-96 flex flex-col gap-y-7">
            <a className="text-[18px] text-gray3 flex gap-x-[10px] items-center" href="">
              <p className="text-gray3 text-[18px] not-italic font-normal">
                {product.item.name}
              </p>
              <img
                src="/src/assets/icons/chevron-right.svg"
                className="w-[6px] h-3"
              />
            </a>
            <p className="text-black text-[32px] not-italic font-bold">
              {product.item.name}
            </p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-[24px]"> {product.item.price.toLocaleString()} 원</p>
              <p className="font-bold text-[18px]">현재 수량 {product.item.quantity} 개</p>
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
                  name="countUp"
                  onChange={inputNum}
                />
                <button onClick={plusValue}>
                  <img src="/assets/icons/plus.svg" alt="" />
                </button>
              </div>
              <p className="text-black text-[24px] font-bold">총 {product.item.price.toLocaleString()} 원</p>
            </div>
            <div className="flex justify-between">
              <button>
                <img src="/assets/icons/heart_full_blue.svg" alt="" />
              </button>
              <button className="h-[50px] py-[14px] px-9 border-2 border-gray2 rounded-lg border-solid box-border">
                <p className="text-[18px] font-bold">장바구니</p>
              </button>
              <button className="h-[50px] py-[14px] px-9 rounded-lg bg-point-blue box-border">
                <p className="text-[18px] text-white font-bold">바로구매</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr className="text-gray1 border border-solid my-10"></hr>
      <section name="detailMain">
        <p className="mt-5 section-title">상품 설명</p>
          <div name="productContent">
            {product.item.content}
          </div>
      </section>
      <hr className="text-gray1 border border-solid my-10"></hr>
      <section name="detailFooter">
        <p className="mb-10 section-title">상품 후기</p>
        <div>
          <p className="mb-7 text-[16px] font-normal">후기 {3} 개</p>
          <div name="reviewBox" className="mb-20 flex flex-col gap-y-7">
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
          </div>
          <div className="flex flex-col gap-y-7">
            <p className="section-title">상품의 후기를 작성하세요</p>
            <div className="p-10 border rounded-lg h-52 border-gray2">
              <textarea
                className="w-full h-full text-[24px] resize-none outline-none"
                placeholder="내용을 입력하세요"
              ></textarea>
            </div>
            <div>
              <button className="h-[50px] py-[14px] px-9 text-[18px] text-white bg-point-blue rounded-[8px] font-bold">
                리뷰 등록
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
  
}
