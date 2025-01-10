import { Link, useLocation } from "react-router-dom";

import categories from "../../utils/categories";
import CategoryCard from "@components/common/CategoryCard";

export default function CategorySection() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const handleCategoryClick = categoryName => {
    // TODO: "/products" 일 때 CategoryCard 클릭 시 DB 데이터 가져오기
    console.log(`${categoryName} clicked`);
  };

  return (
    <section className="mb-[70px]">
      {isMainPage && <h2 className="section-title">카테고리</h2>}
      <ul className="grid grid-flow-col grid-cols-6 gap-8">
        {categories.map(category =>
          isMainPage ? (
            <Link key={category.id} to="/products">
              <CategoryCard
                categoryIconSrc={category.src}
                categoryName={category.name}
                categoryText={category.text}
              />
            </Link>
          ) : (
            <CategoryCard
              key={category.id}
              categoryIconSrc={category.src}
              categoryName={category.name}
              categoryText={category.text}
              onClick={handleCategoryClick}
            />
          ),
        )}
      </ul>
    </section>
  );
}
