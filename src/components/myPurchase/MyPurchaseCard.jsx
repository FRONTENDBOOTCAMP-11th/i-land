import PurchaseContent from "@components/myPurchase/PurchaseContent";
import PropTypes from "prop-types";

MyPurchaseCard.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.array,
  }),
};

export default function MyPurchaseCard({ data }) {
  const multiPurchase = data?.products.map(item => (
    <PurchaseContent key={item._id} data={item} />
  ));

  return (
    <li className="p-10 border border-gray2 rounded-lg box-border items-start flex flex-col gap-y-10">
      {data?.products.length > 1 ? (
        multiPurchase
      ) : (
        <PurchaseContent
          key={data?.products?.[0]._id}
          data={data?.products[0]}
        />
      )}
    </li>
  );
}
