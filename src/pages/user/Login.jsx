export default function Login() {
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

      <form className="w-[400px] mx-auto pb-[60px]">
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
              />
              <button
                type="button"
                className="cursor-pointer"
                aria-label="비밀번호 표시"
              >
                <img
                  className="ml-auto"
                  src="/assets/icons/eye-closed.svg"
                  alt="비밀번호 숨김 상태"
                />
                <img
                  className="hidden ml-auto"
                  src="/assets/icons/eye-open.svg"
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
            className="cursor-pointer size-full focus:outline-none"
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
            className="cursor-pointer size-full focus:outline-none"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
