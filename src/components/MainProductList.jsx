import ProductCard from "@components/common/ProductCard";
import PropTypes from "prop-types";

MainProductList.propTypes = {
  label: PropTypes.string,
  data: PropTypes.shape({
    product: PropTypes.array,
  }),
};

export default function MainProductList({ label, data }) {
  // 최대 10개 상품만 출력
  let bookmarks = [];
  for (let i = 0; i < 10; i++) {
    if (!data?.product[i]) break;
    bookmarks.push(data?.product[i]);
  }

  // 상품의 개수만큼 margin right value 지정
  const marginRightValue = 1000 - 200 * (10 - bookmarks.length);

  // ProductCard 에 props 로 전달
  const productList = bookmarks.map(item => (
    <ProductCard key={item._id} item={item} />
  ));

  return (
    <section className="mb-[70px]">
      <h2 className="section-title">{label}</h2>
      <div className="overflow-x-scroll scrollbar-hide">
        <ul
          className={`grid
            grid-cols-${bookmarks.length <= 5 ? 5 : bookmarks.length}
            gap-x-[25px]
            mr-[-${bookmarks.length > 5 ? marginRightValue : null}px]`}
        >
          {productList}
        </ul>
      </div>
    </section>
  );
}
