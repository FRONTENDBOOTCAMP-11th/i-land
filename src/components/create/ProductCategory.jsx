import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import chroma from "chroma-js";

import useAxiosInstance from "@hooks/useAxiosInstance";

const colorStyles = {
  control: styles => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isSelected
        ? data.color
        : isFocused
          ? color.alpha(0.1).css()
          : undefined,
      color: isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

export default function ProductCategory({ value, onChange }) {
  const axios = useAxiosInstance();

  // Fetch 카테고리 데이터
  const {
    data: categoryOptions = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("/codes/productCategory");
      const categories = response.data.item.productCategory.codes;
      console.log("categories", categories);

      return categories.map(category => ({
        value: category.code, // 고유 코드
        label: category.value, // 카테고리 이름
        color: "#0052CC", // 기본 색상
      }));
    },
  });

  const handleSelectChange = selectedOptions => {
    // 선택된 옵션 배열에서 값만 추출하여 부모로 전달
    const selectedValues = selectedOptions.map(option => option.value);
    onChange(selectedValues);
  };

  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p>Error loading categories!</p>;

  return (
    <div className="mb-16">
      <label className="section-title" htmlFor="category-1">
        상품 카테고리
      </label>
      <div className="flex gap-[30px]">
        <Select
          isMulti
          options={categoryOptions}
          value={categoryOptions.filter(option => value.includes(option.value))}
          onChange={handleSelectChange}
          styles={colorStyles}
          placeholder="상품 카테고리를 선택해주세요."
        />
      </div>
    </div>
  );
}

ProductCategory.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
