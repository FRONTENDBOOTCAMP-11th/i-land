import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

import useAxiosInstance from "@hooks/useAxiosInstance";
import useLoading from "@hooks/useLoading";

import CartsBox from "@components/carts/CartsBox";
import CartsDelete from "@components/carts/CartsDelete";
import CartsPayment from "@components/carts/CartsPayment";
import EmptyState from "@components/common/EmptyState";

export default function Carts() {
  const axios = useAxiosInstance();
  const { startLoading, stopLoading } = useLoading();

  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태
  const [carts, setCarts] = useState({ item: [] }); // 장바구니 정보
  const [checkedItems, setCheckedItems] = useState([]); // 선택된 항목의 배열
  const [allChecked, setAllChecked] = useState(true); // 전체 선택 상태
  const [product, setProduct] = useState(null); // 상품 초기값 null

  // 장바구니 상품 수량 수정 (/carts/{_id})
  const patchQuantityPlusCart = async _id => {
    // 현재 장바구니에서 해당 아이템 찾기
    const cartItem = carts.item.find(cart => cart._id === _id);
    if (cartItem) {
      const productNowQuantity =
        cartItem.product?.quantity - cartItem.product?.buyQuantity;
      const newQuantity = cartItem.quantity + 1; // 기존 수량에서 1 증가
      // 서버에 새로운 수량을 요청
      if (newQuantity > productNowQuantity) return;
      startLoading();
      try {
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
      } catch (error) {
        setError(error);
      } finally {
        stopLoading();
      }
    }
  };

  const patchQuantityMinusCart = async _id => {
    // 현재 장바구니에서 해당 아이템 찾기
    const cartItem = carts.item.find(cart => cart._id === _id);
    if (cartItem) {
      const newQuantity = cartItem.quantity - 1; // 기존 수량에서 1 감소
      // 서버에 새로운 수량을 요청
      if (newQuantity == 0) return;
      startLoading();
      try {
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
      } catch (error) {
        console.error(error);
      } finally {
        stopLoading();
      }
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
  const deleteCarts = async _id => {
    toast.error(
      ({ closeToast }) => (
        <div className="flex flex-col">
          <div className="text-center">
            <p>해당 상품을 장바구니에서 제거하시겠습니까?</p>
          </div>
          <div className="flex justify-center gap-4 mt-3">
            {/* 예 버튼 */}
            <button
              onClick={async () => {
                closeToast(); // 토스트 닫기
                startLoading(); // 로딩 시작
                try {
                  await axios.delete(`/carts/${_id}`);
                  // 로컬 상태에서 해당 아이템 제거
                  setCarts(prevCarts => ({
                    ...prevCarts,
                    item: prevCarts.item.filter(cart => cart._id !== _id),
                  }));
                  toast.success("상품이 삭제되었습니다."); // 성공 알림
                } catch (err) {
                  toast.error("상품 삭제에 실패했습니다."); // 실패 알림
                  setError(err);
                } finally {
                  stopLoading(); // 로딩 종료
                }
              }}
              className="px-4 py-1 text-black bg-white border-2 border-white rounded hover:bg-blue-600"
            >
              예
            </button>
            {/* 아니오 버튼 */}
            <button
              onClick={() => {
                closeToast(); // 토스트 닫기
              }}
              className="px-4 py-1 text-black bg-white border-2 border-white rounded hover:bg-gray-600"
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

  // 장바구니 상품 여러 건 삭제 (/carts/)
  const deleteSelectedCarts = async () => {
    startLoading();

    try {
      // 체크된 아이템들의 ID 배열 생성
      await axios.delete(`/carts/`, { data: { carts: checkedItems } }); // 'data'를 사용하여 요청 본문에 전달

      // 로컬 상태에서 해당 아이템 제거
      setCarts(prevCarts => ({
        ...prevCarts,
        item: prevCarts.item.filter(cart => !checkedItems.includes(cart._id)), // 삭제된 아이템 제외
      }));
    } catch (err) {
      setError(err);
    } finally {
      stopLoading();
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

  // 상품 상세 조회 (/products/{_id})
  const fetchProduct = async () => {
    startLoading();
    try {
      const response = await axios.get(`/products/`);
      setProduct(response?.data);
    } catch (err) {
      setError(err);
    } finally {
      stopLoading();
    }
  };
  useEffect(() => {
    fetchProduct();
    fetchCarts(); // 장바구니 정보 가져오기
  }, []);
  useEffect(() => {
    if (carts?.item) {
      setCheckedItems(carts.item.map(cartlist => cartlist._id)); // 모든 체크박스를 선택됨으로 설정
    }
  }, [product]);

  return (
    <>
      <Helmet>
        <title>장바구니 - ILAND</title>

        <meta property="og:title" content="장바구니 - ILAND" />
        <meta
          property="og:description"
          content="ILAND에서 내 취향을 모아보세요."
        />
      </Helmet>
      <div className="container">
        <CartsDelete
          deleteSelectedCarts={deleteSelectedCarts}
          handleAllCheckboxChange={handleAllCheckboxChange}
          allChecked={allChecked}
          carts={carts}
        />
        {carts.item?.length === 0 ? (
          <EmptyState message="장바구니에 상품이 없어요 😭" />
        ) : (
          <>
            <CartsBox
              error={error}
              loading={loading}
              carts={carts?.item}
              product={product}
              checkedItems={checkedItems}
              handleCheckboxChange={handleCheckboxChange}
              patchQuantityPlusCart={patchQuantityPlusCart}
              patchQuantityMinusCart={patchQuantityMinusCart}
              deleteCarts={deleteCarts}
            />
            <CartsPayment
              deleteSelectedCarts={deleteSelectedCarts}
              checkedItems={checkedItems}
              setCarts={setCarts}
              carts={carts.item}
            />
          </>
        )}
      </div>
    </>
  );
}
