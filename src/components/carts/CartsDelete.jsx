import PropTypes from "prop-types";

export default function CartsDelete({
  handleAllCheckboxChange,
  allChecked,
  checkedItems,
}) {
  // 선택된 상품 장바구니에서 제거
  const handleDelete = () => {
    if (checkedItems.length > 0) {
      console.log("선택 삭제가 실행됩니다.", checkedItems);
      // 선택 삭제 로직 추가
    } else {
      console.log("삭제한 항목이 없습니다.");
    }
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
  checkedItems: PropTypes.array.isRequired, // checkedItems는 필수 배열
  handleAllCheckboxChange: PropTypes.func.isRequired, // 전체 체크박스 핸들러
  allChecked: PropTypes.bool.isRequired, // 전체 선택 상태
};
