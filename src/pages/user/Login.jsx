import InputError from "@components/InputError";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";
import { SHA256 } from "crypto-js";
import { CryptoJS } from "crypto-js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

// 이메일, 비밀번호 정규 표현식
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^.{8,}$/;

export default function Login() {
  const setUser = useUserStore(store => store.setUser);

  const navigate = useNavigate();
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(false);

  // 비밀번호 표시 버튼
  const togglePassword = () => {
    setIsVisible(!isVisible);
  };

  const axios = useAxiosInstance();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      // 로컬 스토리지에 저장된 회원정보가 있는 경우, defaultValues 로 자동 기입
      email: localStorage?.getItem("email"),
      password: CryptoJS.AES.decrypt(
        localStorage?.getItem("password"),
        "passphrase",
      ),
    },
  });

  // 로그인 시 API 서버 요청 함수
  const login = async formData => {
    try {
      // 이전의 에러가 있는 경우, 에러 초기화
      if (errors) clearErrors();

      // 로그인 정보 저장 체크 시, 로컬 스토리지에 이메일, 비밀번호 저장
      if (formData.saveInfo === true) {
        localStorage.setItem("email", formData.email);
        localStorage.setItem(
          "password",
          SHA256(formData.password, "passphrase").toString(),
        );
      } else {
        localStorage.clear();
      }

      const res = await axios.post("/users/login", formData);
      console.log("로그인 성공");
      console.log(res.data.item);

      const user = res.data.item;

      // 쿠키에 사용자 정보 저장(_id, accessToken, refreshToken)
      setUser({
        _id: user._id,
        accessToken: user.token.accessToken,
        refreshToken: user.token.refreshToken,
      });

      // 로그인 성공 시 얼럿 창 출력
      // alert(res.data.item.name + "님 안녕하세요.");

      // 이전 작업페이지 또는 메인 홈으로 이동
      // navigate(location.state?.from || "/");
    } catch (err) {
      console.error(err);
      // 400 error 처리(요청 에러)
      if (err.response.status >= 403) {
        console.error(err.response.status, err.response.data.message);
        setError("password", {
          type: "manual",
          message: err.response.data.message,
        });
      } else if (err.response.status >= 500) {
        alert("잠시 후 다시 시도해주세요.");
        navigate("/user/login");
      }
      // 서버 에러 500
    }
  };

  // 화면 렌더링
  return (
    <div className="container">
      <div className="mx-auto w-fit mb-[40px]">
        <figure>
          <img className="mx-auto" src="/assets/logos/logo-vertical.svg" />
          <figcaption className="font-bold text-[18px]">
            내 취향을 위한 공간
          </figcaption>
        </figure>
      </div>

      <form
        className="w-[400px] mx-auto pb-[60px]"
        onSubmit={handleSubmit(login)}
      >
        <fieldset className="mb-[30px]" id="userInfo">
          <legend className="sr-only">로그인 입력 폼</legend>

          <div className="mb-5">
            <label htmlFor="userEmail">이메일</label>
            <div className="py-[10px] flex border-solid border-b-4 border-gray3 focus-within:border-point-blue items-center">
              <input
                className="text-[20px] focus:outline-none flex-grow"
                id="userEmail"
                type="email"
                placeholder="예) iland@iland.com"
                {...register("email", {
                  required: "이메일을 입력해주세요.",
                  pattern: {
                    value: emailRegex,
                    message: "올바른 형식의 이메일을 입력해주세요.",
                  },
                })}
              />
            </div>
            {/* <p className="text-point-red mt-[2px]">이메일을 입력해주세요</p> */}
            <InputError target={errors.email} />
          </div>

          <div className="mb-5">
            <label htmlFor="password">비밀번호</label>
            <div className="py-[14px] flex border-solid border-b-4 border-gray3 focus-within:border-point-blue items-center">
              <input
                className="text-[20px] focus:outline-none flex-grow"
                id="password"
                type={isVisible ? "text" : "password"}
                placeholder="비밀번호"
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                  pattern: {
                    value: passwordRegex,
                    message: "올바른 형식의 비밀번호를 입력해주세요.",
                  },
                })}
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
            <InputError target={errors.password} />
          </div>

          <label
            className="mb-[30px] flex gap-[10px] items-center"
            htmlFor="saveInfo"
          >
            <input
              type="checkbox"
              className="appearance-none size-5 bg-[url('/assets/icons/checkbox.svg')] checked:bg-[url('/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
              {...register("saveInfo")}
            />
            로그인 정보 저장
          </label>
        </fieldset>

        <div className="w-[400px] h-[60px] text-center p-[18px] rounded-[8px] text-[24px] font-bold text-white bg-point-blue focus-within:border-point-blue focus-within:shadow-md focus-within:shadow-point-blue mb-[10px]">
          <button
            type="submit"
            className="cursor-pointer size-full focus:outline-none"
          >
            로그인
          </button>
        </div>

        <div className="w-[400px] h-[60px] text-center rounded-[8px] focus-within:border-point-blue focus-within:shadow-md focus-within:shadow-point-blue mb-[10px]">
          <button
            type="button"
            className="size-full focus:outline-none cursor-pointer bg-[url('/assets/icons/kakao-login.svg')] bg-cover"
          />
        </div>

        <div className="w-[400px] h-[60px] text-center p-[18px] rounded-[8px] text-[24px] font-bold text-gray3 border-solid  border-gray3 border-2 focus-within:border-point-blue focus-within:shadow-md focus-within:shadow-point-blue">
          <button
            type="button"
            className="cursor-pointer size-full focus:outline-none"
            onClick={() => navigate("/user/signup")}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
