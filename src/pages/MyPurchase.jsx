import EmptyState from "@components/common/EmptyState";
import MyPurchaseCard from "@components/myPurchase/myPurchaseCard";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function MyPurchase() {
  const axios = useAxiosInstance();

  // 구매 내역 상태
  const [myPurchase, setMyPurchase] = useState();

  // 구매 내역 조회
  const fetchMyPurchase = async () => {
    try {
      const res = await axios.get("/orders");
      setMyPurchase(res.data.item);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  useEffect(() => {
    fetchMyPurchase();
  }, []);

  const myPurchaseList = myPurchase?.map(item => (
    <MyPurchaseCard key={item._id} data={item} />
  ));

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
          <p>총 {myPurchase?.length}건의 구매 내역이 있습니다</p>
        </section>
        {myPurchase?.length === 0 ? (
          <EmptyState message="구매 내역이 없어요 😭" />
        ) : (
          <ul className="grid grid-flow-row gap-y-[50px] pb-[50px]">
            {myPurchaseList}
          </ul>
        )}
      </div>
    </>
  );
}
