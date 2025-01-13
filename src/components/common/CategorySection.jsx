import { Link, useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import useAxiosInstance from "@hooks/useAxiosInstance";

import CategoryCard from "@components/common/CategoryCard";

// URL : https://11.fesp.shop/products?custom={"extra.category": "카테고리"}

export default function CategorySection() {
  const location = useLocation();
  const queryClient = useQueryClient();
  const axios = useAxiosInstance();
  const isMainPage = location.pathname === "/";

  // 카테고리 데이터 서버에서 불러오기
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["productCategory"],
    queryFn: async () => {
      const response = await axios.get("/codes/productCategory");
      if (!response.data || !response.data.item) {
        throw new Error("Invalid response format");
      }
      return response.data.item.productCategory.codes;
    },
  });

  const handleCategoryClick = async categoryName => {
    const { queryKey, url } = getCategoryData(categoryName);

    // 캐시 데이터 확인
    const cachedData = queryClient.getQueryData(queryKey);
    if (cachedData) {
      console.log("Using cached data: ", cachedData);
      return;
    }

    try {
      // 서버에서 데이터 가져오기
      await axios.get(url);
    } catch (error) {
      console.log("Error fetching category data : ", error);
    }
  };

  return (
    <section className="mb-[70px]">
      {isMainPage && <h2 className="section-title">카테고리</h2>}
      <ul className="grid grid-flow-col grid-cols-6 gap-8">
        {isLoading ? (
          <p>Loading categories...</p>
        ) : error ? (
          <p>Error loading categories</p>
        ) : (
          categories.map(category =>
            isMainPage ? (
              <Link
                key={category.code}
                to={`/products?extra={"extra.category":"${category.code}"}`}
              >
                <CategoryCard
                  categoryIconSrc={category.path}
                  categoryName={category.code}
                  categoryText={category.value}
                />
              </Link>
            ) : (
              <CategoryCard
                key={category.code}
                categoryIconSrc={category.path}
                categoryName={category.code}
                categoryText={category.value}
                onClick={() => handleCategoryClick(category.code)}
              />
            ),
          )
        )}
      </ul>
    </section>
  );
}

function getCategoryData(categoryName) {
  const queryKey = ["products", categoryName];
  const url = `/products?custom=${JSON.stringify({ "extra.category": categoryName })}`;
  return { queryKey, url };
}
