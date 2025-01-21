import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MyPurchase() {
  const axios = useAxiosInstance();

  // 구매 내역 상태
  const [myPurchase, setMyPurchase] = useState();

  // 구매 내역 조회
  const fetchMyPurchase = async () => {
    try {
      const res = await axios.get("/orders");
      console.log(res.data.item);
      setMyPurchase(res.data.item);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  useEffect(() => {
    fetchMyPurchase();
  }, []);

  return (
    <>
      <Helmet>
        <title>구매 내역 - ILAND</title>

        <meta property="og:title" content="구매 내역 - ILAND" />
        <meta
          property="og:description"
          content="ILAND에서 내 취향을 모아보세요."
        />
      </Helmet>
      <div className="container">
        <section className="mb-[50px]">
          <h1 className="page-title">구매 내역</h1>
          <p>총 10개의 찜한 상품이 있습니다</p>
        </section>

        <ul className="grid grid-flow-row gap-y-[50px] pb-[50px]">
          <li
            key=""
            className="p-10 flex justify-between gap-x-[60px] border border-gray2 rounded-lg box-border items-center"
          >
            <div className="flex gap-x-[60px]">
              <Link to={`/products/1`}>
                <img
                  src="https://11.fesp.shop/files/final06/default-profile.png"
                  className="size-[150px]"
                  alt="상품 대표 이미지"
                />
              </Link>
              <div className="grid grid-flow-row gap-y-[14px] items-center">
                <div className="text-[18px] text-gray3 flex gap-x-[10px] items-center">
                  판매자명
                  <img
                    src="/assets/icons/chevron-right.svg"
                    className="w-[6px] h-3"
                  />
                </div>
                <h2 className="text-[32px] font-bold">상품 명</h2>
                <p className="text-[18px]">
                  <span className="text-[24px] font-bold">10,000</span>원
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
