import PropTypes from "prop-types";

export default function ProductsExplanation({ products }) {
  return (
    <section name="detailMain">
      <p className="mt-5 section-title">상품 설명</p>
      <div name="productContent">{products?.item?.content}</div>
    </section>
  );
}

ProductsExplanation.propTypes = {
  products: PropTypes.object.isRequired,
};
