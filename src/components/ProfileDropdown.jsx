import useUserStore from "@zustand/userStore";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileDropdown() {
  const { resetUser } = useUserStore();

  const navigate = useNavigate();

  const logout = () => {
    resetUser();
    alert("로그아웃 되었습니다.");
  };

  return (
    <ul className="absolute -bottom-[92] right-0 border border-gray2 bg-white z-50 w-[110px] rounded-md">
      <li
        className="p-[14px]"
        onClick={() => {
          navigate("/create");
        }}
      >
        상품등록
      </li>
      <hr className="border border-gray2" />
      <li className="p-[14px]" onClick={logout}>
        로그아웃
      </li>
    </ul>
  );
}
