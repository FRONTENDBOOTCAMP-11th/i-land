import InputField from "@components/common/InputField";
import PasswordInput from "@components/user/PasswordInput";
import { Helmet } from "react-helmet-async";

export default function MyPage() {
  return (
    <>
      <Helmet>
        <title>내 정보 - ILAND</title>

        <meta property="og:title" content="내 정보 - ILAND" />
        <meta
          property="og:description"
          content="ILAND에서 내 취향을 모아보세요."
        />
      </Helmet>

      <div className="container">
        <h1 className="page-title">내 정보</h1>
      </div>
      <form className="w-[400px] mx-auto pb-[60px]">
        <fieldset className="mb-[10px]" id="userInfo">
          <legend className="sr-only">사용자 정보 입력</legend>

          <figure className="aspect-square size-[150px] mx-auto mb-[30px] relative">
            <img
              className="size-full rounded-full border-2 border-gray1 box-border"
              src="/assets/images/product-image-1.png"
            />
            <input
              type="file"
              accept=".png, .jpeg, .jpg, .svg"
              aria-label="사진 변경 버튼"
              className="sr-only"
              id="file-upload"
            />
            <label
              className="absolute right-0 bottom-0 w-10 h-10 rounded-full bg-[url('/assets/icons/addimage.svg')] bg-cover cursor-pointer"
              htmlFor="file-upload"
            />
          </figure>

          <InputField
            id="userName"
            label="이름"
            placeholder="예) 김아랜"
            defaultValue="아이유"
            readOnly={true}
          />

          <InputField
            id="userNickname"
            label="닉네임"
            placeholder="예) 아이랜드덕후"
            defaultValue="내가찐아이유"
          >
            <div className="ml-auto px-[14px] py-[6px] border-solid border-2 border-gray2 rounded-lg text-gray3 box-content focus-within:border-point-blue">
              <button
                type="button"
                className="cursor-pointer focus:outline-none"
                aria-label="닉네임 중복 확인 버튼"
              >
                중복확인
              </button>
            </div>
          </InputField>

          <InputField
            id="email"
            label="이메일"
            placeholder="예) iland@iland.com"
            defaultValue="imiu@iland.com"
          >
            <div className="ml-auto px-[14px] py-[6px] border-solid border-2 border-gray2 rounded-lg text-gray3 box-content focus-within:border-point-blue">
              <button
                type="button"
                className="cursor-pointer focus:outline-none"
                aria-label="이메일 중복 확인 버튼"
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
          />

          <PasswordInput
            id="passwordCheck"
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
          />
        </fieldset>

        <div className="w-[400px] h-[60px] text-center p-[18px] rounded-[8px] text-[24px] font-bold text-gray3 border-solid  border-gray3 border-2 focus-within:border-point-blue focus-within:shadow-md focus-within:shadow-point-blue hidden">
          <button
            type="submit"
            className="cursor-pointer size-full focus:outline-none"
          >
            내 정보 수정
          </button>
        </div>
        <div className="flex gap-[30px] justify-center mt-[10px]">
          <button className="h-[50px] py-[14px] px-9 border-2 border-gray2 rounded-lg border-solid box-border">
            <p className="text-[18px] font-bold">취소</p>
          </button>
          <button className="h-[50px] py-[14px] px-9 rounded-lg bg-point-blue box-border">
            <p className="text-[18px] text-white font-bold">저장</p>
          </button>
        </div>
      </form>
    </>
  );
}
