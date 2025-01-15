import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

import SearchNoResult from "@components/search/SearchNoResult";
import { useSearchParams } from "react-router-dom";

SearchResults.propTypes = {
  keyword: PropTypes.array.isRequired,
};

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || ""; // URL에서 keyword 가져오기

  return (
    <>
      <Helmet>
        <title>{keyword} 검색 결과 - ILAND</title>

        <meta property="og:title" content={`${keyword} 검색 결과 - ILAND`} />
        <meta
          property="og:description"
          content="ILAND에서 내 취향을 모아보세요."
        />
      </Helmet>
      <div className="container">
        <header>
          <h2 className="page-title">검색 결과</h2>
        </header>

        <div className="flex items-center justify-between mb-[50px]">
          <span>총 1개의 결과가 있습니다.</span>

          <select
            name="sort"
            className="w-[125px] h-[40px] border border-gray2 rounded-lg px-3 text-[14px] focus:outline-none"
            id="sortOrder"
          >
            <option value="bookmarks">인기순</option>
            <option value="createdAt">최신순</option>
          </select>
        </div>

        {keyword.length === 0 ? (
          <SearchNoResult />
        ) : (
          <ul className="grid grid-cols-5 gap-x-[25px]">
            {Array.from({ length: 15 }).map((_, index) => (
              <li className="w-[180px] mb-[40px]" key={index}>
                <a href="#" aria-label="상품 상세 페이지 이동">
                  <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                    <img
                      src="/assets/images/product-image-12.png"
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
                      상품 판매자 명
                    </p>
                    <img
                      src="/assets/icons/chevron-right.svg"
                      className="w-[3px] h-[6px]"
                    />
                  </div>
                  <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                    상품 이름 최대 두 줄 상품 이름 최대 두 줄
                  </h3>
                  <p className="mb-[10px]">12,000원</p>
                  <div className="flex gap-x-[6px] gap-y-1 flex-wrap">
                    <div className="px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                      만화/애니메이션
                    </div>
                    <div className="px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                      만화/애니메이션
                    </div>
                    <div className="px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                      만화/애니메이션
                    </div>
                    <div className="px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
                      만화/애니메이션
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
