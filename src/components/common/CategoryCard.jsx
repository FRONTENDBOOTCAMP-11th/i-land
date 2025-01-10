import PropTypes from "prop-types";

CategoryCard.propTypes = {
  categoryIconSrc: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default function CategoryCard({
  categoryIconSrc,
  categoryName,
  categoryText,
  onClick,
}) {
  return (
    <li className="text-center" onClick={() => onClick?.(categoryName)}>
      <img
        src={categoryIconSrc}
        alt={`${categoryText} 아이콘`}
        className="size-[140px] border-solid border-4 border-gray1 rounded-[40px] mb-4"
      />
      <p className="text-[18px]">{categoryText}</p>
    </li>
  );
}
