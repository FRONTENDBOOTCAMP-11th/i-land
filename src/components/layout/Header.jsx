import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/src/assets/images/logo.svg";
import searchIcon from "/src/assets/icons/search.svg";
import bookmarkIcon from "/src/assets/icons/heart-fill.svg";
import cartIcon from "/src/assets/icons/cart.svg";
import noProfileImage from "/src/assets/images/no-profile-image.svg";

export default function Header() {
  // 로그인 상태와 프로필 이미지 관리
  // TODO: Zustand를 통한 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 초기값: 로그아웃 상태
  const [profileImage, setProfileImage] = useState(""); // 초기값: 프로필 이미지 없음

  console.log("isLoggedIn:", isLoggedIn);
  console.log("profileImage:", profileImage);

  return (
    <header className="container mt-[60px] mb-[60px] flex items-center justify-between">
      <Link to="/">
        <img src={logo} alt="I-Land Logo" />
      </Link>

      <div className="flex justify-center items-center gap-x-4">
        <Link to="/search">
          <img className="" src={searchIcon} alt="Search Icon" />
        </Link>
        <Link to="/bookmarks">
          <img className="" src={bookmarkIcon} alt="Bookmark Icon" />
        </Link>
        <Link to="/carts">
          <img className="" src={cartIcon} alt="Cart Icon" />
        </Link>

        {isLoggedIn ? (
          <Link to="/profile">
            <img
              className="rounded-full w-10 h-10"
              src={profileImage || noProfileImage} // 프로필 이미지가 없으면 기본 이미지 노출
              alt="User Profil"
            />
          </Link>
        ) : (
          <Link to="/user/login" className="font-bold">
            로그인/회원가입
          </Link>
        )}
      </div>
    </header>
  );
}
