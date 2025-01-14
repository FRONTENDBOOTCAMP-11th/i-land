import PropTypes from "prop-types";

export default function ProductsExplanation({ product }) {
  return (
    <section name="detailMain">
      <p className="mt-5 section-title">상품 설명</p>
      <div name="productContent">{product?.item?.content}</div>
    </section>
  );
}

ProductsExplanation.propTypes = {
  product: PropTypes.string.isRequired,
};
