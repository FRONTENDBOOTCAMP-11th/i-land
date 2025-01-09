import PropTypes from "prop-types";

export default function ProductCategory({ value, onChange }) {
  const handleSelectChange = (index, selectedValue) => {
    const updatedCategories = [...value];
    updatedCategories[index] = selectedValue;
    onChange(updatedCategories);
  };

  return (
    <div className="mb-16">
      <label className="section-title" htmlFor="category-1">
        상품 카테고리
      </label>
      <div className="flex gap-[30px]">
        <select
          id="category-1"
          className="w-[400px] h-[40px] border border-gray2 rounded-lg px-3 text-[14px] focus:outline-none"
          value={value[0] || ""}
          onChange={e => {
            handleSelectChange(0, e.target.value);
          }}
        >
          <option>상품 카테고리를 선택해주세요.</option>
          <option value="cartoon">만화/애니메이션</option>
          <option value="idol">아이돌</option>
          <option value="film">영화/드라마</option>
          <option value="figure">인형/피규어</option>
          <option value="fashion">패션/의류</option>
          <option value="stationary">문구/잡화</option>
        </select>
        {value[0] === "" && (
          <p className="mt-2 text-sm text-red-500">
            첫 번째 카테고리는 필수 선택 항목입니다.
          </p>
        )}

        <select
          id="category-2"
          className="w-[400px] h-[40px] border border-gray2 rounded-lg px-3 text-[14px] focus:outline-none"
          value={value[1] || ""}
          onChange={e => {
            handleSelectChange(1, e.target.value);
          }}
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
