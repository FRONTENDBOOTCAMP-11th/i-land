import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";

import useAxiosInstance from "@hooks/useAxiosInstance";

const colorStyles = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: "white",
    width: "100%",
    minWidth: "460px",
    padding: "10px 0",
    borderWidth: "2px",
    borderColor: state.isFocused ? "#0093FF" : "#CCCCCC",
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "#0093FF"
        : isFocused
          ? "#f0f8ff"
          : undefined,
      color: "black",
    };
  },
  multiValue: (styles, { data }) => ({
    ...styles,
    color: "white",
    backgroundColor: "#0093FF",
    borderRadius: "9999px",
    padding: "5px 10px",
    fontSize: "18px",
  }),
  multiValueLabel: styles => ({
    ...styles,
    color: "white",
  }),
  multiValueRemove: styles => ({
    ...styles,
    color: "white",
    ":hover": {
      backgroundColor: "#0093FF",
      color: "white",
    },
  }),
};

export default function ProductCategory({ value, onChange }) {
  const axios = useAxiosInstance();

  const {
    data: categoryOptions = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("/codes/productCategory");
      const categories = response.data.item.productCategory.codes;

      return categories.map(category => ({
        value: category.code,
        label: category.value,
        color: "#0093FF",
      }));
    },
  });

  const handleSelectChange = selectedOptions => {
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
