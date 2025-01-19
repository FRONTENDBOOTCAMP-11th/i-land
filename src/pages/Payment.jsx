import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";
export default function Payment(products, totalPrice) {
  const { user } = useUserStore();
  const axios = useAxiosInstance();
  const [users, setUsers] = useState(null); // 상품 초기값 null

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`/users/${user._id}`);
      setUsers(response?.data);
    } catch (err) {
      console.log(err);
    }
  };
  const customer = user?.item;
  const payProducts = products?.products?.item;
  console.log(totalPrice);
  const requestPay = () => {
    if (window.PortOne) {
      window.PortOne.requestPayment({
        storeId: "store-e4038486-8d83-41a5-acf1-844a009e0d94", // 실제 storeId 입력
        paymentId: "testm63mk856", // 실제 paymentId 입력
        orderName: payProducts?.name, // 실제 제품 이름 입력
        totalAmount: totalPrice, // 실제 금액 입력
        currency: "KRW",
        channelKey: "channel-key-ebe7daa6-4fe4-41bd-b17d-3495264399b5", // 실제 channelKey 입력
        payMethod: "CARD",
        customer: {
          customerId: customer?.email, // 실제 customerId 입력
          fullName: customer?.name,
          phoneNumber: customer?.phone,
          email: customer?.email,
          address: customer?.address,
        },
        windowType: {
          pc: "IFRAME",
        },
      });
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
      // 클린업: 스크립트 제거 (선택적)
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    fetchUsers();
  }, []);
  return <button onClick={requestPay}>결제하기</button>;
}

Payment.propTypes = {
  products: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
