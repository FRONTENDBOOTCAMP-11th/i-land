export default function ProductCreate() {
  return (
    <div className="container">
      <h1 className="page-title">상품 등록</h1>

      <form action="">
        <div className="mb-16">
          <label className="section-title" htmlFor="productName">
            상품명
          </label>
          <input
            type="text"
            id="productName"
            className="w-full py-[15px] text-2xl leading-none border-b-4 border-solid border-gray3 focus-within:border-point-blue focus:outline-none"
            placeholder="상품명을 입력해주세요."
          />
        </div>

        <div className="flex gap-[80px] mb-16">
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

        <div className="mb-16">
          <label className="section-title" htmlFor="category-1">
            상품 카테고리
          </label>
          <div className="flex gap-[30px]">
            <select
              id="category-1"
              className="w-[400px] h-[40px] border border-gray2 rounded-lg px-3 text-xs focus:outline-none"
              name="selectedCategory"
            >
              <option>카테고리를 선택해주세요.</option>
              <option value="cartoon">만화/애니메이션</option>
              <option value="idol">아이돌</option>
              <option value="film">영화/드라마</option>
              <option value="figure">인형/피규어</option>
              <option value="fashion">패션/의류</option>
              <option value="stationary">문구/잡화</option>
            </select>
            <select
              id="category-2"
              className="w-[400px] h-[40px] border border-gray2 rounded-lg px-3 text-xs focus:outline-none"
            >
              <option>카테고리를 선택해주세요.</option>
              <option value="cartoon">만화/애니메이션</option>
              <option value="idol">아이돌</option>
              <option value="film">영화/드라마</option>
              <option value="figure">인형/피규어</option>
              <option value="fashion">패션/의류</option>
              <option value="stationary">문구/잡화</option>
            </select>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-2.5">
            <label className="section-title">상품 이미지</label>
            <span className="mb-[20px] text-gray3">
              상품 이미지 1~5장 필수 첨부 (jpg/jpeg/png)
            </span>
          </div>

          <div>
            <label
              className="inline-flex items-center justify-center w-[150px] h-[40px] border-2 border-gray2 rounded-md cursor-pointer font-bold text-lg"
              htmlFor="productImage"
            >
              이미지 첨부
            </label>
            <input
              id="productImage"
              type="file"
              multiple
              accept="image/png, image/jpeg, image/jpg"
              className="hidden"
            />
          </div>
        </div>

        <div className="mb-16">
          <label className="section-title" htmlFor="productDescription">
            상품 설명
          </label>
          <textarea
            id="productDescription"
            className="w-full h-[400px] p-[40px] border border-gray2 rounded-lg focus:outline-none resize-none text-2xl"
            name="productDescription"
            placeholder="상품 설명을 입력해주세요."
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
