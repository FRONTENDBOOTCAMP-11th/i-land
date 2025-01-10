import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 추가: React Router

export default function CartsBox({_id}) {
  const navigate = useNavigate();
  const axios = useAxiosInstance();
  const { user } = useUserStore();  // 로그인 상태인 유저의 정보
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [carts, setCarts] = useState([]); // 장바구니 정보
  const [error, setError] = useState(null); // 에러 상태
   
  // 장바구니 정보 가져오기 (로그인 상태)
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

  useEffect(() => {
    fetchCarts(); // 장바구니 정보 가져오기
  }, [_id]);
  console.log("carts", carts);
  if (loading) return <div>Loading...</div>; // 로딩 중일 때
  if (error) return <div>Error: {error.message}</div>; // 에러 발생 시
  return (
    <section name="cartMain">
    <div className="flex flex-col gap-y-[50px]">
      <div className="relative h-[282px] p-[40px] flex justify-between border border-solid border-gray2 rounded-[8px]">
        <div className="flex gap-x-[60px]">
          <div>
            <label className="mb-[20px] flex gap-[10px] items-center text-[14px]">
              <input
                type="checkbox"
                className="appearance-none size-5 bg-[url('/assets/icons/checkbox.svg')] checked:bg-[url('/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
              />
              선택
            </label>
            <img
              className="w-[150px] h-[150px]"
              src="/assets/images/product-image-12.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-[14px] self-center">
            <a href="">
              <p className="text-gray3 text-[18px] not-italic font-normal">
                산리오 공식물이고 싶음 >
              </p>
            </a>
            <p className="text-black text-[32px] not-italic font-bold">
              쿠로미 보온 머그잔
            </p>
            <p className="font-bold text-[24px]">120,000 원</p>
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
    </div>
  </section>
  );
}
