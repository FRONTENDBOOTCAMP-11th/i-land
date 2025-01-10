import MainProductList from "@components/MainProductList";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";
import { useEffect, useState } from "react";

export default function Main() {
  // TODO 1: 로그인 상태가 아닌 경우, 찜한 상품 영역 표시 X
  const { user } = useUserStore();

  // 찜한 상품 state
  const [bookmarks, setBookmarks] = useState();

  // 인기 상품 state
  const [topProducts, setTopProducts] = useState();

  // 신상품 state
  const [newProducts, setNewProducts] = useState();

  const axios = useAxiosInstance();

  // 사용자 찜한 상품 목록 조회
  const getBookmarkedItem = async () => {
    try {
      const res = await axios.get(`/bookmarks/product`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      const bookmarkData = res.data;
      let bookmarksList = [];
      for (let i = 0; i < 10; i++) {
        if (!bookmarkData?.item[i]) break;
        bookmarksList.push(bookmarkData?.item[i].product);
      }
      setBookmarks(bookmarksList);
    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  // 인기 상품(찜 많은 순) 목록 조회
  const getTopProducts = async () => {
    try {
      const res = await axios.get("/products", {
        params: {
          sort: JSON.stringify({ bookmarks: -1 }),
          limit: 10,
        },
      });
      const topProductList = res.data.item;
      setTopProducts(topProductList);
    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  // 최신 상품(날짜 최근 순) 목록 조회
  const getNewProducts = async () => {
    try {
      const res = await axios.get("/products", {
        params: {
          sort: JSON.stringify({ createdAt: -1 }),
          limit: 10,
        },
      });
      const newProductList = res.data.item;
      setNewProducts(newProductList);
    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  useEffect(() => {
    getBookmarkedItem();
    getTopProducts();
    getNewProducts();
  }, []);

  return (
    <div className="container">
      <section className="aspect-[50/21] border border-gray2 rounded-lg mb-[60px] relative flex place-items-center justify-center">
        <div className="absolute top-0 left-0 flex items-center size-full px-9">
          <button className="mr-auto">
            <img src="/assets/icons/chevron-left.svg" />
          </button>
          <div className="px-3 py-1 mt-auto mb-5 border rounded-full border-gray3 text-gray3">
            <span>1</span> / <span>1</span>
          </div>
          <button className="ml-auto">
            <img src="/assets/icons/chevron-right.svg" />
          </button>
        </div>
        <h1 className="text-[32px] font-bold w-[288px] mr-[60px] text-point-blue">
          나의 취향을 한 곳에서 모아보세요
        </h1>
        <img
          src="/assets/logos/logo-favicon.svg"
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
                src="/assets/icons/category/comics-anime.svg"
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
                src="/assets/icons/category/idol.svg"
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
                src="/assets/icons/category/movie-drama.svg"
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
                src="/assets/icons/category/dolls-figures.svg"
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
                src="/assets/icons/category/fashion-clothing.svg"
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
                src="/assets/icons/category/stationaries.svg"
                className="size-[140px] border-solid border-4 border-gray1 rounded-[40px] mb-4"
              />
              <p className="text-[18px]">문구/잡화</p>
            </a>
          </li>
        </ul>
      </section>

      {user && <MainProductList label="찜한 목록" data={bookmarks} />}
      <MainProductList label="인기 상품" data={topProducts} />
      <MainProductList label="이번주 신상" data={newProducts} />
      {/* <MainProductList label="인기 판매자" data={products} /> */}

      <section className="mb-[70px]">
        <h2 className="section-title">인기 판매자</h2>
        <div className="overflow-x-scroll scrollbar-hide">
          <ul className="grid grid-cols-10 gap-x-[25px] mr-[-1000px]">
            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img
                    src="/assets/images/product-image-12.png"
                    alt="상품 제목 이미지"
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
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img
                    src="/assets/images/product-image-12.png"
                    alt="상품 제목 이미지"
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
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img
                    src="/assets/images/product-image-12.png"
                    alt="상품 제목 이미지"
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
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img
                    src="/assets/images/product-image-12.png"
                    alt="상품 제목 이미지"
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
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img
                    src="/assets/images/product-image-12.png"
                    alt="상품 제목 이미지"
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
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img
                    src="/assets/images/product-image-12.png"
                    alt="상품 제목 이미지"
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
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img
                    src="/assets/images/product-image-12.png"
                    alt="상품 제목 이미지"
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
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img
                    src="/assets/images/product-image-12.png"
                    alt="상품 제목 이미지"
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
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img
                    src="/assets/images/product-image-12.png"
                    alt="상품 제목 이미지"
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
                <h3 className="text-[18px] font-bold mb-3 leading-normal line-clamp-2">
                  판매자 닉네임(이름)
                </h3>
                <p className="mb-[10px]">총 판매 횟수 1,999 건</p>
              </a>
            </li>

            <li className="w-[180px]">
              <a href="#" aria-label="상품 페이지로 이동">
                <div className="relative aspect-[180/180] rounded-[8px] border border-gray3 mb-3 overflow-hidden">
                  <img
                    src="/assets/images/product-image-12.png"
                    alt="상품 제목 이미지"
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
