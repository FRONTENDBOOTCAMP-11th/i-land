import ProductCard from "@components/ProductCard";

export default function MainProductList({ label, data }) {
  const productList = data?.product.map(item => (
    <ProductCard key={item._id} item={item} />
  ));

  return (
    <section className="mb-[70px]">
      <h2 className="section-title">{label}</h2>
      <div className="overflow-x-scroll scrollbar-hide">
        <ul
          className={`grid 
            ${data?.product.length < 5 ? "grid-cols-5" : `grid-cols-${data?.product.length}`}
            gap-x-[25px] 
            ${data?.product.length > 5 ? `mr-[-1000px]` : null}`}
        >
          {productList}
        </ul>
      </div>
    </section>
  );
}
