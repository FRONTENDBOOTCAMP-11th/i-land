import PropTypes from "prop-types";

export default function ProductImageUploader({ value = [], onChange }) {
  const handleFileChange = event => {
    const files = Array.from(event.target.files);

    if (files.length === 0) return; // 파일이 없으면 아무것도 하지 않음

    const newImages = files.map(file => ({
      path: URL.createObjectURL(file), // 브라우저에서 미리보기 가능한 URL 생성
      name: file.name,
      originalname: file.name,
    }));

    const updatedImages = [...value, ...newImages].slice(0, 5); // 최대 5장 제한
    onChange(updatedImages); // 부모 컴포넌트로 업데이트된 배열 전달
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
              src={image.path} // 미리보기 URL로 이미지 표시
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
