import CategorySection from "@components/common/CategorySection";

export default function Products() {
  return (
    <div className="container">
      <header>
        <h1 className="page-title">카테고리별 상품 리스트</h1>
      </header>

      <CategorySection />

      <section>
        <h2 className="section-title">만화/애니메이션</h2>
        <div className="flex items-center justify-end mb-[50px]">
          <select
            name="sort"
            className="w-[125px] h-[40px] border border-gray2 rounded-lg px-3 text-[14px] focus:outline-none"
            id="sortOrder"
          >
            <option value="bookmarks">인기순</option>
            <option value="createdAt">최신순</option>
          </select>
        </div>
      </section>

      <section>
        <ul className="grid grid-cols-5 gap-x-[25px] gap-y-[40px]">
          <li className="w-[180px]">
            <a href="#" aria-label="상품 상세 페이지 이동">
              <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                <img
                  src="/assets/images/product-image-3.png"
                  alt="상품 이미지"
                />
                <button
                  type="button"
                  aria-label="상품 찜하기 버튼"
                  className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                >
                  <img
                    src="/assets/icons/heart-sm.svg"
                    className="w-4 h-[14px] hidden"
                  />
                  <img
                    src="/assets/icons/heart-fill-sm.svg"
                    className="w-4 h-[14px]"
                  />
                </button>
              </div>
              <div className="flex items-center gap-1 mb-[10px]">
                <p className="text-[12px] text-gray3 line-clamp-1">
                  지우와 아이들
                </p>
                <img
                  src="/assets/icons/chevron-right.svg"
                  className="w-[3px] h-[6px]"
                />
              </div>
              <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                꼬부기 저금통
              </h3>
              <p className="mb-[10px]">12,000원</p>
              <div className="flex gap-x-[6px] gap-y-1 flex-wrap">
                <div className=" px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                  만화/애니메이션
                </div>
                <div className=" px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                  문구/잡화
                </div>
              </div>
            </a>
          </li>
          <li className="w-[180px]">
            <a href="#" aria-label="상품 상세 페이지 이동">
              <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                <img
                  src="/assets/images/product-image-3.png"
                  alt="상품 이미지"
                />
                <button
                  type="button"
                  aria-label="상품 찜하기 버튼"
                  className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                >
                  <img
                    src="/assets/icons/heart-sm.svg"
                    className="w-4 h-[14px] hidden"
                  />
                  <img
                    src="/assets/icons/heart-fill-sm.svg"
                    className="w-4 h-[14px]"
                  />
                </button>
              </div>
              <div className="flex items-center gap-1 mb-[10px]">
                <p className="text-[12px] text-gray3 line-clamp-1">
                  지우와 아이들
                </p>
                <img
                  src="/assets/icons/chevron-right.svg"
                  className="w-[3px] h-[6px]"
                />
              </div>
              <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                꼬부기 저금통
              </h3>
              <p className="mb-[10px]">12,000원</p>
              <div className="flex gap-x-[6px] gap-y-1 flex-wrap">
                <div className=" px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                  만화/애니메이션
                </div>
                <div className=" px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                  문구/잡화
                </div>
              </div>
            </a>
          </li>
          <li className="w-[180px]">
            <a href="#" aria-label="상품 상세 페이지 이동">
              <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                <img
                  src="/assets/images/product-image-3.png"
                  alt="상품 이미지"
                />
                <button
                  type="button"
                  aria-label="상품 찜하기 버튼"
                  className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                >
                  <img
                    src="/assets/icons/heart-sm.svg"
                    className="w-4 h-[14px] hidden"
                  />
                  <img
                    src="/assets/icons/heart-fill-sm.svg"
                    className="w-4 h-[14px]"
                  />
                </button>
              </div>
              <div className="flex items-center gap-1 mb-[10px]">
                <p className="text-[12px] text-gray3 line-clamp-1">
                  지우와 아이들
                </p>
                <img
                  src="/assets/icons/chevron-right.svg"
                  className="w-[3px] h-[6px]"
                />
              </div>
              <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                꼬부기 저금통
              </h3>
              <p className="mb-[10px]">12,000원</p>
              <div className="flex gap-x-[6px] gap-y-1 flex-wrap">
                <div className=" px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                  만화/애니메이션
                </div>
                <div className=" px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                  문구/잡화
                </div>
              </div>
            </a>
          </li>
          <li className="w-[180px]">
            <a href="#" aria-label="상품 상세 페이지 이동">
              <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                <img
                  src="/assets/images/product-image-3.png"
                  alt="상품 이미지"
                />
                <button
                  type="button"
                  aria-label="상품 찜하기 버튼"
                  className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                >
                  <img
                    src="/assets/icons/heart-sm.svg"
                    className="w-4 h-[14px] hidden"
                  />
                  <img
                    src="/assets/icons/heart-fill-sm.svg"
                    className="w-4 h-[14px]"
                  />
                </button>
              </div>
              <div className="flex items-center gap-1 mb-[10px]">
                <p className="text-[12px] text-gray3 line-clamp-1">
                  지우와 아이들
                </p>
                <img
                  src="/assets/icons/chevron-right.svg"
                  className="w-[3px] h-[6px]"
                />
              </div>
              <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                꼬부기 저금통
              </h3>
              <p className="mb-[10px]">12,000원</p>
              <div className="flex gap-x-[6px] gap-y-1 flex-wrap">
                <div className=" px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                  만화/애니메이션
                </div>
                <div className=" px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                  문구/잡화
                </div>
              </div>
            </a>
          </li>
          <li className="w-[180px]">
            <a href="#" aria-label="상품 상세 페이지 이동">
              <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                <img
                  src="/assets/images/product-image-3.png"
                  alt="상품 이미지"
                />
                <button
                  type="button"
                  aria-label="상품 찜하기 버튼"
                  className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                >
                  <img
                    src="/assets/icons/heart-sm.svg"
                    className="w-4 h-[14px] hidden"
                  />
                  <img
                    src="/assets/icons/heart-fill-sm.svg"
                    className="w-4 h-[14px]"
                  />
                </button>
              </div>
              <div className="flex items-center gap-1 mb-[10px]">
                <p className="text-[12px] text-gray3 line-clamp-1">
                  지우와 아이들
                </p>
                <img
                  src="/assets/icons/chevron-right.svg"
                  className="w-[3px] h-[6px]"
                />
              </div>
              <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                꼬부기 저금통
              </h3>
              <p className="mb-[10px]">12,000원</p>
              <div className="flex gap-x-[6px] gap-y-1 flex-wrap">
                <div className=" px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                  만화/애니메이션
                </div>
                <div className=" px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                  문구/잡화
                </div>
              </div>
            </a>
          </li>
          <li className="w-[180px]">
            <a href="#" aria-label="상품 상세 페이지 이동">
              <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                <img
                  src="/assets/images/product-image-3.png"
                  alt="상품 이미지"
                />
                <button
                  type="button"
                  aria-label="상품 찜하기 버튼"
                  className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                >
                  <img
                    src="/assets/icons/heart-sm.svg"
                    className="w-4 h-[14px] hidden"
                  />
                  <img
                    src="/assets/icons/heart-fill-sm.svg"
                    className="w-4 h-[14px]"
                  />
                </button>
              </div>
              <div className="flex items-center gap-1 mb-[10px]">
                <p className="text-[12px] text-gray3 line-clamp-1">
                  지우와 아이들
                </p>
                <img
                  src="/assets/icons/chevron-right.svg"
                  className="w-[3px] h-[6px]"
                />
              </div>
              <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                꼬부기 저금통
              </h3>
              <p className="mb-[10px]">12,000원</p>
              <div className="flex gap-x-[6px] gap-y-1 flex-wrap">
                <div className=" px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                  만화/애니메이션
                </div>
                <div className=" px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                  문구/잡화
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
