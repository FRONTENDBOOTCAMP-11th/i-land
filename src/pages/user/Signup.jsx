import InputField from "@components/InputField";
import PasswordInput from "@components/PasswordInput";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// 이메일, 비밀번호 정규 표현식
const usernameRegex = /^[가-힣]{2,5}$/;
const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,16}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^.{8,}$/;

export default function Signup() {
  const axios = useAxiosInstance();

  const navigate = useNavigate();

  // 닉네임 중복확인
  const [validNickname, setValidNickname] = useState(false);

  // 이메일 중복확인
  const [validEmail, setValidEmail] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    getValues,
    watch,
  } = useForm();

  // 회원가입 요청
  const signup = async formData => {
    // nickname, email 중복확인 미진행 시 오류 메시지 출력
    if (validNickname === false && validEmail === false) {
      setError("name", {
        type: "nickname-not-checked",
        message: "중복확인을 진행해주세요.",
      });
      setError("email", {
        type: "email-not-checked",
        message: "중복확인을 진행해주세요.",
      });
    } else {
      // 검증이 끝난 값 중, API 서버 요청 시 사용되는 데이터만 추출
      const newFormData = {
        ...formData,
        extra: { username: formData.username },
      };
      // 불필요한 값 제거
      delete newFormData.passwordCheck;
      delete newFormData.username;
      console.log("회원가입 버튼 클릭");
      try {
        const res = await axios.post("/users/", newFormData);
        console.log(res);
        // 얼럿 출력 후 로그인 페이지로 이동
        alert("회원가입이 완료됐습니다.");
        navigate("/user/login");
      } catch (err) {
        console.error(err.response.status);
        if (err.response.status === 500) {
          alert("잠시 후 다시 시도해주세요.");
        }
      }
    }
  };

  // 닉네임 중복확인
  const checkNickname = async () => {
    // nicknameInput 값 획득
    const nicknameInput = getValues("name");
    // nickname 유효성 검사
    if (nicknameInput.length !== 0 && nicknameRegex.test(nicknameInput)) {
      // 기존의 에러 초기화
      clearErrors("name");
      try {
        // 서버에 nickname 중복확인 요청
        const res = await axios.get(`/users/name?name=${nicknameInput}`);
        console.log(res);
        // nickname 인증 상태 false => true 로 변경
        setValidNickname(true);
      } catch (err) {
        // 중복된 nickname 이 있는 경우
        clearErrors("name");
        setValidNickname(false);
        setError("name", {
          type: "used-nickname",
          message: "이미 등록된 닉네임입니다.",
        });
      }
    } else {
      // 유효하지 않은 nickname 형식
      setValidNickname(false);
      setError("name", {
        type: "invalid-nickname-form",
        message: "올바른 형식의 닉네임을 입력해주세요.",
      });
    }
  };

  // 이메일 중복확인
  const checkEmail = async () => {
    // emailInput 값 획득
    const emailInput = getValues("email");
    // email 유효성 검사
    if (emailInput.length !== 0 && emailRegex.test(emailInput)) {
      clearErrors("email");
      try {
        // 서버에 email 중복확인 요청
        const res = await axios.get(`/users/email?email=${emailInput}`);
        console.log(res);
        // email 인증 상태 false => true 로 변경
        setValidEmail(true);
      } catch (err) {
        // 중복된 email 이 있는 경우
        clearErrors("email");
        setValidNickname(false);
        setError("email", {
          type: "used-email",
          message: "이미 등록된 이메일입니다.",
        });
      }
    } else {
      // 유효하지 않은 email 형식
      setValidEmail(false);
      setError("email", {
        type: "invalid-email-form",
        message: "올바른 형식의 이메일을 입력해주세요.",
      });
    }
  };

  // 비밀번호 일치 여부 판단
  useEffect(() => {
    if (watch("password") !== watch("passwordCheck")) {
      setError("passwordCheck", {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않습니다.",
      });
    } else {
      clearErrors("passwordCheck");
    }
  }, [watch("password"), watch("passwordCheck")]);

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
          <input type="hidden" {...register("type")} value="seller" />
          <input
            type="hidden"
            {...register("image")}
            value="/files/final06/default-profile.png"
          />
          <InputField
            id="userName"
            label="이름"
            placeholder="예) 김아랜"
            register={register("username", {
              required: "이름을 입력해주세요.",
              pattern: {
                value: usernameRegex,
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
                value: nicknameRegex,
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
          {validNickname && (
            <p className="text-point-blue -mt-[18px] mb-5">
              사용 가능한 닉네임입니다.
            </p>
          )}

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
          {validEmail && (
            <p className="text-point-blue -mt-[18px] mb-5">
              사용 가능한 이메일입니다.
            </p>
          )}
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
              required: "비밀번호를 확인해주세요.",
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
