import PropTypes from "prop-types";
import { toast } from "react-toastify";

export default function CartsDelete({
  handleAllCheckboxChange,
  allChecked,
  deleteSelectedCarts,
  carts,
}) {
  const handleDelete = () => {
    toast.error(
      ({ closeToast }) => (
        <div className="flex flex-col justify-center">
          <p className="text-center">
            선택한 상품을 장바구니에서 제거하시겠습니까?
          </p>
          <div className="flex justify-center gap-4 mt-3">
            {/* "예" 버튼 */}
            <button
              onClick={() => {
                closeToast(); // 토스트 닫기
                deleteSelectedCarts(); // 선택 삭제 함수 호출
                toast.success("상품이 삭제되었습니다."); // 성공 알림
              }}
              className="px-4 py-1 text-black bg-white border border-gray-300 rounded hover:bg-blue-500 hover:text-white"
            >
              예
            </button>
            {/* "아니오" 버튼 */}
            <button
              onClick={() => {
                closeToast(); // 토스트 닫기
              }}
              className="px-4 py-1 text-black bg-white border border-gray-300 rounded hover:bg-gray-500 hover:text-white"
            >
              아니오
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
      },
    );
  };

  return (
    <section name="cartHeader">
      <h1 className="page-title">장바구니</h1>
      <div className="flex justify-between text-[14px] mb-[60px]">
        {carts.item?.length === 0 ? (
          <p className="text-[16px]">
            총 {carts?.item?.length} 개의 상품이 있습니다.
          </p>
        ) : (
          <>
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
          </>
        )}
      </div>
    </section>
  );
}

CartsDelete.propTypes = {
  handleAllCheckboxChange: PropTypes.func.isRequired,
  allChecked: PropTypes.bool.isRequired,
  deleteSelectedCarts: PropTypes.func.isRequired,
  carts: PropTypes.shape({
    item: PropTypes.array.isRequired,
  }).isRequired,
};
