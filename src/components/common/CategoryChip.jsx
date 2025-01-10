import PropTypes from "prop-types";

CategoryChip.propTypes = {
  category: PropTypes.string,
};

export default function CategoryChip({ category }) {
  let categoryName = "";

  // 지정한 카테고리명 표시
  switch (category) {
    case "character":
      categoryName = "캐릭터";
      break;
    case "artist":
      categoryName = "가수/연예인";
      break;
    case "media":
      categoryName = "영화/드라마";
      break;
    case "figurines":
      categoryName = "인형/피규어";
      break;
    case "apparel":
      categoryName = "패션/액세서리";
      break;
    case "stationery":
      categoryName = "문구/잡화";
      break;
    default:
      categoryName = "기타";
  }

  return (
    <div className="px-2 py-1 w-fit text-[10px] text-white rounded-full bg-point-blue">
      {categoryName}
    </div>
  );
}
