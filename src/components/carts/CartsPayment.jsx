export default function CartsPayment() {
  return (
    <section name="cartFooter">
      <hr className="text-gray1 border border-solid my-[100px]" />
      <div className="flex flex-col items-center">
        <div className="p-[60px] h-[338px] w-full border border-gray2 border-solid rounded-[8px] flex flex-col gap-y-[40px]">
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

        <button className="w-[400px] h-[60px] mb-[60px] mt-[60px] px-[89px] py-[16px] bg-point-blue text-white rounded-[8px] text-[24px] font-bold">
          선택 상품 결제
        </button>
      </div>
    </section>
  );
}
