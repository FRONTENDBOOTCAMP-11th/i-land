import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-point-blue text-white py-[60px]">
      <div className="container space-y-4 text-center">
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
        <div className="flex justify-center mt-6 space-x-6">
          <a href="https://www.instagram.com">
            <img
              src="/assets/icons/instagram.svg"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
          <a href="https://www.facebook.com">
            <img
              src="/assets/icons/facebook.svg"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a href="https://www.twitter.com">
            <img
              src="/assets/icons/twitter.svg"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a href="https://www.kakaocorp.com">
            <img
              src="/assets/icons/kakaotalk.svg"
              alt="KakaoTalk"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
