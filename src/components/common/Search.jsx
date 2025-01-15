import { useEffect } from "react";

import useSearchStore from "@zustand/useSearchStore";

export default function Search() {
  const { isSearchOpen, closeSearch } = useSearchStore();

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

      <div className="flex justify-center flex-1">
        <div className="max-w-[800px] w-full">
          <div className="mb-[50px] flex items-center justify-between relative">
            <input
              type="text"
              className="w-full py-[18px] text-2xl leading-none border-b-4 border-solid border-gray3 focus-within:border-point-blue focus:outline-none"
              placeholder="검색어를 입력해주세요."
            />
            <button className="flex items-center justify-center -ml-5">
              <img
                className="w-5 h-5"
                src="/assets/icons/close.svg"
                alt="Close Search Modal"
              />
            </button>
          </div>

          <div className="mb-[50px]">
            <h2 className="section-title">최근 검색어</h2>
            <div className="flex flex-wrap gap-[20px]">
              {[
                "기이이이이이이이인 검색어",
                "짧은거",
                "기이이이이이이이인 검색어",
                "짧은거",
                "기이이이이이이이인 검색어",
                "짧은거",
                "짧은거",
                "짧은거",
                "짧은거",
                "짧은거",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1 text-[16px] text-white rounded-full bg-point-blue"
                >
                  <span>{item}</span>
                  <button className="text-white">
                    <img src="/assets/icons/close-sm.svg" alt="Close Chips" />
                  </button>
                </div>
              ))}
            </div>
          </div>

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
                  className="flex items-center gap-2 px-3 py-1 text-[16px] text-white rounded-full bg-point-blue"
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
