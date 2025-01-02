export default function Signup() {
  return (
    <div className="container">
      <form className="w-[400px] mx-auto pb-[60px]">
        <h1 className="text-center font-bold text-[32px] pb-[42px]">
          회원가입
        </h1>

        <fieldset className="mb-[10px]" id="userInfo">
          <legend className="sr-only">사용자 정보 입력</legend>
          <div className="mb-5">
            <label htmlFor="userName">이름</label>
            <div className="py-[14px] border-solid border-b-4 border-gray3 focus-within:border-point-blue">
              <input
                className="text-[20px] w-full focus:outline-none"
                id="userName"
                type="text"
                placeholder="예) 김아랜"
              />
            </div>
            <p className="text-point-red mt-[2px]">
              이름을 정확히 입력해주세요
            </p>
          </div>

          <div className="mb-5">
            <label htmlFor="userNickname">닉네임</label>
            <div className="py-[10px] flex border-solid border-b-4 border-gray3 focus-within:border-point-blue">
              <input
                className="text-[20px] focus:outline-none flex-grow"
                id="userNickname"
                type="text"
                placeholder="예) 아이랜드덕후"
              />
              <div className="ml-auto px-[14px] py-[6px] border-solid border-2 border-gray2 rounded-lg text-gray3 box-content focus-within:border-point-blue">
                <button
                  type="button"
                  className="cursor-pointer focus:outline-none"
                  aria-label="닉네임 중복 확인 버튼"
                >
                  중복확인
                </button>
              </div>
            </div>
            <p className="text-point-red mt-[2px]">
              닉네임을 정확히 입력해주세요
            </p>
          </div>

          <div className="mb-5">
            <label htmlFor="userEmail">이메일</label>
            <div className="py-[10px] flex border-solid border-b-4 border-gray3 focus-within:border-point-blue">
              <input
                className="text-[20px] focus:outline-none flex-grow"
                id="userEmail"
                type="email"
                placeholder="예) iland@iland.com"
              />
              <div className="ml-auto px-[14px] py-[6px] border-solid border-2 border-gray2 rounded-lg text-gray3 box-content focus-within:border-point-blue">
                <button
                  type="button"
                  className="cursor-pointer focus:outline-none"
                  aria-label="이메일 중복 확인 버튼"
                >
                  중복확인
                </button>
              </div>
            </div>
            <p className="text-point-red mt-[2px]">
              이메일을 정확히 입력해주세요
            </p>
          </div>
        </fieldset>

        <fieldset id="userPw">
          <legend className="sr-only">비밀번호 입력 및 확인란</legend>
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

          <div className="mb-5">
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <div className="py-[14px] flex border-solid border-b-4 border-gray3 focus-within:border-point-blue items-center">
              <input
                className="text-[20px] focus:outline-none flex-grow"
                id="passwordCheck"
                type="password"
                placeholder="비밀번호 확인"
              />
              <button
                type="button"
                className="cursor-pointer"
                aria-label="비밀번호 확인 표시"
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
            <p className="text-point-red mt-[2px]">비밀번호를 확인해주세요</p>
          </div>
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
