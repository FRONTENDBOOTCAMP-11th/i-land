import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="w-[1200px] h-[290px] bg-[#0093FF] text-white mx-auto"
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        paddingTop: "60px",
      }}
    >
      <div className="text-center space-y-4">
        {/* 링크 섹션 */}
        <div className="text-sm text-white">
          <Link to="/terms" className="hover:underline">
            이용약관
          </Link>
          <span className="mx-2">|</span>
          <Link to="/privacy" className="hover:underline">
            개인정보처리방침
          </Link>
          <span className="mx-2">|</span>
          <Link to="/policy" className="hover:underline">
            운영정책
          </Link>
          <span className="mx-2">|</span>
          <Link to="/notice" className="hover:underline">
            공지사항
          </Link>
          <span className="mx-2">|</span>
          <Link to="/help" className="hover:underline">
            도움센터
          </Link>
        </div>

        {/* 소셜 아이콘 섹션 */}
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://www.instagram.com">
            <img
              src="../../../public/assets/icons/Instagram.svg"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
          <a href="https://www.facebook.com">
            <img
              src="../../../public/assets/icons/Facebook.svg"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a href="https://www.twitter.com">
            <img
              src="../../../public/assets/icons/Twitter.svg"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a href="https://www.kakaocorp.com">
            <img
              src="../../../public/assets/icons/KakaoTalk.svg"
              alt="KakaoTalk"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
