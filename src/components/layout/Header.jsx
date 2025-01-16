import { useState } from "react";
import { Link } from "react-router-dom";

import useUserStore from "@zustand/userStore";
import useSearchStore from "@zustand/useSearchStore";

import ProfileDropdown from "@components/common/ProfileDropdown";

export default function Header() {
  const { user } = useUserStore();
  const { openSearch } = useSearchStore();

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <header className="container mt-[60px] mb-[60px] flex items-center justify-between">
      <Link to="/">
        <img src="/assets/logos/logo-horizontal.svg" alt="I-Land Logo" />
      </Link>

      <div className="flex items-center justify-center gap-x-4">
        <button onClick={openSearch}>
          <img src="/assets/icons/search.svg" alt="Search Icon" />
        </button>
        <Link to="/bookmarks">
          <img src="/assets/icons/heart-fill.svg" alt="Bookmark Icon" />
        </Link>
        <Link to="/carts">
          <img src="/assets/icons/cart.svg" alt="Cart Icon" />
        </Link>

        {user ? (
          <button
            type="button"
            className="relative"
            onClick={showDropdown}
            onBlur={hideDropdown}
          >
            <img
              className="box-content w-10 h-10 border-2 rounded-full border-gray1"
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
