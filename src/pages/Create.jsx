import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosInstance from "@hooks/useAxiosInstance";
import useUserStore from "@zustand/userStore";

import InputField from "@components/common/InputField";
import ProductCategory from "@components/create/ProductCategory";
import ProductImageUploader from "@components/create/ProductImageUploader";
import ProductContent from "@components/create/ProductContent";
import { Helmet } from "react-helmet-async";

export default function Create() {
  const axios = useAxiosInstance();
  const { user } = useUserStore();
  const accessToken = user?.accessToken;
  console.log(accessToken);

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
        price: Number(data.price),
        quantity: Number(data.quantity),
        content: data.content,
        extra: {
          category: categories,
        },
        mainImages, // TODO: 이미지 미리보기 기능 개발하기
      };

      const response = await axios.post("/seller/products", productData);

      // 등록 상품 정보 브라우저 콘솔 확인
      console.log("등록 상품 정보: ", response.data);

      alert("상품 등록이 완료되었습니다.");
      reset();
      setMainImages([]);
      setCategories([]);
    } catch (error) {
      console.error("상품 등록 실패:", error.respose || error);
      alert("상품 등록에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <Helmet>
        <title>상품 등록 - I-LAND</title>

        <meta property="og:title" content="상품 등록 - I-LAND" />
        <meta
          property="og:description"
          content="I-LAND에서 내 취향을 모아보세요."
        />
      </Helmet>
      <div className="container">
        <h1 className="page-title">상품 등록</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="pb-[60px]">
          <div className="mb-16">
            <InputField
              label="상품명"
              id="productName"
              type="text"
              placeholder="예) 최강야구 이대호 굿즈 3종 세트"
              register={register("name", {
                required: "상품명을 입력해주세요.",
                minLength: {
                  value: 10,
                  message: "상품명을 10자 이상 입력해주세요.",
                },
              })}
              className="flex-grow section-title"
              error={errors.name}
            />
          </div>

          <div className="flex gap-[80px] mb-16">
            <InputField
              label="상품 가격"
              id="productprice"
              type="number"
              placeholder="예) 10,000원"
              register={register("price", {
                required: "상품 가격을 입력해주세요.",
                valueAsNumber: true,
                validate: value =>
                  value > 0 || "상품 가격은 1원 이상이어야 합니다.",
              })}
              className="section-title"
              error={errors.price}
            >
              <span className="text-2xl">원</span>
            </InputField>

            <InputField
              label="상품 수량"
              id="productQuantity"
              type="number"
              placeholder="예) 10개"
              register={register("quantity", {
                required: "상품 수량을 입력해주세요.",
                valueAsNumber: true,
                validate: value =>
                  value > 0 || "상품 수량은 1개 이상이어야 합니다.",
              })}
              className="section-title"
              error={errors.quantity}
            >
              <span className="text-2xl">개</span>
            </InputField>
          </div>

          <ProductCategory value={categories} onChange={setCategories} />

          <ProductImageUploader value={mainImages} onChange={setMainImages} />

          <ProductContent register={register} error={errors.content} />

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
    </>
  );
}
