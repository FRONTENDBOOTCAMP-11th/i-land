import { useState } from "react";
import { Link } from "react-router-dom";

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
        <img src="/assets/logos/logo-horizontal.svg" alt="I-Land Logo" />
      </Link>

      <div className="flex items-center justify-center gap-x-4">
        <Link to="/search">
          <img src="/assets/icons/search.svg" alt="Search Icon" />
        </Link>
        <Link to="/bookmarks">
          <img src="/assets/icons/heart-fill.svg" alt="Bookmark Icon" />
        </Link>
        <Link to="/carts">
          <img src="/assets/icons/cart.svg" alt="Cart Icon" />
        </Link>

        {isLoggedIn ? (
          <Link to="/profile">
            <img
              className="w-10 h-10 rounded-full"
              src={profileImage || "/asstes/images/profile-default.png"} // 프로필 이미지가 없으면 기본 이미지 노출
              alt="User Profile"
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
