import { useState } from "react";
import { useForm } from "react-hook-form";

import ProductCategory from "@components/ProductCategory";
import ProductImageUploader from "@components/ProductImageUploader";
import InputField from "@components/InputField";

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [mainImages, setMainImages] = useState([]);

  const onSubmit = async data => {
    const productData = {
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      content: data.content,
      extra: {
        category: categories,
      },
      mainImages,
    };

    console.log("Product Data", productData);
  };

  return (
    <div className="container">
      <h1 className="page-title">상품 등록</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="pb-[60px]">
        <div className="mb-16">
          <InputField
            label="상품명"
            id="productName"
            type="text"
            placeholder="상품명을 입력해주세요."
            register={register("name", {
              required: "상품명을 입력해주세요.",
            })}
            className="flex-grow section-title"
          />
        </div>

        <div className="flex gap-[80px] mb-16">
          <InputField
            label="상품 가격"
            id="productprice"
            type="number"
            placeholder="상품 가격을 입력해주세요."
            register={register("price", {
              required: "상품 가격을 입력해주세요.",
            })}
            className="section-title"
          >
            <span className="text-2xl">원</span>
          </InputField>

          <InputField
            label="상품 수량"
            id="productQuantity"
            type="number"
            placeholder="상품 수량을 입력해주세요."
            register={register("quantity", {
              required: "상품 수량을 입력해주세요.",
            })}
            className="section-title"
          >
            <span className="text-2xl">개</span>
          </InputField>
        </div>

        <ProductCategory value={categories} onChange={setCategories} />

        <ProductImageUploader value={mainImages} onChange={setMainImages} />

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
