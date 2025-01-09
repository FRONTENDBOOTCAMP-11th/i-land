import useUserStore from "@zustand/userStore";

export default function ProductsReview({productReview}) {
  const { user } = useUserStore();
  const formatDate = dateString => {
    const date = new Date(dateString);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  // // 상품 후기 삭제
  // const deleteProductReview = async reply_id => {
  //   try {
  //     await axios.delete(`/products/${_id}/replies/${reply_id}`, {
  //       headers: { Authorization: `Bearer ${user.accessToken}` }, // 로그인 상태인 유저의 엑세스  토큰
  //     });
  //     setProductReview(prevReviews =>
  //       prevReviews.filter(review => review._id !== reply_id),
  //     );
  //   } catch (err) {
  //     setError(err);
  //   }
  // };

  return (
    <div className="flex flex-col gap-y-5">
      {productReview?.map((review, index) => (
        <div
          key={index}
          className="flex flex-col p-10 border border-solid rounded-lg border-gray1"
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-x-4">
              <img
                className="w-[50px] h-[50px]"
                src={"https://11.fesp.shop/" + review.user?.image}
                alt="유저 프로필 사진"
              />
              <p className="text-[20px] font-bold">{review.user?.name}</p>
            </div>
            <p className="text-[16px]">{formatDate(review.createdAt)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[16px]">{review.content}</p>
            {user?.accessToken && user._id === review.user?._id && (
              <div className="flex gap-[20px]">
                <button className="h-[50px] py-[14px] px-9 text-[18px] font-bold border border-solid border-gray2 rounded-lg">
                  수정
                </button>
                <button
                  className="h-[50px] py-[14px] px-9 text-[18px] font-bold text-white bg-point-red rounded-lg"
                  // onClick={() => deleteProductReview(review._id)}
                >
                  삭제
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
