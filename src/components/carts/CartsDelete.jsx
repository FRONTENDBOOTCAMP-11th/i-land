import PropTypes from "prop-types";
import useAxiosInstance from "@hooks/useAxiosInstance"; // axios 인스턴스 가져오기

export default function CartsDelete({
  handleAllCheckboxChange,
  allChecked,
  checkedItems,
  setCarts, // setCarts를 props로 받아야 합니다.
  setLoading,
  setError,
}) {
  const axios = useAxiosInstance(); // axios 인스턴스 생성

  // 선택된 상품 장바구니에서 제거
  const DeleteSelectedCarts = async () => {
    if (checkedItems.length === 0) {
      console.log("삭제할 항목이 없습니다.");
      return;
    }

    setLoading(true); // 삭제 요청 시작 시 로딩 상태 설정
    try {
      await Promise.all(checkedItems.map(id => axios.delete(`/carts/${id}`))); // 여러 개 DELETE 요청
      // 로컬 상태에서 해당 아이템 제거
      setCarts(prevCarts => ({
        ...prevCarts,
        item: prevCarts.item.filter(cart => !checkedItems.includes(cart._id)), // 삭제된 아이템 제외
      }));
    } catch (err) {
      setError(err);
      console.error("선택 삭제 중 오류 발생:", err);
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  const handleDelete = () => {
    console.log("선택 삭제가 실행됩니다.", checkedItems);
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
  checkedItems: PropTypes.array.isRequired, // checkedItems는 필수 배열
  handleAllCheckboxChange: PropTypes.func.isRequired, // 전체 체크박스 핸들러
  allChecked: PropTypes.bool.isRequired, // 전체 선택 상태
  setCarts: PropTypes.func.isRequired, // setCarts 함수
  setLoading: PropTypes.func.isRequired, // setLoading 함수
  setError: PropTypes.func.isRequired, // setError 함수
};
