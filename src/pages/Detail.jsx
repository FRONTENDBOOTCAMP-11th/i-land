import React, { useState } from 'react';


export default function Detail() {

  const dummyUser =[
    {
      seller_id:1,
      nickname:"산리오 공식몰이고 싶음"
    },
    {
      seller_id:2,
      nickname:"쿠로미"
    }
  ]

  const dummyItems = [
    {
      product_id: 1,
      seller_id: 1,
      name: "쿠로미 보온 머그잔",
      price: 120000,
      quantity: 1,
      image: "/src/assets/images/kuromi.png",
    },
    {
      product_id: 2,
      seller_id: 2,
      name: "쿠로미 보온 머그잔2",
      price: 60000,
      quantity: 1,
      image: "/src/assets/images/kuromi.png",
    }
  ];




  return (
    <main className="container px-24 py-5 bg-white">
      <section name="detailHeader">
        <div className="flex items-center gap-x-20">
          <div className="relative w-[480px] h-[480px]">
            <img
              className="w-full h-full"
              src={dummyItems[0].image}
              alt=""
            />
            <img
              className="absolute left-[16px] top-[50%]"
              src="/assets/icons/left.svg"
              alt=""
            />
            <img
              className="absolute right-[16px] top-[50%]"
              src="/assets/icons/right.svg"
              alt=""
            />
            <p className="absolute left-[50%] -translate-x-1/2 bottom-[10px] w-[51px] h-[23px] flex items-center justify-center text-[14px] text-gray3 bg-white bg-opacity-70 border border-solid rounded-[26px]">
              {1}/{2}
            </p>
          </div>
          <div className="w-96 flex flex-col gap-y-7">
            <a className="text-[18px] text-gray3 flex gap-x-[10px] items-center" href="">
              <p className="text-gray3 text-[18px] not-italic font-normal">
                { dummyUser[0].nickname }
              </p>
              <img
                src="/src/assets/icons/chevron-right.svg"
                className="w-[6px] h-3"
              />
            </a>
            <p className="text-black text-[32px] not-italic font-bold">
              { dummyItems[0].name }
            </p>
            <p className="font-bold text-[24px]"> { dummyItems[0].price } 원</p>
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
                <button>
                  <img src="/assets/icons/minus.svg" alt="" />
                </button>
                <input
                  className="text-right border border-solid rounded w-7 h-7 border-gray2"
                  type="text"
                  value="1"
                  name="countUp"
                />
                <button>
                  <img src="/assets/icons/plus.svg" alt="" />
                </button>
              </div>
              <p className="text-black text-[24px] font-bold">총 120,000 원</p>
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
        <div className="flex flex-col justify-self-center">
          <img
            className="mt-16 mb-32 w-96 h-96"
            src="/assets/images/product-image-12.png"
            alt=""
          />
        </div>
        <p className="font-bold">
          💜 쿠로미 보온 머그 - 귀여움과 실용성을 동시에! 💜
        </p>
        <br />
        <ul>
          <p className="font-bold">🎀 제품 특징</p>
          <li>
            쿠로미 디자인: 귀여운 쿠로미 캐릭터가 그려진 머그로, 하루를 더
            특별하게 만들어줘요!
          </li>
          <li>
            탁월한 보온/보냉 기능: 고급 스테인리스 소재로 제작되어 음료의 온도를
            오래 유지합니다.
          </li>
          <li>
            휴대성 최고: 350ml의 적당한 용량과 슬림한 디자인으로 언제 어디서나
            간편하게 사용 가능!
          </li>
          <li>
            안전한 사용: BPA-Free 소재와 밀폐 뚜껑으로 내용물이 새지 않아요.
          </li>
        </ul>
        <br />
        <ul>
          <p className="font-bold">🎁 추천 사용</p>
          <li>아침 커피나 차를 담아 출근길 필수템!</li>
          <li>공부할 때나 집에서 여유로운 티타임에 딱!</li>
          <li>캐릭터 굿즈 덕후에게 완벽한 선물 아이템 🎉</li>
        </ul>
        <br />
        <ul>
          <p className="font-bold">📏 제품 정보</p>
          <li>용량: 350ml</li>
          <li>소재: 스테인리스, PP (뚜껑)</li>
          <li>크기: 높이 15cm, 지름 7cm</li>
          <li>
            ✨ 쿠로미와 함께 따뜻한 하루를 시작해보세요! 지금 바로 구매하세요!
            🛒
          </li>
        </ul>
      </section>
      <hr className="text-gray1 border border-solid my-10"></hr>
      <section name="detailFooter">
        <p className="mb-10 section-title">상품 후기</p>
        <div>
          <p className="mb-7 text-[16px] font-normal">후기 {3} 개</p>
          <div className="mb-20 flex flex-col gap-y-7">
            <div className="p-10 flex flex-col border border-gray1 border-solid rounded-lg gap-y-5">
              <div className="flex justify-between">
                <div className="flex items-center gap-x-4">
                  <img src="/assets/images/profile-default.png" alt="" />
                  <p className="text-[20px] font-bold">하찮은쇼핑백</p>
                </div>
                <p className="text-[16px]">2024년 12월 20일</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[16px]">좋은 상품 이네용</p>
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
            <div className="flex flex-col p-10 border border-solid rounded-lg border-gray1 gap-y-5">
              <div className="flex justify-between">
                <div className="flex items-center gap-x-4">
                  <img src="/assets/images/profile-default.png" alt="" />
                  <p className="text-[20px] font-bold">하찮은쇼핑백</p>
                </div>
                <p className="text-[16px]">2024년 12월 20일</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[16px]">좋은 상품 이네용</p>
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
            <div className="flex flex-col p-10 border border-solid rounded-lg border-gray1 gap-y-5">
              <div className="flex justify-between">
                <div className="flex items-center gap-x-4">
                  <img src="/assets/images/profile-default.png" alt="" />
                  <p className="text-[20px] font-bold">하찮은쇼핑백</p>
                </div>
                <p className="text-[16px]">2024년 12월 20일</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[16px]">좋은 상품 이네용</p>
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
