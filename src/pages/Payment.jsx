import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";

export default function Payment() {
  const { user } = useUserStore();
  const axios = useAxiosInstance();
  const [products, setProducts] = useState([]); // 상품 초기값을 배열로 변경
  const [users, setUsers] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const products_id = queryParams.get("products_id").split(","); // ID 배열로 변환
  const quantitycount = queryParams.get("quantitycount").split(",").map(Number); // 수량 배열로 변환

  const fetchProducts = async () => {
    try {
      const responses = await Promise.all(
        products_id.map(id => axios.get(`/products/${id}`)),
      );
      setProducts(responses.map(response => response.data)); // 상품 배열로 설정
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

  // 총 가격 계산
  const calculateTotalPrice = () => {
    return products.reduce((total, product, index) => {
      return total + product.price * quantitycount[index];
    }, 0);
  };
  const requestPay = async () => {
    if (window.PortOne) {
      const totalPrice = calculateTotalPrice(); // 총 가격 계산
      const orderName = products.map(product => product.name).join(", "); // 여러 상품 이름

      // 결제 요청
      window.PortOne.requestPayment({
        storeId: "store-e4038486-8d83-41a5-acf1-844a009e0d94",
        paymentId: "testm63rdhty",
        orderName: orderName,
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

      // 결제 후 주문 생성
      try {
        await axios.post(`/orders/`, {
          products: products.map((product, index) => ({
            _id: parseInt(product._id, 10),
            quantity: quantitycount[index],
          })),
        });
        alert(`구매가 완료되었습니다.`);
      } catch (error) {
        console.error("주문 생성 실패:", error);
      }
    } else {
      console.error("PortOne SDK is not loaded");
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

  return <button onClick={requestPay}>결제하기</button>;
}
