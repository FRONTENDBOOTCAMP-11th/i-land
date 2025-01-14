import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function ProductsExplanation({ products }) {
  return (
    <section name="detailMain">
      <p className="mt-5 section-title">상품 설명</p>
      <div name="productContent">{products?.item?.content}</div>
    </section>
  );
}

ProductsExplanation.propTypes = {
  products: PropTypes.string.isRequired,
};
