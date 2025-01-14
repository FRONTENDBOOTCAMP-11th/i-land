import PropTypes from "prop-types";
import { useState } from "react"; // useState 추가
import useAxiosInstance from "@hooks/useAxiosInstance";

export default function ReviewList({ user, ProductsReview, fetchProduct }) {
  const axios = useAxiosInstance();
  const formatDate = dateString => {
    const date = new Date(dateString);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  // 구매 후기 수정 (/replies/{_id})
  const patchReview = async (reply_id, content) => {
    try {
      await axios.patch(`/replies/${reply_id}`, {
        content: content,
      });
      fetchProduct();
    } catch (err) {
      console.log(err);
    }
  };

  // 상품 후기 삭제 (/replies/{_id})
  const deleteProductReview = async reply_id => {
    try {
      await axios.delete(`replies/${reply_id}`);
      fetchProduct();
    } catch (err) {
      console.log(err);
    }
  };

  // 수정 상태 관리
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  const handleEditClick = review => {
    setEditingReviewId(review._id); // 수정할 리뷰 ID 설정
    setEditedContent(review.content); // 해당 리뷰 내용 설정
  };

  const handleSave = reviewId => {
    patchReview(reviewId, editedContent); // 수정된 내용으로 패치
    setEditingReviewId(null); // 수정 완료 후 수정 상태 초기화
  };

  const handleCancel = () => {
    setEditingReviewId(null); // 수정 취소
  };

  return (
    <div name="reviewBox" className="flex flex-col mb-20 gap-y-7">
      <div className="flex flex-col gap-y-5">
        {ProductsReview?.map(review => (
          <div
            key={review._id}
            className="flex flex-col p-10 border border-solid rounded-lg border-gray1"
          >
            <div className="flex justify-between mb-5">
              <div className="flex items-center gap-x-4">
                <img
                  className="w-[50px] h-[50px] border-2 border-gray1 rounded-full"
                  src={"https://11.fesp.shop/" + review.user?.image}
                  alt="유저 프로필 사진"
                />
                <p className="text-[20px] font-bold">{review.user?.name}</p>
              </div>
              <p className="text-[16px]">{formatDate(review.createdAt)}</p>
            </div>
            <div className="flex justify-between">
              {editingReviewId === review._id ? (
                <>
                  <textarea
                    className="w-full h-full placeholder-black text-[16px] resize-none outline-none"
                    value={editedContent}
                    onChange={e => setEditedContent(e.target.value)}
                  />
                  <div className="flex gap-[20px]">
                    <button
                      className="w-[105px] h-[50px] py-[14px] px-9 text-[18px] font-bold border border-solid border-gray2 rounded-lg"
                      onClick={() => handleSave(review._id)} // 저장 버튼
                    >
                      저장
                    </button>
                    <button
                      className="w-[105px] h-[50px] py-[14px] px-9 text-[18px] font-bold text-white bg-point-red rounded-lg"
                      onClick={handleCancel} // 취소 버튼
                    >
                      취소
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="w-full h-full placeholder-black text-[16px] resize-none outline-none">
                    {review.content}
                  </p>
                  {user?.accessToken && user._id === review.user?._id && (
                    <div className="flex gap-[20px]">
                      <button
                        className="w-[105px] h-[50px] py-[14px] px-9 text-[18px] font-bold border border-solid border-gray2 rounded-lg"
                        onClick={() => handleEditClick(review)} // 수정 버튼 클릭
                      >
                        수정
                      </button>
                      <button
                        className="w-[105px] h-[50px] py-[14px] px-9 text-[18px] font-bold text-white bg-point-red rounded-lg"
                        onClick={() => deleteProductReview(review._id)}
                      >
                        삭제
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ReviewList.propTypes = {
  user: PropTypes.object.isRequired,
  ProductsReview: PropTypes.array.isRequired,
  fetchProduct: PropTypes.func.isRequired,
};
