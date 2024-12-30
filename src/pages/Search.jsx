import closeIcon from "/src/assets/icons/close.svg";

export default function Search() {
  return (
    <div className="fixed inset-0 px-[100px] mt-[30px] mb-[10px] flex flex-col bg-white">
      <div className="flex items-center justify-end">
        <button>
          <img className="w-5 h-5" src={closeIcon} alt="Close Search Modal" />
        </button>
      </div>

      <div className="flex justify-center">
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
                src={closeIcon}
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
                  className="flex items-center gap-2 px-3 py-1 mb-[20px] text-[16px] text-white rounded-full bg-point-blue"
                >
                  <span>{item}</span>
                  <button className="text-white">
                    <img
                      src="/src/assets/icons/close-sm.svg"
                      alt="Close Chips"
                    />
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
                  className="flex items-center gap-2 px-3 py-1 mb-[20px] text-[16px] text-white rounded-full bg-point-blue"
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
