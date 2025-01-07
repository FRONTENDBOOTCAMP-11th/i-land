import ProfileDropdown from "@components/ProfileDropdown";
import useUserStore from "@zustand/userStore";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  // 로그인 상태와 프로필 이미지 관리
  // TODO: Zustand를 통한 로그인 상태 관리
  // 초기값 : null 로그아웃 상태
  const { user } = useUserStore();

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

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

        {user ? (
          <button type="button" className="relative" onClick={showDropdown}>
            <img
              className="w-10 h-10 rounded-full border-2 border-gray1 box-content"
              src={`https://11.fesp.shop/${user?.profileImage}`} // 프로필 이미지가 없으면 기본 이미지 노출
              alt="User Profile"
            />
            {dropdownVisible && <ProfileDropdown />}
          </button>
        ) : (
          <Link to="/user/login" className="font-bold">
            로그인/회원가입
          </Link>
        )}
      </div>
    </header>
  );
}
