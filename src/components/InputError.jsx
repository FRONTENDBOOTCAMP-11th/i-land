import PropTypes from "prop-types";

InputError.propTypes = {
  target: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default function InputError({ target }) {
  if (!target) return;
  return <p className="text-point-red mt-[2px]">{target?.message}</p>;
}
