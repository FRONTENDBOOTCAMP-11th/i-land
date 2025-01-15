import MainBanner from "@components/main/MainBanner";
import MainProductList from "@components/main/MainProductList";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";
import { useEffect, useState } from "react";
import CategorySection from "@components/common/CategorySection";
import TopSellerList from "@components/main/TopSellerList";

export default function Main() {
  // TODO 1: 로그인 상태가 아닌 경우, 찜한 상품 영역 표시 X
  const { user } = useUserStore();

  // 찜한 상품 state
  const [bookmarkList, setBookmarkList] = useState();

  // 인기 상품 state
  const [topProducts, setTopProducts] = useState();

  // 신상품 state
  const [newProducts, setNewProducts] = useState();

  // 인기 판매자 state
  const [topSellers, setTopSellers] = useState();

  const axios = useAxiosInstance();

  // 사용자 찜한 상품 목록 조회 API(로그인 시에만)
  const getBookmarkedItem = async () => {
    if (user) {
      try {
        const res = await axios.get(`/bookmarks/product`);
        const bookmarkList = res.data.item.map(index => index.product);
        setBookmarkList(bookmarkList);
      } catch (err) {
        console.error(err.response.data.message);
      }
    }
  };

  // 인기 상품(판매 많은 순) 목록 조회 API
  const getTopProducts = async () => {
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
    }
  };

  // 최신 상품(상품 등록 일자 최신순) 목록 조회 API
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

  // 인기 판매자(등록한 상품 조회수 기준) 목록 조회 API
  const getTopSellers = async () => {
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
    }
  };

  useEffect(() => {
    getBookmarkedItem();
    getTopProducts();
    getNewProducts();
    getTopSellers();
  }, []);

  return (
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
  );
}
