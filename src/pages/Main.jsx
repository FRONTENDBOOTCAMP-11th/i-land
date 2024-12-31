export default function Main() {
  return (
    <div className="container">
      <section className="aspect-[50/21] border border-gray2 rounded-lg mb-[60px] relative flex place-items-center justify-center">
        <div className="absolute top-0 left-0 flex items-center size-full px-9">
          <button className="mr-auto">
            <img src="/src/assets/icons/chevron-left.svg" />
          </button>
          <div className="px-3 py-1 mt-auto mb-5 border rounded-full border-gray3 text-gray3">
            <span>1</span> / <span>2</span>
          </div>
          <button className="ml-auto">
            <img src="/src/assets/icons/chevron-right.svg" />
          </button>
        </div>
        <h1 className="text-[32px] font-bold w-[288px] mr-[60px] text-point-blue">
          나의 취향을 한 곳에서 모아보세요
        </h1>
        <img
          src="/src/assets/images/favicon-logo.svg"
          className="w-[112px] h-[123px]"
          alt="메인 로고 캐릭터"
        />
      </section>

      <section className="mb-[70px]">
        <h2 className="section-title">카테고리</h2>

        <ul className="grid grid-flow-col grid-cols-6 gap-8">
          <li>
            <a
              href="#"
              className="text-center"
              aria-label="만화/애니메이션 카테고리 상품 리스트"
            >
              <img
                src="/src/assets/icons/category/comics-anime.svg"
                className="size-[140px] border-solid border-4 border-gray1 rounded-[40px] mb-4"
              />
              <p className="text-[18px]">만화/애니메이션</p>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-center"
              aria-label="아이돌 카테고리 상품 리스트"
            >
              <img
                src="/src/assets/icons/category/idol.svg"
                className="size-[140px] border-solid border-4 border-gray1 rounded-[40px] mb-4"
              />
              <p className="text-[18px]">아이돌</p>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-center"
              aria-label="영화/드라마 카테고리 상품 리스트"
            >
              <img
                src="/src/assets/icons/category/movie-drama.svg"
                className="size-[140px] border-solid border-4 border-gray1 rounded-[40px] mb-4"
              />
              <p className="text-[18px]">영화/드라마</p>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-center"
              aria-label="인형/피규어 카테고리 상품 리스트"
            >
              <img
                src="/src/assets/icons/category/dolls-figures.svg"
                className="size-[140px] border-solid border-4 border-gray1 rounded-[40px] mb-4"
              />
              <p className="text-[18px]">인형/피규어</p>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-center"
              aria-label="패션/의류 카테고리 상품 리스트"
            >
              <img
                src="/src/assets/icons/category/fashion-clothing.svg"
                className="size-[140px] border-solid border-4 border-gray1 rounded-[40px] mb-4"
              />
              <p className="text-[18px]">패션/의류</p>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-center"
              aria-label="문구/잡화 카테고리 상품 리스트"
            >
              <img
                src="/src/assets/icons/category/stationaries.svg"
                className="size-[140px] border-solid border-4 border-gray1 rounded-[40px] mb-4"
              />
              <p className="text-[18px]">문구/잡화</p>
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-[70px]">
        <h2 className="section-title">찜한 목록</h2>
        <div className="overflow-x-scroll scrollbar-hide">
          <ul className="grid grid-cols-10 gap-x-[25px] mr-[-1000px]">
            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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
          </ul>
        </div>
      </section>

      <section className="mb-[70px]">
        <h2 className="section-title">인기 상품</h2>
        <div className="overflow-x-scroll scrollbar-hide">
          <ul className="grid grid-cols-10 gap-x-[25px] mr-[-1000px]">
            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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
          </ul>
        </div>
      </section>

      <section className="mb-[70px]">
        <h2 className="section-title">이번주 신상</h2>
        <div className="overflow-x-scroll scrollbar-hide">
          <ul className="grid grid-cols-10 gap-x-[25px] mr-[-1000px]">
            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <div className="flex items-center gap-1 mb-[10px]">
                  <p className="text-[12px] text-gray3 line-clamp-1">
                    상품 판매자 명
                  </p>
                  <img
                    src="/src/assets/icons/chevron-right.svg"
                    className="w-[3px] h-[6px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  상품 이름 최대 두 줄 상품 이름 최대 두 줄
                </h3>
                <p className="mb-[10px]">12,000 원</p>
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
          </ul>
        </div>
      </section>

      <section className="mb-[70px]">
        <h2 className="section-title">인기 판매자</h2>
        <div className="overflow-x-scroll scrollbar-hide">
          <ul className="grid grid-cols-10 gap-x-[25px] mr-[-1000px]">
            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img src="/src/assets/images/iu.png" alt="상품 제목 이미지" />
                  <button
                    type="button"
                    aria-label="상품 찜하기 버튼"
                    className="absolute grid bg-white rounded-full size-7 place-items-center right-2 bottom-2"
                  >
                    <img
                      src="/src/assets/icons/heart-s.svg"
                      className="w-4 h-[14px] hidden"
                    />
                    <img
                      src="/src/assets/icons/heart-fill-s.svg"
                      className="w-4 h-[14px]"
                    />
                  </button>
                </div>
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
