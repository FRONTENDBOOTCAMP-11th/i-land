import PropTypes from "prop-types";
import InputError from "@components/common/InputError";

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
        placeholder="예) 최강야구 이대호 굿즈 3종 세트입니다."
        {...register("content", {
          required: "상품 설명을 입력해주세요.",
        })}
      ></textarea>
      <InputError target={error} />
    </div>
  );
}

ProductContent.propTypes = {
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
};
