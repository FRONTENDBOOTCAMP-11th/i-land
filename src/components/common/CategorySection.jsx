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
      try {
        const response = await axios.get("/codes/productCategory");
        return response.data.item.productCategory.codes;
      } catch (err) {
        console.error("Error fetching product categories:", err);
        throw new Error("Failed to fetch product categories");
      }
    },
  });

  if (isLoading) {
    console.log("Loading categories...");
  } else {
    console.log("Categories Data:", categories);
  }
  const handleCategoryClick = async categoryName => {
    const queryKey = getCategoryQueryKey(categoryName);
    const url = getCategoryUrl(categoryName);

    const cachedData = queryClient.getQueryData(queryKey);
    if (cachedData) {
      console.log("Using cached data: ", cachedData);
      return;
    }

    try {
      console.log("url", url);
      const response = await axios.get(url);

      const data = response.data;

      console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  console.log(categories);

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
              <Link key={category.code} to="/products">
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

function getCategoryQueryKey(categoryName) {
  return ["products", categoryName];
}

function getCategoryUrl(categoryName) {
  return `/products?custom=${JSON.stringify({ "extra.category": categoryName })}`;
}
