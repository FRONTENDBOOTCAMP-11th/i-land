import PropTypes from "prop-types";

SearchPopulars.propTypes = {
  items: PropTypes.array.isRequired,
};

export default function SearchPopulars({ items }) {
  return (
    <div>
      <h2 className="section-title">인기 검색어</h2>
      <div className="flex flex-wrap gap-[20px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1 text-[16px] text-white rounded-full bg-point-blue"
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
