import { useState } from "react";
import { useForm } from "react-hook-form";

import ProductCategory from "@components/ProductCategory";
import ProductImageUploader from "@components/ProductImageUploader";
import InputField from "@components/InputField";
import ProductContent from "@components/ProductContent";

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
    try {
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

      // POST 상품 등록 요청

      // 성공 시
      alert("상품 등록이 완료되었습니다.");
      reset(); // 입력된 값 초기화
      setMainImages([]);
      setCategories([]);
    } catch (error) {
      console.error("상품 등록 실패:", error);
      alert("상품 등록에 실패했습니다. 다시 시도해주세요.");
    }
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

        <ProductContent register={register} error={errors.description} />

        <div className="flex items-center justify-center gap-10">
          <button
            type="button"
            className="w-[400px] h-[60px] border-2 border-gray3 rounded-lg text-gray3 font-bold text-2xl"
            onClick={() => reset()}
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
