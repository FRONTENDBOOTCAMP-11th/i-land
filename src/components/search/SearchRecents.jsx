import PropTypes from "prop-types";

SearchRecents.propTypes = {
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func,
};

export default function SearchRecents({ items, onRemove }) {
  return (
    <div className="mb-[50px]">
      <h2 className="section-title">최근 검색어</h2>
      <div className="flex flex-wrap gap-[20px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1 text-[16px] text-white rounded-full bg-point-blue"
          >
            <span>{item}</span>
            {onRemove && (
              <button className="text-white" onClick={() => onRemove(item)}>
                <img
                  src="/assets/icons/close-sm.svg"
                  alt="Remove Recent Search"
                />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
