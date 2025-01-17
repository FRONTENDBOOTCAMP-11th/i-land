import InputError from "@components/common/InputError";
import PropTypes from "prop-types";

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  defaultValue: PropTypes.string,
};
export default function InputField({
  label,
  id,
  type = "text",
  placeholder,
  register,
  error,
  children,
  className = "",
  readOnly = false,
  defaultValue = "",
}) {
  return (
    <div className="w-full mb-5">
      <label className={className} htmlFor={id}>
        {label}
      </label>
      <div
        className={`py-[10px] flex border-solid border-b-4 border-gray3 ${readOnly ? "" : "focus-within:border-point-blue"} items-center`}
      >
        <input
          className="text-[20px] focus:outline-none flex-grow"
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
          readOnly={readOnly}
          defaultValue={defaultValue}
        />
        {children}
      </div>
      {/* <p className="text-point-red mt-[2px]">이메일을 입력해주세요</p> */}
      <InputError target={error} />
    </div>
  );
}
