import CartsBox from "@components/carts/CartsBox";
import CartsDelete from "@components/carts/CartsDelete";
import CartsPayment from "@components/carts/CartsPayment";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useState } from "react";

export default function Carts() {
  const axios = useAxiosInstance();
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const [carts, setCarts] = useState([]); // 장바구니 정보
  const [checkedItems, setCheckedItems] = useState([]); // 선택된 항목의 ID 배열
  const [allChecked, setAllChecked] = useState(false); // 전체 선택 상태
  // 장바구니 상품 수량 증감

  // 체크 상태 변경
  const handleCheckboxChange = id => {
    const newCheckedItems = checkedItems.includes(id)
      ? checkedItems.filter(itemId => itemId !== id) // 체크 해제
      : [...checkedItems, id]; // 체크

    setCheckedItems(newCheckedItems);

    // 전체 선택 상태 업데이트
    setAllChecked(newCheckedItems.length === carts.length);
  };

  // 전체 선택 체크박스 변경
  const handleAllCheckboxChange = () => {
    if (allChecked) {
      setCheckedItems([]); // 전체 체크 해제
    } else {
      setCheckedItems(carts?.item?.map(cartlist => cartlist?._id)); // 전체 체크
    }
    setAllChecked(!allChecked); // 전체 선택 상태 반전
  };

  // 장바구니 목록 조회 - 로그인 (/carts/)
  const fetchCarts = async () => {
    try {
      const response = await axios.get(`/carts/`);
      setCarts(response?.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false); // 로딩 종료
    }
  };
  return (
    <div className="container">
      <CartsDelete
        handleAllCheckboxChange={handleAllCheckboxChange}
        checkedItems={checkedItems}
        allChecked={allChecked}
      />
      <CartsBox
        error={error}
        loading={loading}
        fetchCarts={fetchCarts}
        carts={carts}
        handleCheckboxChange={handleCheckboxChange}
        checkedItems={checkedItems}
      />
      <CartsPayment />
    </div>
  );
}
