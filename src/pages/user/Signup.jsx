import InputField from "@components/InputField";
import PasswordInput from "@components/PasswordInput";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useForm } from "react-hook-form";

// 이메일, 비밀번호 정규 표현식
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^.{8,}$/;

export default function Signup() {
  const axios = useAxiosInstance();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    getValues,
  } = useForm();

  // 회원가입 요청
  const signup = () => {
    console.log("회원가입 버튼 클릭");
  };

  // 닉네임 중복확인
  const checkNickname = async () => {
    const nicknameInput = getValues("name");
    console.log("닉네임 중복확인 |", nicknameInput);
    try {
      const res = await axios.get(`/users/name?name=${nicknameInput}`);
      console.log(res);
    } catch (err) {
      console.log(err.response.data.message);
      clearErrors;
      setError("name", {
        type: "manual",
        message: "이미 등록된 닉네임입니다.",
      });
    }
  };

  // 이메일 중복확인
  const checkEmail = async () => {
    const emailInput = getValues("email");
    console.log("이메일 중복확인 |", emailInput);
    try {
      const res = await axios.get(`/users/email?email=${emailInput}`);
      console.log(res);
    } catch (err) {
      console.log(err.response.data.message);
      setError("email", {
        type: "manual",
        message: "이미 등록된 이메일입니다.",
      });
    }
  };

  return (
    <div className="container">
      <form
        className="w-[400px] mx-auto pb-[60px]"
        onSubmit={handleSubmit(signup)}
      >
        <h1 className="text-center font-bold text-[32px] pb-[42px]">
          회원가입
        </h1>

        <fieldset className="mb-[10px]" id="userInfo">
          <legend className="sr-only">사용자 정보 입력</legend>
          <InputField
            id="userName"
            label="이름"
            placeholder="예) 김아랜"
            register={register("username", {
              required: "이름을 입력해주세요.",
              pattern: {
                value: /^[가-힣]{2,5}$/,
                message: "이름은 최대 5자까지 입력 가능합니다.",
              },
            })}
            error={errors.username}
          />

          <InputField
            id="userNickname"
            label="닉네임"
            placeholder="예) 아이랜드덕후"
            register={register("name", {
              required: "닉네임을 입력해주세요.",
              pattern: {
                value: /^[가-힣a-zA-Z0-9]{2,16}$/,
                message: "닉네임은 최대 16자까지 입력 가능합니다.",
              },
            })}
            error={errors.name}
          >
            <div className="ml-auto px-[14px] py-[6px] border-solid border-2 border-gray2 rounded-lg text-gray3 box-content focus-within:border-point-blue">
              <button
                type="button"
                className="cursor-pointer focus:outline-none"
                aria-label="닉네임 중복 확인 버튼"
                onClick={checkNickname}
              >
                중복확인
              </button>
            </div>
          </InputField>

          <InputField
            id="email"
            label="이메일"
            placeholder="예) iland@iland.com"
            register={register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: emailRegex,
                message: "올바른 형식의 이메일을 입력해주세요.",
              },
            })}
            error={errors.email}
          >
            <div className="ml-auto px-[14px] py-[6px] border-solid border-2 border-gray2 rounded-lg text-gray3 box-content focus-within:border-point-blue">
              <button
                type="button"
                className="cursor-pointer focus:outline-none"
                aria-label="이메일 중복 확인 버튼"
                onClick={checkEmail}
              >
                중복확인
              </button>
            </div>
          </InputField>
        </fieldset>

        <fieldset id="userPw">
          <legend className="sr-only">비밀번호 입력 및 확인란</legend>
          <PasswordInput
            id="password"
            label="비밀번호"
            placeholder="비밀번호"
            register={register("password", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: passwordRegex,
                message: "올바른 형식의 비밀번호를 입력해주세요.",
              },
            })}
            error={errors.password}
          />

          <PasswordInput
            id="passwordCheck"
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
            register={register("passwordCheck", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: passwordRegex,
                message: "올바른 형식의 비밀번호를 입력해주세요.",
              },
            })}
            error={errors.passwordCheck}
          />
        </fieldset>

        <div className="text-center p-[18px] border-solid border-gray3 border-2 rounded-[8px] text-gray3 focus-within:border-point-blue focus-within:shadow-md focus-within:ring-point-blue">
          <button
            className="w-full cursor-pointer focus:outline-none"
            type="submit"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
