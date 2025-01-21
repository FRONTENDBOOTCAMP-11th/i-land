import PropTypes from "prop-types";
import { Link } from "react-router-dom";

MyPurchaseCard.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.array,
  }),
};

export default function MyPurchaseCard({ data }) {
  return (
    <li className="p-10 flex justify-between gap-x-[60px] border border-gray2 rounded-lg box-border items-center">
      <Link to={`/products/${data?.products?.[0]._id}`}>
        <div className="flex gap-x-[60px]">
          <img
            src={`https://11.fesp.shop/${data?.products?.[0].image?.path}`}
            className="size-[150px]"
            alt="상품 대표 이미지"
          />
          <div className="grid grid-flow-row gap-y-[14px] items-center">
            <h2 className="text-[32px] font-bold">
              {data?.products?.[0]?.name}
            </h2>
            {data?.products.length >= 2 && (
              <p className="font-bold">{`외 ${data?.products.length} 건`}</p>
            )}
            <p className="text-[18px]">
              <span className="text-[24px] font-bold mr-2">
                {(data?.products[0].price).toLocaleString()}
              </span>
              원
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
