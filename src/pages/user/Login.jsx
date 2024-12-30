import axios from "axios";
import { useForm } from "react-hook-form";

export default function Login() {
  // TODO 1: 로그인 입력 폼 검증 (react-hook-form 사용)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  // TODO 2: 이메일, 비밀번호를 사용하여 API 서버 요청
  // 로그인 시 API 서버 요청 함수
  const login = async () => {
    try {
      const res = await axios({
        method: "Post",
        url: "https://11.fesp.shop/users/login",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "client-id": "final06",
        },
        data: {
          email: "u1@market.com",
          password: "111111111",
        },
      });
      console.log(res.data.item);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  login();

  // TODO 3: 유효하지 않은 입력값인 경우 에러 메시지 출력
  // TODO 4: 로그인 완료 시 이전 페이지로 이동
  // TODO 5: 카카오 로그인 기능 구현
  // TODO 6: 회원가입 버튼 선택 시 회원가입 페이지로 이동

  // 화면 렌더링
  return (
    <div className="container">
      <div className="mx-auto w-fit mb-[40px]">
        <figure>
          <img className="mx-auto" src="/src/assets/images/logo-vertical.svg" />
          <figcaption className="font-bold text-[18px]">
            내 취향을 위한 공간
          </figcaption>
        </figure>
      </div>

      <form className="w-[400px] mx-auto mb-[60px]">
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
                name="email"
                {...register("email", { required: "이메일은 필수입니다." })}
              />
            </div>
            <p className="text-point-red mt-[2px]">
              이메일을 정확히 입력해주세요
            </p>
          </div>

          <div className="mb-5">
            <label htmlFor="password">비밀번호</label>
            <div className="py-[14px] flex border-solid border-b-4 border-gray3 focus-within:border-point-blue items-center">
              <input
                className="text-[20px] focus:outline-none flex-grow"
                id="password"
                type="password"
                placeholder="비밀번호"
                name="password"
              />
              <button
                type="button"
                className="cursor-pointer"
                aria-label="비밀번호 표시"
              >
                <img
                  className="ml-auto"
                  src="/src/assets/icons/eye-closed.svg"
                  alt="비밀번호 숨김 상태"
                />
                <img
                  className="ml-auto hidden"
                  src="/src/assets/icons/eye-open.svg"
                  alt="비밀번호 표시 중"
                />
              </button>
            </div>
            <p className="text-point-red mt-[2px]">비밀번호를 입력해주세요</p>
          </div>

          <label className="mb-[30px] flex gap-[10px] items-center">
            <input
              type="checkbox"
              className="appearance-none size-5 bg-[url('/src/assets/icons/checkbox.svg')] checked:bg-[url('/src/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
            />
            로그인 상태 유지
          </label>
        </fieldset>

        <div className="w-[400px] h-[60px] text-center p-[18px] rounded-[8px] text-[24px] font-bold text-white bg-point-blue focus-within:border-point-blue focus-within:shadow-md focus-within:shadow-point-blue mb-[10px]">
          <button
            type="submit"
            className="size-full focus:outline-none cursor-pointer"
          >
            로그인
          </button>
        </div>

        <div className="w-[400px] h-[60px] text-center rounded-[8px] focus-within:border-point-blue focus-within:shadow-md focus-within:shadow-point-blue mb-[10px]">
          <button
            type="button"
            className="size-full focus:outline-none cursor-pointer bg-[url('/src/assets/icons/kakao-login.svg')] bg-cover"
          ></button>
        </div>

        <div className="w-[400px] h-[60px] text-center p-[18px] rounded-[8px] text-[24px] font-bold text-gray3 border-solid  border-gray3 border-2 focus-within:border-point-blue focus-within:shadow-md focus-within:shadow-point-blue">
          <button
            type="button"
            className="size-full focus:outline-none cursor-pointer"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
