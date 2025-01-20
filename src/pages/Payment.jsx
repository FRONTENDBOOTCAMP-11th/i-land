import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";

export default function Payment() {
  const { user } = useUserStore();
  const axios = useAxiosInstance();
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const products_id = queryParams.get("products_id").split(","); // 상품 ID 배열
  const quantitycount = queryParams.get("quantitycount").split(",").map(Number); // 수량 배열로 변환

  const fetchProducts = async () => {
    try {
      const responses = await Promise.all(
        products_id.map(id => axios.get(`/products/${id}`)),
      );
      setProducts(responses.map(response => response.data)); // 배열로 설정
    } catch (err) {
      console.log(err);
    }
  };
  const calculateTotalPrice = () => {
    return products.reduce((total, buyProduct, index) => {
      const quantity = quantitycount[index]; // 선택한 상품의 수량
      return total + buyProduct.item.price * quantity; // 총합 계산
    }, 0);
  };

  const selectTotalPrice = calculateTotalPrice();
  // console.log(selectTotalPrice);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`/users/${user._id}`);
      setUsers(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const customer = users?.item;
  // console.log("products", products);

  const firstProduct = products[0]?.item; // 첫번째 상품
  const orderName = `${firstProduct?.name}\n 외 ${products?.length} 종`;
  // 결제 요청
  const requestPay = async () => {
    const response = await window.PortOne.requestPayment({
      storeId: "store-e4038486-8d83-41a5-acf1-844a009e0d94",
      paymentId: "a" + new Date().getTime(), // 상관없는 더미 값
      orderName: orderName,
      totalAmount: selectTotalPrice,
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
        // 선택된 상품들을 포함한 배열 생성
        const itemsToOrder = products.map((buyProduct, index) => ({
          _id: buyProduct.item._id,
          quantity: quantitycount[index],
        }));
        // 주문 생성 요청
        await axios.post(`/orders/`, {
          products: itemsToOrder, // 모든 상품 정보를 포함한 배열
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
          {products?.map((buyProduct, index) => (
            <div
              key={buyProduct._id}
              className="w-full flex border border-gray1-[2px] rounded-lg p-[20px] gap-[20px] items-center"
            >
              <img
                className="w-[100px] h-[100px]"
                src={
                  "https://11.fesp.shop" + buyProduct?.item?.mainImages[0]?.path
                }
                alt="결제할 상품 이미지"
              />
              <div className="w-full flex flex-col gap-y-[10px]">
                <div className="flex justify-between">
                  <p>{buyProduct?.item?.name}</p>
                  <p className="flex justify-end">
                    {buyProduct?.item?.price} 원
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>{quantitycount[index]} 개</p>
                  <p>총 {buyProduct?.item?.price * quantitycount[index]} 원</p>
                </div>
              </div>
            </div>
          ))}
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
