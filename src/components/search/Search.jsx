import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import useSearchStore from "@zustand/useSearchStore";
import SearchRecents from "@components/search/SearchRecents";
import SearchPopulars from "@components/search/SearchPopulars";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null); // Input에 접근하기 위한 ref

  const { isSearchOpen, closeSearch } = useSearchStore();

  const recentKeywords = ["개발 예정입니다", "시간이 없어요"];
  const popularKeywords = ["나좀 살려줘", "이거 다 개발하고 싶어"];

  useEffect(() => {
    if (isSearchOpen) {
      // 모달이 열릴 때 body 스크롤 비활성화
      document.body.style.overflow = "hidden";
    } else {
      // 모달이 닫힐 때 body 스크롤 활성화
      document.body.style.overflow = "auto";
    }

    return () => {
      // 컴포넌트 언마운트 시 초기화
      document.body.style.overflow = "auto";
    };
  }, [isSearchOpen]);

  const handleInputChange = e => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" && keyword.trim() !== "") {
      closeSearch();
      navigate(`/search?keyword=${encodeURIComponent(keyword.trim())}`); // "/search"로 라우팅해서 <SearchResults /> 컴포넌트로 이동시키기
    }
  };

  const handleInputClear = () => {
    setKeyword("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 px-[100px] flex flex-col bg-white z-50">
      <div className="flex items-center justify-end mt-[30px] mb-[10px]">
        <button onClick={closeSearch}>
          <img
            className="w-5 h-5"
            src="/assets/icons/close.svg"
            alt="Close Search Modal"
          />
        </button>
      </div>

      <div className="flex justify-center">
        <div className="max-w-[800px] w-full">
          <div className="mb-[50px] flex items-center justify-between relative">
            <input
              type="text"
              className="w-full py-[18px] text-2xl leading-none border-b-4 border-solid border-gray3 focus-within:border-point-blue focus:outline-none"
              ref={inputRef}
              value={keyword}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="검색어를 입력해주세요."
            />
            <button
              className="flex items-center justify-center -ml-5"
              onClick={handleInputClear}
            >
              <img
                className="w-5 h-5"
                src="/assets/icons/close.svg"
                alt="Close Search Modal"
              />
            </button>
          </div>

          <SearchRecents items={recentKeywords} onRemove={console.log} />

          <SearchPopulars items={popularKeywords} />
        </div>
      </div>
    </div>
  );
}
