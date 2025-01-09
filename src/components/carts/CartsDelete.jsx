export default function CartsDelete() {
  return (
    <section name="cartHeader">
      <p className="page-title">장바구니</p>
      <div className="mt-[63px] mb-[43px] flex justify-between text-[14px]">
        <label className="flex gap-[10px] items-center">
          <input
            type="checkbox"
            className="appearance-none size-5 bg-[url('/assets/icons/checkbox.svg')] checked:bg-[url('/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
          />
          전체 선택
        </label>
        <button className="w-[96px] h-[24px] border border-solid border-gray2 rounded-[8px]">
          선택 삭제
        </button>
      </div>
    </section>
  );
}
