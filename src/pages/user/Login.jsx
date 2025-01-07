import InputField from "@components/InputField";
import PasswordInput from "@components/PasswordInput";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";
// import CryptoJS from "crypto-js";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

// 이메일, 비밀번호 정규 표현식
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^.{8,}$/;

// 로그인 정보 암호화 및 복호화 passkey
const passKey = "11111111";

export default function Login() {
  // 로그인 상태 저장(전역 상태 관리)
  const setUser = useUserStore(store => store.setUser);

  const axios = useAxiosInstance();

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm();

  // 로그인 정보 자동 입력
  useEffect(() => {
    // 로컬 스토리지에 email && password 가 있는 경우
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      // 로그인 폼 입력값 자동 입력
      reset({
        email: localStorage.getItem("email"),
        // 로컬 스토리지에 저장된 비밀번호 복호화
        password: CryptoJS.AES.decrypt(
          localStorage.getItem("password"),
          passKey,
        ).toString(CryptoJS.enc.Utf8),
      });
    }
  }, [reset]);

  // 로그인 시 API 서버 요청 함수
  const login = async formData => {
    try {
      // 이전의 에러가 있는 경우, 에러 초기화
      if (errors) clearErrors();

      // 로그인 정보 저장 체크 시, 비밀번호 암호화
      if (formData.saveInfo === true) {
        const encryptedPassword = CryptoJS.AES.encrypt(
          formData.password,
          passKey,
        ).toString();
        // 로그인 정보 저장 체크 시, 로컬 스토리지에 저장
        localStorage.setItem("email", formData.email);
        localStorage.setItem("password", encryptedPassword);
      } else {
        // 로그인 정보 저장 미선택 시, 로컬 스토리지에 있는 로그인 정보 삭제
        localStorage.clear();
      }

      // API 서버 요청
      const res = await axios.post("/users/login", formData);
      const user = res.data.item;
      console.log("로그인 성공");
      console.log(user);

      // 쿠키에 사용자 정보 저장(_id, accessToken, refreshToken)
      setUser({
        _id: user._id,
        profileImage: user.image,
        accessToken: user.token.accessToken,
        refreshToken: user.token.refreshToken,
      });

      // 로그인 성공 시 얼럿 창 출력
      alert(res.data.item.name + "님 안녕하세요.");

      // 이전 작업페이지 또는 메인 홈으로 이동
      navigate(location.state?.from || "/");
    } catch (err) {
      console.error(err);
      // 요청 에러 400
      if (err.response.status >= 400) {
        setError("password", {
          type: "manual",
          message: "이메일과 비밀번호를 확인해주세요.",
        });
      } else if (err.response.status >= 500) {
        // 서버 에러 500
        alert("잠시 후 다시 시도해주세요.");
        navigate("/user/login");
      }
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

          <InputField
            id="userEmail"
            label="이메일"
            type="email"
            placeholder="예) iland@iland.com"
            register={register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: emailRegex,
                message: "올바른 형식의 이메일을 입력해주세요.",
              },
            })}
            error={errors.email}
          />

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
