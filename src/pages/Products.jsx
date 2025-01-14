import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import useAxiosInstance from "@hooks/useAxiosInstance";

import CategorySection from "@components/common/CategorySection";
import ProductCard from "@components/common/ProductCard";
import EmptyPage from "@components/common/EmptyPage";

export default function Products() {
  const location = useLocation();
  const navigate = useNavigate();
  const axios = useAxiosInstance();
  const queryClient = useQueryClient();
  const queryParams = new URLSearchParams(location.search);
  const custom = queryParams.get("custom");

  const [selectedCategory, setSelectedCategory] = useState(() => {
    return queryClient.getQueryData("selectedCategory") || "";
  });

  useEffect(() => {
    // URL 파라미터에서 초기 카테고리 값 설정
    try {
      if (custom) {
        const parsedCustom = JSON.parse(custom);
        const category = parsedCustom["extra.category"];
        setSelectedCategory(category);
        queryClient.setQueryData("selectedCategory", category); // React Query 캐시 저장
      }
    } catch (error) {
      console.error("Failed to parse custom parameter: ", error);
    }
  }, [custom, queryClient]);

  // 카테고리 데이터 서버에서 불러오기
  const { data: categories } = useQuery({
    queryKey: ["productCategory"],
    queryFn: async () => {
      const response = await axios.get("/codes/productCategory");
      if (!response.data || !response.data.item) {
        throw new Error("Invalid response format");
      }
      return response.data.item.productCategory.codes;
    },
  });

  // 선택된 카테고리의 value 가져오기
  const categoryValue =
    categories?.find(category => category.code === selectedCategory)?.value ||
    "";

  // 선택된 카테고리 상품 데이터 불러오기
  const { data: products = [] } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: async () => {
      if (!selectedCategory) return [];
      const queryParam = JSON.stringify({ "extra.category": selectedCategory });
      const response = await axios.get(
        `/products?custom=${encodeURIComponent(queryParam)}`,
      );
      return response.data.item || []; // 상품 데이터 배열 반환
    },
    enabled: !!selectedCategory, // 선택된 카테고리가 있을 때만 실행
  });

  const handleCategoryClick = categoryCode => {
    setSelectedCategory(categoryCode);
    queryClient.setQueryData("selectedCategory", categoryCode); // React Query 캐시 저장

    // URL 업데이트
    const queryParam = encodeURIComponent(
      JSON.stringify({ "extra.category": categoryCode }),
    );
    navigate(`/products?custom=${queryParam}`); // URL 변경
  };

  return (
    <div className="container">
      <header>
        <h1 className="page-title">카테고리별 상품 리스트</h1>
      </header>

      <CategorySection
        onCategorySelect={handleCategoryClick}
        selectedCategory={selectedCategory}
      />

      <section>
        <h2 className="section-title">
          {categoryValue ? `${categoryValue}` : "전체 카테고리"}
        </h2>
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
        {products.length === 0 ? (
          <EmptyPage />
        ) : (
          <ul className="grid grid-cols-5 gap-x-[25px] gap-y-[40px]">
            {products.map(product => (
              <ProductCard key={product._id} item={product} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
