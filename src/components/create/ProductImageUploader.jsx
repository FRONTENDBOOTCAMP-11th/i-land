import { useState } from "react";
import PropTypes from "prop-types";

export default function ProductImageUploader({ value = [], onChange }) {
  // const axios = useAxiosInstance();
  const [previewImages, setPreviewImages] = useState([]);

  const handleFileChange = async event => {
    const files = Array.from(event.target.files);

    if (files.length === 0) return;

    // 미리보기 URL 생성
    const newPreviewImages = files.map(file => URL.createObjectURL(file));
    setPreviewImages(prev => [...prev, ...newPreviewImages].slice(0, 5));

    // 파일 정보를 클라이언트에서 관리
    const newImages = files.map(file => ({
      path: `/files/final06/${file.name}`,
      name: file.name,
      originalname: file.name,
      file, // 실제 파일 객체 저장 (서버 업로드 시 사용)
    }));

    const updatedImages = [...value, ...newImages].slice(0, 5);
    onChange(updatedImages);
  };

  const handleRemovePreview = index => {
    const removedPreview = previewImages[index];
    URL.revokeObjectURL(removedPreview); // URL 해제
    setPreviewImages(prev => prev.filter((_, i) => i !== index));
    onChange(value.filter((_, i) => i !== index));
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

      <div className="flex flex-wrap gap-2 mt-5">
        {previewImages.map((src, index) => (
          <div
            key={index}
            className="relative w-24 h-24 border rounded-full border-gray2"
          >
            <img
              src={src}
              alt={`미리보기 ${index + 1}`}
              className="object-cover w-full h-full rounded"
            />
            <button
              type="button"
              onClick={() => handleRemovePreview(index)}
              className="absolute flex items-center justify-center w-4 h-4 rounded-full top-[2px] right-[2px]"
            >
              <img
                className="w-3 h-3"
                src="/assets/icons/close.svg"
                alt="Close Image Preview"
              />
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
      path: PropTypes.string,
      name: PropTypes.string.isRequired,
      originalname: PropTypes.string.isRequired,
      file: PropTypes.instanceOf(File),
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};
