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
  const [checked, setChecked] = useState(false); // 체크 상태

  // 체크 상태 변경
  const handleCheckboxChange = () => {
    const newCheckedState = !checked;
    setChecked(newCheckedState);
    // 체크 상태에 따라 값을 반환
    if (newCheckedState) {
      console.log("체크됨"); // 체크되었을 때 반환할 값
    } else {
      console.log("체크 해제됨"); // 체크 해제되었을 때 반환할 값
    }
  };

  const handleDelete = () => {
    if (checked) {
      // 선택 삭제 로직을 여기에 추가
      console.log("선택 삭제가 실행됩니다.");
    } else {
      console.log("삭제할 항목이 없습니다.");
    }
  };
  // 장바구니 목록 조회 - 로그인 (/carts/)
  const fetchCarts = async () => {
    try {
      const response = await axios.get(`/carts/`, {
        headers: { Authorization: `Bearer ${user?.accessToken}` }, // 로그인 상태인 유저의 엑세스  토큰
      });
      setCarts(response?.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false); // 로딩 종료
    }
  };
  // console.log(carts?.item?.product?.image?.path);

  useEffect(() => {
    fetchCarts(); // 장바구니 정보 가져오기
  }, [_id]);
  console.log("carts", carts);
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
              checked={checked} // 체크박스 상태 연결
              onChange={handleCheckboxChange} // 상태 변경 핸들러 연결
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
          {carts?.item?.map((cartlist, index) => (
            <div
              key={index}
              className="relative h-[282px] p-[40px] flex justify-between border border-solid border-gray2 rounded-[8px]"
            >
              <div className="flex gap-x-[60px]">
                <div>
                  <label className="mb-[20px] flex gap-[10px] items-center text-[14px]">
                    <input
                      type="checkbox"
                      className="appearance-none size-5 bg-[url('/assets/icons/checkbox.svg')] checked:bg-[url('/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
                      checked={checked} // 체크박스 상태 연결
                      onChange={handleCheckboxChange} // 상태 변경 핸들러 연결
                    />
                    선택
                  </label>
                  <img
                    className="w-[150px] h-[150px]"
                    src={"https://11.fesp.shop" + cartlist?.product?.image?.path}
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
