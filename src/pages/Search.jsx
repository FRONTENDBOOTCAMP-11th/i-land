import closeIcon from "/src/assets/icons/close.svg";

export default function Search() {
  return (
    <div className="fixed inset-0 p-[100px] pt-[60px] flex flex-col bg-white">
      <div className="flex items-center justify-end">
        <button>
          <img className="w-5 h-5" src={closeIcon} alt="Close Search Modal" />
        </button>
      </div>

      <div className="mb-[50px]">
        <input
          type="text"
          className="w-full p-4 text-xl border-b-4 border-solid border-gray3 focus-within:border-point-blue focus:outline-none"
          placeholder="검색어를 입력해주세요."
        />
      </div>

      <div className="mb-[50px]">
        <h2 className="section-title">최근 검색어</h2>
        <div className="flex flex-wrap gap-2">
          {["검색어1", "검색어2", "검색어3", "검색어4"].map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm text-blue-500 bg-blue-100 rounded-full"
            >
              {item}
              &times;
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="section-title">인기 검색어</h2>
        <div className="flex flex-wrap gap-2">
          {["인기검색1", "인기검색2", "인기검색3"].map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm text-blue-500 bg-blue-100 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
