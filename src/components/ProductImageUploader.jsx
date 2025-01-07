import PropTypes from "prop-types";

import useAxiosInstance from "@hooks/useAxiosInstance";

export default function ProductImageUploader({ value = [], onChange }) {
  const axios = useAxiosInstance();

  const handleFileChange = async event => {
    const files = Array.from(event.target.files);

    console.log("Selected Files:", files);

    if (files.length === 0) return; // 파일이 없으면 아무것도 하지 않음
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

          return {
            path: response.data.path, // 서버에서 반환된 이미지 경로
            name: file.name,
            originalname: file.name,
          };
        }),
      );

      const updatedImages = [...value, ...uploadImages].slice(0, 5);
      onChange(updatedImages);
    } catch (error) {
      console.error("이미지 업로드 중 오류:", error);
    }
  };

  const handleRemoveImage = index => {
    const updatedImages = value.filter((_, i) => i !== index);
    onChange(updatedImages); // 이미지 제거 후 업데이트
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

      <div className="flex flex-wrap gap-4 mt-4">
        {value.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[100px] h-[100px]"
          >
            <img
              src={image.path}
              alt={image.originalname || `이미지 ${index + 1}`}
              className="object-cover w-full h-full rounded"
            />
            <button
              type="button"
              className="absolute top-0 right-0 p-1 text-white bg-red-500 rounded-full"
              onClick={() => handleRemoveImage(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

ProductImageUploader.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string, // 필수가 아님
      name: PropTypes.string.isRequired,
      originalname: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
