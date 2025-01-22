import PurchaseContent from "@components/myPurchase/PurchaseContent";
import PropTypes from "prop-types";

MyPurchaseCard.propTypes = {
  data: PropTypes.shape({
    products: PropTypes.array,
    createdAt: PropTypes.string,
  }),
};

export default function MyPurchaseCard({ data }) {
  const purchaseDate = new Date(data?.createdAt)
    .toLocaleDateString()
    .split("/");
  const purchaseDateString = `${purchaseDate[2]}년 ${purchaseDate[0]}월 ${purchaseDate[1]}일`;
  console.log(purchaseDate);
  const multiPurchase = data?.products.map(item => (
    <PurchaseContent key={item._id} data={item} />
  ));

  return (
    <li className="p-10 border border-gray2 rounded-lg box-border items-start flex flex-col gap-y-10">
      <p className="text-lg font-bold">{purchaseDateString}</p>
      {data?.products.length > 1 && (
        <p>
          <strong>{data?.products?.[0].name}</strong> 외{" "}
          <strong>{data?.products.length - 1}</strong>건
        </p>
      )}

      {data?.products.length > 1 ? (
        // 한 건의 결제 내역에 여러 상품이 포함된 경우(예: 장바구니의 상품 일괄 구매)
        multiPurchase
      ) : (
        // 한 건의 결제 내역에 하나의 상품이 포함된 경우(예: 상품 상세 페이지에서 바로구매)
        <PurchaseContent key={data?.products[0]._id} data={data?.products[0]} />
      )}
    </li>
  );
}
