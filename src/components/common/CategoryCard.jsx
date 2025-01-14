import PropTypes from "prop-types";

CategoryCard.propTypes = {
  categoryIconSrc: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryText: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default function CategoryCard({
  categoryIconSrc,
  categoryName,
  categoryText,
  isSelected,
  onClick,
}) {
  return (
    <li className="text-center" onClick={() => onClick?.(categoryName)}>
      <img
        src={categoryIconSrc}
        alt={`${categoryText} 아이콘`}
        className={`size-[140px] border-solid border-4 rounded-[40px] mb-4 ${isSelected ? "border-point-blue" : "border-gray1"}`}
      />
      <p className="text-[18px]">{categoryText}</p>
    </li>
  );
}
