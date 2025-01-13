import SellerCard from "@components/main/SellerCard";
import PropTypes from "prop-types";

TopSellerList.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
};

export default function TopSellerList({ label, data }) {
  // 상품의 개수만큼 margin right value 지정
  const marginRightValue = 1000 - 200 * (10 - data?.length);

  // SellerCard 에 props 로 하나의 item 전달
  const sellerList = data?.map(item => (
    <SellerCard key={item._id} item={item} />
  ));

  return (
    <section className="mb-[70px]">
      <h2 className="section-title">{label}</h2>
      <div className="overflow-x-scroll scrollbar-hide">
        <ul
          className={`grid grid-cols-${data?.length <= 5 ? 5 : data?.length} gap-x-[25px]`}
          style={{
            marginRight: data?.length > 5 ? `-${marginRightValue}px` : "0",
          }}
        >
          {sellerList}
        </ul>
      </div>
    </section>
  );
}
