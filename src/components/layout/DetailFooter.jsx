import ProductsReview from "@components/layout/ProductsReview";

export default function DetailFooter() {
  return (
    <section name="detailFooter">
      <p className="mb-10 section-title">상품 후기</p>
      <div>
        <p className="mb-7 text-[16px] font-normal">
          후기 {productReview.length} 개
        </p>
        <div name="reviewBox" className="mb-20 flex flex-col gap-y-7">
          <ProductsReview
            _id={_id}
            productReview={productReview}
            setProductReview={setProductReview}
          />
        </div>
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
              onClick={addReview(reviewContent)}
            >
              리뷰 등록
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
