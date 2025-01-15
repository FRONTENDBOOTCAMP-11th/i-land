import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // 검색 실행 함수
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  // 최근 검색어 클릭 시 자동 검색
  const handleRecentSearchClick = term => {
    setSearchTerm(term);
    navigate(`/search-results?query=${encodeURIComponent(term)}`);
  };

  // 모달 닫기 버튼 기능 추가
  const nav = useNavigate();
  <button onClick={() => nav(-1)}>
    <img
      className="w-5 h-5"
      src="/assets/icons/close.svg"
      alt="Close Search Modal"
    />
  </button>;

  return (
    <div className="fixed inset-0 px-[100px] mt-[30px] mb-[10px] flex flex-col bg-white">
      <div className="flex items-center justify-end">
        <button>
          <img
            className="w-5 h-5"
            src="/assets/icons/close.svg"
            alt="Close Search Modal"
          />
        </button>
      </div>

      <div className="flex justify-center">
        <div className="max-w-[800px] w-full">
          {/* 검색어 입력란 */}
          <div className="mb-[50px] flex items-center justify-between relative">
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSearch()}
              className="w-full py-[18px] text-2xl leading-none border-b-4 border-solid border-gray3 focus-within:border-point-blue focus:outline-none"
              placeholder="검색어를 입력해주세요."
            />
            <button
              onClick={() => setSearchTerm("")}
              className="flex items-center justify-center -ml-5"
            >
              <img
                className="w-5 h-5"
                src="/assets/icons/close.svg"
                alt="Close Search Modal"
              />
            </button>
          </div>

          {/* 최근 검색어 */}
          <div className="mb-[50px]">
            <h2 className="section-title">최근 검색어</h2>
            <div className="flex flex-wrap gap-[20px]">
              {[
                "기이이이이이이이인 검색어",
                "짧은거",
                "기이이이이이이이인 검색어",
                "짧은거",
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleRecentSearchClick(item)} // 클릭 시 검색 실행
                  className="cursor-pointer flex items-center gap-2 px-3 py-1 text-[16px] text-white rounded-full bg-point-blue"
                >
                  <span>{item}</span>
                  <button className="text-white">
                    <img src="/assets/icons/close-sm.svg" alt="Close Chips" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 인기 검색어 */}
          <div>
            <h2 className="section-title">인기 검색어</h2>
            <div className="flex flex-wrap gap-[20px]">
              {[
                "아무 검색어 추천",
                "아무 검색어",
                "역시 아무 검색어나 입력함",
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleRecentSearchClick(item)} // 클릭 시 검색 실행
                  className="cursor-pointer flex items-center gap-2 px-3 py-1 text-[16px] text-white rounded-full bg-point-blue"
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
