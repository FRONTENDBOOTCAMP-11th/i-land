import PropTypes from "prop-types";

export default function ProductContent({ register, error }) {
  return (
    <div className="mb-16">
      <label className="section-title" htmlFor="productContent">
        상품 설명
      </label>
      <textarea
        id="productContent"
        className="w-full h-[400px] p-[40px] border border-gray2 rounded-lg focus:outline-none resize-none text-2xl"
        name="productDescription"
        placeholder="상품 설명을 입력해주세요."
        {...register("content", {
          required: "상품 설명은 필수 항목입니다.",
        })}
      ></textarea>
    </div>
  );
}

ProductContent.propTypes = {
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
};
