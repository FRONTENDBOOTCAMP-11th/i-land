import InputError from "@components/InputError";
import PropTypes from "prop-types";

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
};
export default function InputField({
  label,
  id,
  type,
  placeholder,
  register,
  error,
}) {
  return (
    <div className="mb-5">
      <label htmlFor="userEmail">{label}</label>
      <div className="py-[10px] flex border-solid border-b-4 border-gray3 focus-within:border-point-blue items-center">
        <input
          className="text-[20px] focus:outline-none flex-grow"
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
        />
      </div>
      {/* <p className="text-point-red mt-[2px]">이메일을 입력해주세요</p> */}
      <InputError target={error} />
    </div>
  );
}
