// import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailFooter from "@components/layout/DetailFooter";
import DetailHeader from "@components/layout/DetailHader";
// import useAxiosInstance from "@hooks/useAxiosInstance";
// import useUserStore from "@zustand/userStore";

export default function Detail() {
  const { _id } = useParams(); // URL에서 id 추출
  // const { user } = useUserStore();
  // const axios = useAxiosInstance();

  // // 현재 유저 정보 가져오기
  // const fetchUser = async () => {
  //   try {
  //     const response = await axios.get(`/users/${user._id}`); // user._id를 통해서 로그인한 유저의 _id 값을 호출
  //     setUserInfo(response.data.item);
  //     console.log("가져온 유저정보", userInfo);
  //   } catch (err) {
  //     setError(err);
  //   }
  // };
  return (
    <main className="container px-24 py-5 bg-white">
      <DetailHeader _id={_id} />
      <hr className="text-gray1 border border-solid my-10"></hr>
      <DetailFooter _id={_id} />
    </main>
  );
}
