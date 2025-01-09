import ProductCard from "@components/common/ProductCard";
import PropTypes from "prop-types";

MainProductList.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
};

export default function MainProductList({ label, data }) {
  // 상품의 개수만큼 margin right value 지정
  const marginRightValue = 1000 - 200 * (10 - data?.length);

  // ProductCard 에 props 로 전달
  const productList = data?.map(item => (
    <ProductCard key={item._id} item={item} />
  ));

  return (
    <section className="mb-[70px]">
      <h2 className="section-title">{label}</h2>
      <div className="overflow-x-scroll scrollbar-hide">
        <ul
          className={`grid
            grid-cols-${data?.length <= 5 ? 5 : data?.length}
            gap-x-[25px]
            mr-[-${data?.length > 5 ? marginRightValue : null}px]`}
        >
          {productList}
        </ul>
      </div>
    </section>
  );
}
