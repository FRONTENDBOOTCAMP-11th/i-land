import PropTypes from "prop-types";

export default function AddReview({
  reviewContent,
  addReview,
  setReviewContent,
}) {
  return (
    <section name="detailFooter">
      <div>
        <div className="flex flex-col gap-y-7">
          <p className="section-title">상품의 후기를 작성하세요</p>
          <div className="p-10 border rounded-lg h-52 border-gray2">
            <textarea
              className="w-full h-full text-[24px] resize-none outline-none"
              placeholder="내용을 입력하세요"
              value={reviewContent}
              onChange={e => setReviewContent(e.target.value)} // textarea 값 변경 시 상태 업데이트
            ></textarea>
          </div>
          <div>
            <button
              className="h-[50px] py-[14px] px-9 text-[18px] text-white bg-point-blue rounded-[8px] font-bold"
              onClick={() => addReview(reviewContent)}
            >
              리뷰 등록
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

AddReview.propTypes = {
  setReviewContent: PropTypes.func.isRequired,
  addReview: PropTypes.func.isRequired,
  reviewContent: PropTypes.string.isRequired,
};
