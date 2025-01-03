import { useState } from "react";

import ProductInput from "@components/product-create/ProductInput";
import ProductCategory from "@components/product-create/ProductCategory";

export default function Create() {
  const [newProduct, setNewProduct] = useState({
    name: "", // 상품명
    price: "", // 상품 가격
    quantity: "", // 상품 수량
    content: "", // 상세 설명 (HTML)
    mainImages: [], // 이미지 배열
    extra: {
      isNew: false, // 신상품 여부
      category: [], // 카테고리
      sort: 0, // 정렬 기준
    },
  });

  const handleChange = (id, value) => {
    setNewProduct(prev => ({ ...prev, [id]: value }));
  };

  const handleCategoryChange = categories => {
    setNewProduct(prev => ({
      ...prev,
      extra: {
        ...prev.extra,
        category: categories,
      },
    }));
  };

  return (
    <div className="container">
      <h1 className="page-title">상품 등록</h1>
      <form action="" className="pb-[60px]">
        <div className="mb-16">
          <ProductInput
            label="상품명"
            id="productName"
            placeholder="상품명을 입력해주세요."
            value={newProduct.name}
            onChange={value => handleChange("name", value)}
          />
        </div>

        <div className="flex gap-[80px] mb-16">
          <ProductInput
            type="number"
            label="상품 가격"
            id="productPrice"
            placeholder="상품 가격을 입력해주세요."
            unit="원"
            value={newProduct.price}
            onChange={value => handleChange("price", value)}
            isFlexible={true}
          />

          <ProductInput
            type="number"
            label="상품 수량"
            id="productQuantity"
            placeholder="상품 수량을 입력해주세요."
            unit="개"
            value={newProduct.quantity}
            onChange={value => handleChange("quantity", value)}
            isFlexible={true}
          />
        </div>

        <ProductCategory
          value={newProduct.extra.category}
          onChange={handleCategoryChange}
        />

        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-5">
            <label className="section-title">상품 이미지</label>
            <span className="mb-[20px] text-gray3">
              상품 이미지 1~5장 필수 첨부 (jpg/jpeg/png)
            </span>
          </div>

          <div>
            <label
              className="h-[50px] py-[14px] px-9 border-2 border-gray2 rounded-md cursor-pointer font-bold text-lg"
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

        <div className="flex items-center justify-center gap-10">
          <button
            type="button"
            className="w-[400px] h-[60px] border-2 border-gray3 rounded-lg text-gray3 font-bold text-2xl"
          >
            등록 취소
          </button>

          <button
            type="submit"
            className="w-[400px] h-[60px] bg-point-blue text-white font-bold text-2xl rounded-lg"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
}
