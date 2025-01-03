import PropTypes from "prop-types";

export default function ProductCategory({ value, onChange }) {
  return (
    <div className="mb-16">
      <label className="section-title" htmlFor="category-1">
        상품 카테고리
      </label>
      <div className="flex gap-[30px]">
        <select
          id="category-1"
          className="w-[400px] h-[40px] border border-gray2 rounded-lg px-3 text-[14px] focus:outline-none"
          name="selectedCategory1"
        >
          <option>상품 카테고리를 선택해주세요.</option>
          <option value="cartoon">만화/애니메이션</option>
          <option value="idol">아이돌</option>
          <option value="film">영화/드라마</option>
          <option value="figure">인형/피규어</option>
          <option value="fashion">패션/의류</option>
          <option value="stationary">문구/잡화</option>
        </select>
        <select
          id="category-2"
          className="w-[400px] h-[40px] border border-gray2 rounded-lg px-3 text-[14px] focus:outline-none"
          name="selectedCategory2"
        >
          <option>상품 카테고리를 선택해주세요.</option>
          <option value="cartoon">만화/애니메이션</option>
          <option value="idol">아이돌</option>
          <option value="film">영화/드라마</option>
          <option value="figure">인형/피규어</option>
          <option value="fashion">패션/의류</option>
          <option value="stationary">문구/잡화</option>
        </select>
      </div>
    </div>
  );
}

ProductCategory.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
