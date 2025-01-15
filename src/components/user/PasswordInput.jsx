import InputError from "@components/common/InputError";
import PropTypes from "prop-types";
import { useState } from "react";

PasswordInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
};

export default function PasswordInput({
  label,
  id,
  placeholder,
  register,
  error,
}) {
  // 비밀번호 표시 상태 관리(컴포넌트 내부)
  const [isVisible, setIsVisible] = useState(false);

  // 비밀번호 표시 버튼
  const togglePassword = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="mb-5">
      <label htmlFor="password">{label}</label>
      <div className="py-[14px] flex border-solid border-b-4 border-gray3 focus-within:border-point-blue items-center">
        <input
          className="text-[20px] focus:outline-none flex-grow"
          id={id}
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          {...register}
        />
        <button
          type="button"
          className="cursor-pointer"
          aria-label="비밀번호 표시"
          onClick={togglePassword}
        >
          {isVisible ? (
            <img
              className="ml-auto"
              src="/assets/icons/eye-open.svg"
              alt="비밀번호 표시 중"
            />
          ) : (
            <img
              className="ml-auto"
              src="/assets/icons/eye-closed.svg"
              alt="비밀번호 숨김 상태"
            />
          )}
        </button>
      </div>
      {/* <p className="text-point-red mt-[2px]">비밀번호를 입력해주세요</p> */}
      <InputError target={error} />
    </div>
  );
}
