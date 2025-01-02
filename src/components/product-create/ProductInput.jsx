import PropTypes from "prop-types";

export default function ProductInput({
  type = "text",
  label,
  id,
  placeholder,
  unit,
  value,
  onChange,
  isFlexible = false,
}) {
  return (
    <div className={isFlexible ? "relative flex-1" : "mb-16"}>
      <label className="section-title" htmlFor={id}>
        {label}
      </label>
      <div className="flex items-center">
        <input
          type={type}
          id={id}
          className={`${isFlexible ? "flex-1" : "w-full"} py-[15px] text-2xl leading-none border-b-4 border-solid border-gray3 focus-within:border-point-blue focus:outline-none`}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          min={type === "number" ? 0 : undefined}
        />
        {unit && (
          <span className="absolute right-0 text-2xl leading-none bottom-5">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

// PropTypes 정의
ProductInput.propTypes = {
  type: PropTypes.oneOf(["text", "number"]),
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  unit: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  isFlexible: PropTypes.bool,
};
