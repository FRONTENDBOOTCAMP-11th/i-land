import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  // TODO 1: 로그인 입력 폼 검증 (react-hook-form 사용)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: { email: "u1@market.com", password: "11111111" },
  });

  // TODO 2: 이메일, 비밀번호를 사용하여 API 서버 요청
  // 로그인 시 API 서버 요청 함수
  const login = async formData => {
    try {
      const res = await axios({
        method: "Post",
        url: "https://11.fesp.shop/users/login",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "client-id": "final06",
        },
        data: formData,
      });
      console.log("로그인 성공");
      console.log(res.data.item);

      // 로그인 성공 시 얼럿 창 출력
      alert(res.data.item.name + "님 안녕하세요.");

      // 이전 작업페이지 또는 메인 홈으로 이동
      navigate(location.state?.from || "/");
    } catch (err) {
      if (err.response.status > 400 && err.response.status < 500) {
        console.log("잘못된 id, pw", err.response.data.message);
        console.log("다른 에러", err.response.data.message);
        setError("올바르지 않은 이메일 또는 비밀번호입니다.");
        console.log(errors.root);
      }
    }
  };

  // TODO 3: 유효하지 않은 입력값인 경우 에러 메시지 출력(에러 메시지 컴포넌트화)
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

      <form
        className="w-[400px] mx-auto mb-[60px]"
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
                name="email"
                {...register("email", { required: "이메일을 입력해주세요." })}
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
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                })}
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
