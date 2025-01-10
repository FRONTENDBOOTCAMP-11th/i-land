import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 추가: React Router

export default function CartsBox({ _id }) {
  const navigate = useNavigate();
  const axios = useAxiosInstance();
  const { user } = useUserStore(); // 로그인 상태인 유저의 정보
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [carts, setCarts] = useState([]); // 장바구니 정보
  const [error, setError] = useState(null); // 에러 상태
  const [checkedItems, setCheckedItems] = useState([]); // 선택된 항목의 ID 배열
  const [allChecked, setAllChecked] = useState(false); // 전체 선택 상태

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

  // 선택된 상품 장바구니에서 제거
  const handleDelete = () => {
    if (checkedItems.length > 0) {
      console.log("선택 삭제가 실행됩니다.", checkedItems);
      // 선택 삭제 로직 추가
    } else {
      console.log("삭제할 항목이 없습니다.");
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

  useEffect(() => {
    fetchCarts(); // 장바구니 정보 가져오기
  }, [_id]);

  if (loading) return <div>Loading...</div>; // 로딩 중일 때
  if (error) return <div>Error: {error.message}</div>; // 에러 발생 시

  return (
    <main>
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
      <section name="cartMain">
        <div className="flex flex-col gap-y-[50px]">
          {carts?.item?.map(cartlist => (
            <div
              key={cartlist._id}
              className="relative h-[282px] p-[40px] flex justify-between border border-solid border-gray2 rounded-[8px]"
            >
              <div className="flex gap-x-[60px]">
                <div>
                  <label className="mb-[20px] flex gap-[10px] items-center text-[14px]">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes(cartlist._id)} // 개별 체크박스 상태 연결
                      onChange={() => handleCheckboxChange(cartlist._id)} // 개별 체크 상태 변경 핸들러 연결
                      className="appearance-none size-5 bg-[url('/assets/icons/checkbox.svg')] checked:bg-[url('/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
                    />
                    선택
                  </label>
                  <img
                    className="w-[150px] h-[150px]"
                    src={
                      "https://11.fesp.shop" + cartlist?.product?.image?.path
                    }
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-y-[14px] self-center">
                  <a href="">
                    <p className="text-gray3 text-[18px] not-italic font-normal">
                      {`${cartlist.name}`}
                    </p>
                  </a>
                  <p className="text-black text-[32px] not-italic font-bold">
                    {`${cartlist.product.name}`}
                  </p>
                  <p className="font-bold text-[24px]">
                    {cartlist.product.price?.toLocaleString()} 원
                  </p>
                </div>
              </div>
              <div className="font-bold items-center text-[18px] flex gap-x-2">
                <button>
                  <img src="/assets/icons/minus.svg" alt="" />
                </button>
                <input
                  className="text-center border border-solid rounded w-7 h-7 border-gray2"
                  type="text"
                  value="1"
                  name="countUp"
                />
                <button>
                  <img src="/assets/icons/plus.svg" alt="" />
                </button>
              </div>
              <button className="absolute right-[40px] top-[40px]">
                <img src="/assets/icons/close.svg" alt="" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
