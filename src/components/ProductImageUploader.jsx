import PropTypes from "prop-types";

import useAxiosInstance from "@hooks/useAxiosInstance";

export default function ProductImageUploader({ value = [], onChange }) {
  const axios = useAxiosInstance();

  const handleFileChange = async event => {
    const files = Array.from(event.target.files);

    if (files.length === 0) return;

    try {
      const uploadImages = await Promise.all(
        files.map(async file => {
          const formData = new FormData();
          formData.append("attach", file);

          const response = await axios("/files", {
            method: "post",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            data: formData,
          });

          if (!response.data.item || !Array.isArray(response.data.item)) {
            throw new Error("Invalid response format: Missing 'item' array");
          }

          return response.data.item.map(item => ({
            path: item.path,
            name: item.name,
            originalname: file.name,
          }));
        }),
      );

      const flattenedImages = uploadImages.flat();

      const updatedImages = [...value, ...flattenedImages].slice(0, 5);
      onChange(updatedImages);
    } catch (error) {
      console.error("이미지 업로드 중 오류:", error);
    }
  };

  return (
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
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

ProductImageUploader.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string.isRequired,
      originalname: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
