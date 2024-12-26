export default function ProductCreate() {
  return (
    <div className="container">
      <h1 className="page-title">상품 등록</h1>

      <form action="">
        <div className="mb-[40px]">
          <label className="section-title" htmlFor="productName">
            상품명
          </label>
          <input
            type="text"
            id="productName"
            className="w-full py-[15px] text-2xl leading-none border-b-4 border-solid border-gray3 focus-within:border-point-blue focus:outline-none"
            placeholder="상품명을 입력해주세요"
          />
        </div>

        <div className="flex gap-[80px] mb-[40px]">
          <div className="relative flex-1">
            <label className="section-title" htmlFor="productPrice">
              상품 가격
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="productPrice"
                placeholder="금액을 입력해주세요."
                className="flex-1 py-[15px] text-2xl leading-none border-b-4 border-solid border-gray3 focus-within:border-point-blue focus:outline-none"
              />
              <span className="absolute right-0 text-2xl leading-none bottom-5">
                원
              </span>
            </div>
          </div>

          <div className="relative flex-1">
            <label className="section-title" htmlFor="productPrice">
              상품 가격
            </label>
            <div className="flex items-center">
              <input
                type="number"
                id="productPrice"
                placeholder="금액을 입력해주세요."
                className="flex-1 py-[15px] text-2xl leading-none border-b-4 border-solid border-gray3 focus-within:border-point-blue focus:outline-none"
              />
              <span className="absolute right-0 text-2xl leading-none bottom-5">
                원
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <label className="section-title" htmlFor="category-1">
            상품 카테고리
          </label>
          <div className="flex gap-[30px] mb-[40px]">
            <select
              id="category-1"
              className="w-[400px] h-[40px] border border-gray3 rounded-lg px-3 text-xs pr-5"
              style={{
                backgroundPosition: "calc(100% - 20px) center", // 오른쪽에서 20px 왼쪽으로 이동
                backgroundRepeat: "no-repeat", // 화살표 반복 방지
              }}
            >
              <option>상품 카테고리 1</option>
              <option>카테고리 A</option>
              <option>카테고리 B</option>
            </select>
            <select id="category-2" className="w-[400px] h-[40px]">
              <option>상품 카테고리 2</option>
              <option>카테고리 C</option>
              <option>카테고리 D</option>
            </select>
          </div>
        </div>

        {/* 상품 설명 */}
        <div className="mb-6">
          <label
            htmlFor="product-description"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            상품 설명
          </label>
          <textarea
            id="product-description"
            rows="4"
            placeholder="상품 설명을 입력해주세요"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-6 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            등록 취소
          </button>
          <button
            type="submit"
            className="px-6 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
}
