import PropTypes from "prop-types";
import { Link } from "react-router-dom";

PurchaseContent.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default function PurchaseContent({ data }) {
  return (
    <Link to={`/products/${data?._id}`}>
      <div className="flex gap-x-[60px]">
        <img
          src={`https://11.fesp.shop${data?.image?.path || "files/final06/default-profile.png"}`}
          className="size-[150px]"
          alt="상품 대표 이미지"
        />
        <div className="grid grid-flow-row gap-y-[14px] items-center">
          <h2 className="text-[32px] font-bold">{data?.name}</h2>
          <p className="text-[18px]">
            <span className="text-[24px] font-bold mr-2">
              {data?.price.toLocaleString()}
            </span>
            원
          </p>
        </div>
      </div>
    </Link>
  );
}
