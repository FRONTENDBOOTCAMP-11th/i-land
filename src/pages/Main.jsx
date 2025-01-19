import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";
import useLoadingStore from "@zustand/useLoadingStore";

import MainBanner from "@components/main/MainBanner";
import MainProductList from "@components/main/MainProductList";
import TopSellerList from "@components/main/TopSellerList";
import CategorySection from "@components/common/CategorySection";

export default function Main() {
  const axios = useAxiosInstance();
  const { user } = useUserStore();
  const startLoading = useLoadingStore(state => state.startLoading);
  const stopLoading = useLoadingStore(state => state.stopLoading);

  const [bookmarkList, setBookmarkList] = useState(); // 찜한 상품 state
  const [topProducts, setTopProducts] = useState(); // 인기 상품 state
  const [newProducts, setNewProducts] = useState(); // 신상품 state
  const [topSellers, setTopSellers] = useState(); // 인기 판매자 state

  // 사용자 찜한 상품 목록 조회 API(로그인 시에만)
  const getBookmarkedItem = async () => {
    if (user) {
      startLoading();
      try {
        const res = await axios.get(`/bookmarks/product`);
        const bookmarkList = res.data.item.map(index => index.product);
        setBookmarkList(bookmarkList);
      } catch (err) {
        console.error(err.response.data.message);
      } finally {
        stopLoading();
      }
    }
  };

  // 인기 상품(판매 많은 순) 목록 조회 API
  const getTopProducts = async () => {
    startLoading();
    try {
      const res = await axios.get("/products", {
        params: {
          sort: JSON.stringify({ buyQuantity: -1 }),
          limit: 10,
        },
      });
      const topProductList = res.data.item;
      setTopProducts(topProductList);
    } catch (err) {
      console.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  // 최신 상품(상품 등록 일자 최신순) 목록 조회 API
  const getNewProducts = async () => {
    startLoading();
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
    } finally {
      stopLoading();
    }
  };

  // 인기 판매자(등록한 상품 조회수 기준) 목록 조회 API
  const getTopSellers = async () => {
    startLoading();
    try {
      const res = await axios.get("/users", {
        params: {
          sort: JSON.stringify({ totalSales: -1 }),
          limit: 10,
        },
      });
      const topSellerList = res.data.item;
      setTopSellers(topSellerList);
    } catch (err) {
      console.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    getBookmarkedItem();
    getTopProducts();
    getNewProducts();
    getTopSellers();
  }, []);

  return (
    <>
      <Helmet>
        <title>내 취향을 위한 공간 - ILAND</title>

        <meta property="og:title" content="홈 - ILAND" />
        <meta
          property="og:description"
          content="ILAND에서 내 취향을 모아보세요."
        />
      </Helmet>
      <div className="container">
        <MainBanner />

        <CategorySection />

        {/* 찜한 목록 - 로그인 이후 표시 */}
        {user && <MainProductList label="찜한 상품" data={bookmarkList} />}

        {/* 인기 상품 */}
        <MainProductList label="인기 상품" data={topProducts} />

        {/* 이번주 신상 */}
        <MainProductList label="이번주 신상" data={newProducts} />

        {/* 인기 판매자 */}
        <TopSellerList label="인기 판매자" data={topSellers} />
      </div>
    </>
  );
}
