export default function Carts() {
  return (
    <div className="container">
      <section name="cartHeader">
        <p className="section-title">장바구니</p>
        <div className="mt-[63px] mb-[43px] flex justify-between text-[14px]">
          <label className="flex gap-[10px] items-center">
            <input
              type="checkbox"
              className="appearance-none size-5 bg-[url('/src/assets/icons/checkbox.svg')] checked:bg-[url('/src/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
            />
            전체 선택
          </label>
          <button className="w-[96px] h-[24px] border border-solid border-gray2 rounded-[8px]">
            선택 삭제
          </button>
        </div>
      </section>

      <section name="cartMain">
        <div className="flex flex-col gap-y-[50px]">
          <div className="relative h-[282px] p-[40px] flex justify-between border border-solid border-gray2 rounded-[8px]">
            <div className="flex gap-x-[60px]">
              <div>
                <label className="mb-[20px] flex gap-[10px] items-center text-[14px]">
                  <input
                    type="checkbox"
                    className="appearance-none size-5 bg-[url('/src/assets/icons/checkbox.svg')] checked:bg-[url('/src/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
                  />
                  선택
                </label>
                <img
                  className="w-[150px] h-[150px]"
                  src="/src/assets/images/kuromi.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-[14px] self-center">
                <a href="">
                  <p className="text-gray3 text-[18px] not-italic font-normal">
                    산리오 공식물이고 싶음 >
                  </p>
                </a>
                <p className="text-black text-[32px] not-italic font-bold">
                  쿠로미 보온 머그잔
                </p>
                <p className="font-bold text-[24px]">120,000 원</p>
              </div>
            </div>
            <div className="font-bold items-center text-[18px] flex gap-x-2">
              <button>
                <img src="/src/assets/icons/minus.svg" alt="" />
              </button>
              <input
                className="text-center border border-solid rounded w-7 h-7 border-gray2"
                type="text"
                value="1"
                name="countUp"
              />
              <button>
                <img src="/src/assets/icons/plus.svg" alt="" />
              </button>
            </div>
            <button className="absolute right-[40px] top-[40px]">
              <img src="/src/assets/icons/x.svg" alt="" />
            </button>
          </div>
          <div className="relative h-[282px] p-[40px] flex justify-between border border-solid border-gray2 rounded-[8px]">
            <div className="flex gap-x-[60px]">
              <div>
                <label className="mb-[20px] flex gap-[10px] items-center text-[14px]">
                  <input
                    type="checkbox"
                    className="appearance-none size-5 bg-[url('/src/assets/icons/checkbox.svg')] checked:bg-[url('/src/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
                  />
                  선택
                </label>
                <img
                  className="w-[150px] h-[150px]"
                  src="/src/assets/images/kuromi.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-[14px] self-center">
                <a href="">
                  <p className="text-gray3 text-[18px] not-italic font-normal">
                    산리오 공식물이고 싶음 >
                  </p>
                </a>
                <p className="text-black text-[32px] not-italic font-bold">
                  쿠로미 보온 머그잔
                </p>
                <p className="font-bold text-[24px]">120,000 원</p>
              </div>
            </div>
            <div className="font-bold items-center text-[18px] flex gap-x-2">
              <button>
                <img src="/src/assets/icons/minus.svg" alt="" />
              </button>
              <input
                className="text-center border border-solid rounded w-7 h-7 border-gray2"
                type="text"
                value="1"
                name="countUp"
              />
              <button>
                <img src="/src/assets/icons/plus.svg" alt="" />
              </button>
            </div>
            <button className="absolute right-[40px] top-[40px]">
              <img src="/src/assets/icons/x.svg" alt="" />
            </button>
          </div>
          <div className="relative h-[282px] p-[40px] flex justify-between border border-solid border-gray2 rounded-[8px]">
            <div className="flex gap-x-[60px]">
              <div>
                <label className="mb-[20px] flex gap-[10px] items-center text-[14px]">
                  <input
                    type="checkbox"
                    className="appearance-none size-5 bg-[url('/src/assets/icons/checkbox.svg')] checked:bg-[url('/src/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
                  />
                  선택
                </label>
                <img
                  className="w-[150px] h-[150px]"
                  src="/src/assets/images/kuromi.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-y-[14px] self-center">
                <a href="">
                  <p className="text-gray3 text-[18px] not-italic font-normal">
                    산리오 공식물이고 싶음 >
                  </p>
                </a>
                <p className="text-black text-[32px] not-italic font-bold">
                  쿠로미 보온 머그잔
                </p>
                <p className="font-bold text-[24px]">120,000 원</p>
              </div>
            </div>
            <div className="font-bold items-center text-[18px] flex gap-x-2">
              <button>
                <img src="/src/assets/icons/minus.svg" alt="" />
              </button>
              <input
                className="text-center border border-solid rounded w-7 h-7 border-gray2"
                type="text"
                value="1"
                name="countUp"
              />
              <button>
                <img src="/src/assets/icons/plus.svg" alt="" />
              </button>
            </div>
            <button className="absolute right-[40px] top-[40px]">
              <img src="/src/assets/icons/x.svg" alt="" />
            </button>
          </div>
        </div>
      </section>

      <hr className="text-gray1 border border-solid my-[100px]" />

      <section name="cartFooter">
        <div className="flex flex-col items-center">
          <div className="p-[60px] min-w-[1000px] h-[338px] border border-gray2 border-solid rounded-[8px] flex flex-col gap-y-[40px]">
            <div className="flex justify-between text-[28px] font-bold">
              <p>상품 금액</p>
              <p>120,000 원</p>
            </div>
            <div className="flex justify-between text-[28px] font-bold">
              <p>배송비</p>
              <p>120,000 원</p>
            </div>
            <p className="border border-solid text-gray1"></p>
            <div className="flex justify-between text-[32px] font-bold">
              <p>총 결제 금액</p>
              <p>240,000 원</p>
            </div>
          </div>

          <button className="w-[400px] h-[60px] mt-[60px] px-[89px] py-[16px] bg-point-blue text-white rounded-[8px] text-[24px] font-bold">
            선택 상품 결제
          </button>
        </div>
      </section>
    </div>
  );
}
