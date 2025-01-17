import InputField from "@components/common/InputField";
import PasswordInput from "@components/user/PasswordInput";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

// 이메일, 비밀번호 정규 표현식
const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,16}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^.{8,}$/;

// 이미지 경로 정규 표현식
const imgRegex = /^\/.*/;

export default function MyPage() {
  const axios = useAxiosInstance();

  const { user } = useUserStore();

  // 사용자 정보 수정 중 상태
  const [isEditing, setIsEditing] = useState(false);

  // 사용자 정보 상태
  const [myInfo, setMyInfo] = useState();

  // 닉네임, 이메일 중복확인 여부
  const [validNickname, setValidNickname] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields },
    setError,
    clearErrors,
    getValues,
    reset,
    watch,
  } = useForm();

  const editToggle = () => {
    setIsEditing(!isEditing);
  };

  // 회원정보 출력
  const fetchUserInfo = async user_id => {
    try {
      const res = await axios.get(`/users/${user_id}`);
      console.log(res.data.item);
      setMyInfo(res.data.item);
    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  // 닉네임 중복확인
  const checkNickname = async () => {
    // nicknameInput 값 획득
    const nicknameInput = getValues("name");

    // nicknameInput 이 수정되었을 때만 실행
    if (!dirtyFields.name || myInfo.name === nicknameInput) {
      setValidNickname(true);
    } else {
      // nickname 유효성 검사
      if (nicknameInput.length !== 0 && nicknameRegex.test(nicknameInput)) {
        // 기존의 에러 초기화
        clearErrors("name");
        try {
          // 서버에 nickname 중복확인 요청
          const res = await axios.get(`/users/name?name=${nicknameInput}`);
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
    }
  };

  // 이메일 중복확인
  const checkEmail = async () => {
    // emailInput 값 획득
    const emailInput = getValues("email");

    // emailInput 이 수정되었을 때만 실행
    if (!dirtyFields.email) {
      setValidEmail(true);
    } else {
      // email 유효성 검사
      if (emailInput.length !== 0 && emailRegex.test(emailInput)) {
        clearErrors("email");
        try {
          // 서버에 email 중복확인 요청
          const res = await axios.get(`/users/email?email=${emailInput}`);
          // email 인증 상태 false => true 로 변경
          setValidEmail(true);
        } catch (err) {
          // 중복된 email 이 있는 경우
          clearErrors("email");
          setValidEmail(false);
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
    }
  };

  // 회원정보 수정 API
  const patchMyInfo = formData => {
    console.log(isDirty);
    console.log(formData);
  };

  // 사용지 닉네임, 이메일 자동 입력
  useEffect(() => {
    reset({
      email: myInfo?.email,
      name: myInfo?.name,
    });
  }, []);

  // 회원정보 불러오기
  useEffect(() => {
    fetchUserInfo(user._id);
  }, []);

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
      <form
        className="w-[400px] mx-auto pb-[60px]"
        onSubmit={handleSubmit(patchMyInfo)}
      >
        <fieldset className="mb-[10px]" id="userInfo">
          <legend className="sr-only">사용자 정보 입력</legend>

          <figure className="aspect-square size-[150px] mx-auto mb-[30px] relative">
            <img
              className="size-full rounded-full border-2 border-gray1 box-border"
              src={
                myInfo?.image
                  ? imgRegex.test(myInfo.image)
                    ? `https://11.fesp.shop${myInfo.image}`
                    : myInfo.image
                  : "https://11.fesp.shop/files/final06/default-profile.png"
              }
            />
            {isEditing && (
              <>
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
              </>
            )}
          </figure>

          <InputField
            id="userName"
            label="이름"
            placeholder="예) 김아랜"
            defaultValue={myInfo?.extra?.username || myInfo?.name}
            readOnly={true}
          />

          <InputField
            id="userNickname"
            label="닉네임"
            placeholder="예) 아이랜드덕후"
            defaultValue={myInfo?.name}
            readOnly={!isEditing && true}
            register={register("name")}
            error={errors.name}
          >
            {isEditing && (
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
            )}
          </InputField>
          {validNickname && (
            <p className="text-point-blue -mt-[18px] mb-5">
              수정한 내용이 없습니다.
            </p>
          )}

          <InputField
            id="email"
            label="이메일"
            placeholder="예) iland@iland.com"
            defaultValue={myInfo?.email}
            readOnly={!isEditing && true}
            register={register("email")}
            error={errors.email}
          >
            {isEditing && (
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
            )}
          </InputField>
          {validEmail && (
            <p className="text-point-blue -mt-[18px] mb-5">
              수정한 내용이 없습니다.
            </p>
          )}
        </fieldset>

        {isEditing && (
          <fieldset id="userPw">
            <legend className="sr-only">비밀번호 입력 및 확인란</legend>
            <PasswordInput
              id="password"
              label="비밀번호"
              placeholder="비밀번호"
              register={register("password")}
            />

            <PasswordInput
              id="passwordCheck"
              label="비밀번호 확인"
              placeholder="비밀번호 확인"
              register={register("passwordCheck")}
            />
          </fieldset>
        )}

        {isEditing ? (
          <div className="flex gap-[30px] justify-center mt-[10px]">
            <button
              type="button"
              className="h-[50px] py-[14px] px-9 border-2 border-gray2 text-gray3 rounded-lg border-solid box-border"
              onClick={editToggle}
            >
              <p className="text-[18px] font-bold">취소</p>
            </button>
            <button className="h-[50px] py-[14px] px-9 rounded-lg bg-point-blue box-border">
              <p className="text-[18px] text-white font-bold">저장</p>
            </button>
          </div>
        ) : (
          <div className="w-[400px] h-[60px] text-center p-[18px] rounded-[8px] text-[24px] font-bold text-gray3 border-solid  border-gray3 border-2 focus-within:border-point-blue focus-within:shadow-md focus-within:shadow-point-blue">
            <button
              type="button"
              className="cursor-pointer size-full focus:outline-none"
              onClick={editToggle}
            >
              내 정보 수정
            </button>
          </div>
        )}
      </form>
    </>
  );
}
