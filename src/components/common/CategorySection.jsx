import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import useAxiosInstance from "@hooks/useAxiosInstance";

import CategoryCard from "@components/common/CategoryCard";

export default function CategorySection({ onCategorySelect }) {
  const location = useLocation();

  const axios = useAxiosInstance();
  const isMainPage = location.pathname === "/";

  // 카테고리 데이터 서버에서 불러오기
  const { data: categories = [] } = useQuery({
    queryKey: ["productCategory"],
    queryFn: async () => {
      const response = await axios.get("/codes/productCategory");
      if (!response.data || !response.data.item) {
        throw new Error("Invalid response format");
      }
      return response.data.item.productCategory.codes;
    },
  });

  const handleCategoryClick = categoryName => {
    // 부모 컴포넌트로 선택된 카테고리 전달
    if (onCategorySelect) {
      onCategorySelect(categoryName);
    }
  };

  return (
    <section className="mb-[70px]">
      {isMainPage && <h2 className="section-title">카테고리</h2>}
      <ul className="grid grid-flow-col grid-cols-6 gap-8">
        {categories.map(category =>
          isMainPage ? (
            <Link
              key={category.code}
              to={`/products?custom=${encodeURIComponent(
                JSON.stringify({ "extra.category": category.code }),
              )}`}
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
        )}
      </ul>
    </section>
  );
}

CategorySection.propTypes = {
  onCategorySelect: PropTypes.func,
};
