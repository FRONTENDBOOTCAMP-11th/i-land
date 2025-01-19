import PropTypes from "prop-types";

export default function CartsDelete({
  handleAllCheckboxChange,
  allChecked,
  DeleteSelectedCarts,
}) {
  const handleDelete = () => {
    const deleteCartsConfirm = window.confirm(
      "선택된 상품을 장바구니에서 제거 하시겠습니까?",
    );
    if (!deleteCartsConfirm) return;
    DeleteSelectedCarts(); // 선택 삭제 함수 호출
  };

  return (
    <section name="cartHeader">
      <p className="page-title">장바구니</p>
      <div className="mt-[63px] mb-[43px] flex justify-between text-[14px]">
        <label className="flex gap-[10px] items-center">
          <input
            type="checkbox"
            checked={allChecked} // 전체 선택 상태 연결
            onChange={handleAllCheckboxChange} // 전체 선택 핸들러 연결
            className="appearance-none size-5 bg-[url('/assets/icons/checkbox.svg')] checked:bg-[url('/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
          />
          전체 선택
        </label>
        <button
          className="w-[96px] h-[24px] border border-solid border-gray2 rounded-[8px]"
          onClick={handleDelete} // 삭제 버튼 클릭 핸들러 연결
        >
          선택 삭제
        </button>
      </div>
    </section>
  );
}

CartsDelete.propTypes = {
  handleAllCheckboxChange: PropTypes.func.isRequired,
  allChecked: PropTypes.bool.isRequired,
  DeleteSelectedCarts: PropTypes.func.isRequired,
};
