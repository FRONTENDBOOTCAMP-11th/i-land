import CartEmpty from "@components/carts/CartsEmpty";
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
  const [checkedItems, setCheckedItems] = useState([]); // 선택된 항목의 배열
  const [allChecked, setAllChecked] = useState(true); // 전체 선택 상태

  // 장바구니 상품 수량 수정 (/carts/{_id})
  const patchQuantityPlusCart = async _id => {
    // 현재 장바구니에서 해당 아이템 찾기
    const cartItem = carts.item.find(cart => cart._id === _id);
    if (cartItem) {
      const productNowQuantity =
        cartItem.product?.quantity - cartItem.product?.buyQuantity;
      const newQuantity = cartItem.quantity + 1; // 기존 수량에서 1 증가
      // 서버에 새로운 수량을 요청
      if (newQuantity > productNowQuantity) {
        return;
      }
      await axios.patch(`/carts/${_id}`, {
        quantity: newQuantity, // 증가된 수량 전송
      });
      // 로컬 상태 업데이트
      setCarts(prevCarts => ({
        ...prevCarts, // 기존 상태를 복사
        item: prevCarts?.item.map(
          cart =>
            cart._id === _id ? { ...cart, quantity: newQuantity } : cart, // 업데이트된 수량 반영
        ),
      }));
    }
  };
  const patchQuantityMinusCart = async _id => {
    // 현재 장바구니에서 해당 아이템 찾기
    const cartItem = carts.item.find(cart => cart._id === _id);
    if (cartItem) {
      const newQuantity = cartItem.quantity - 1; // 기존 수량에서 1 감소
      // 서버에 새로운 수량을 요청
      if (newQuantity == 0) {
        return;
      }
      await axios.patch(`/carts/${_id}`, {
        quantity: newQuantity, // 감소된 수량 전송
      });
      // 로컬 상태 업데이트
      setCarts(prevCarts => ({
        ...prevCarts, // 기존 상태를 복사
        item: prevCarts?.item.map(
          cart =>
            cart._id === _id ? { ...cart, quantity: newQuantity } : cart, // 업데이트된 수량 반영
        ),
      }));
    }
  };

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
  // 장바구니 상품 한건 삭제 (/carts/{_id})
  const DeleteCarts = async _id => {
    setLoading(true); // 삭제 요청 시작 시 로딩 상태 설정
    try {
      await axios.delete(`/carts/${_id}`);
      // 로컬 상태에서 해당 아이템 제거
      setCarts(prevCarts => ({
        ...prevCarts,
        item: prevCarts.item.filter(cart => cart._id !== _id), // 삭제된 아이템 제외
      }));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false); // 로딩 종료
    }
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
        setCarts={setCarts}
        setError={setError}
        setLoading={setLoading}
        setCheckedItems={setCheckedItems}
        handleAllCheckboxChange={handleAllCheckboxChange}
        checkedItems={checkedItems}
        allChecked={allChecked}
      />
      {carts.item?.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <CartsBox
            error={error}
            loading={loading}
            setError={setError}
            setLoading={setLoading}
            setCheckedItems={setCheckedItems}
            fetchCarts={fetchCarts}
            carts={carts}
            handleCheckboxChange={handleCheckboxChange}
            checkedItems={checkedItems}
            patchQuantityPlusCart={patchQuantityPlusCart}
            patchQuantityMinusCart={patchQuantityMinusCart}
            DeleteCarts={DeleteCarts}
          />
          <CartsPayment
            checkedItems={checkedItems}
            setCarts={setCarts}
            carts={carts}
          />
        </>
      )}
    </div>
  );
}
