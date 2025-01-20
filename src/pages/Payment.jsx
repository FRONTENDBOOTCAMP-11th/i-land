import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";

export default function Payment() {
  const { user } = useUserStore();
  const axios = useAxiosInstance();
  const [products, setProducts] = useState(null);
  const [users, setUsers] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const products_id = queryParams.get("products_id");
  const quantitycount = Number(queryParams.get("quantitycount"));

  const fetchProducts = async () => {
    try {
      const responses = await axios.get(`/products/${products_id}`);
      setProducts(responses.data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`/users/${user._id}`);
      setUsers(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const customer = users?.item;
  const buyProduct = products?.item;
  const totalPrice = buyProduct?.price * quantitycount;

  const requestPay = async () => {
    const response = await window.PortOne.requestPayment({
      storeId: "store-e4038486-8d83-41a5-acf1-844a009e0d94",
      paymentId: "a" + new Date().getTime(),
      orderName: buyProduct?.name,
      totalAmount: totalPrice,
      currency: "KRW",
      channelKey: "channel-key-ebe7daa6-4fe4-41bd-b17d-3495264399b5",
      payMethod: "CARD",
      customer: {
        customerId: customer?.email,
        fullName: customer?.name,
        phoneNumber: customer?.phone,
        email: customer?.email,
      },
      windowType: {
        pc: "IFRAME",
      },
    });
    console.log("response", response);
    // 결제 성공 후 주문 생성
    if (response.code === undefined) {
      try {
        await axios.post(`/orders/`, {
          products: [
            {
              _id: buyProduct._id,
              quantity: quantitycount,
            },
          ],
        });
        alert("구매가 완료되었습니다.");
      } catch (error) {
        console.error("주문 생성 실패:", error);
      }
    } else {
      alert("결제에 실패하였습니다. 다시 시도해 주세요.");
    }
  };
  useEffect(() => {
    // 외부 스크립트 로드
    const script = document.createElement("script");
    script.src = "https://cdn.portone.io/v2/browser-sdk.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, []);

  return (
    <>
      <Helmet>
        <title>상품 결제 - ILAND</title>

        <meta property="og:title" content="상품 결제 - ILAND" />
        <meta
          property="og:description"
          content="ILAND에서 내 취향을 모아보세요."
        />
      </Helmet>
      <div className="container">
        <div className="flex flex-col items-center gap-y-[20px]">
          <div className="flex border border-gray1-[2px] rounded-lg p-[20px] gap-[20px] items-center">
            <img
              className="w-[100px] h-[100px]"
              src={"https://11.fesp.shop" + buyProduct?.mainImages[0]?.path}
              alt="결제할 상품 이미지"
            />
            <div className="flex flex-col gap-y-[10px]">
              <p>{buyProduct?.name}</p>
              <p className="flex justify-end">{buyProduct?.price} 원</p>
              <div className="flex justify-between">
                <p>{quantitycount} 개</p> <p>총 {totalPrice} 원</p>
              </div>
            </div>
          </div>
          <button
            className="w-[400px] h-[60px] mb-[60px] mt-[60px] px-[89px] py-[16px] bg-point-blue text-white rounded-[8px] text-[24px] font-bold"
            onClick={requestPay}
          >
            결제하기
          </button>
        </div>
      </div>
    </>
  );
}
