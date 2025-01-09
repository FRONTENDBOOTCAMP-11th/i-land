import ProductCard from "@components/common/ProductCard";

export default function MainProductList({ label, data }) {
  // 최대 10개의 상품만 출력
  let bookmarks = [];
  for (let i = 0; i < 10; i++) {
    if (!data?.product[i]) break;
    bookmarks.push(data?.product[i]);
  }

  console.log(bookmarks, bookmarks.length);

  const marginRightValue = 1000 - 200 * (10 - bookmarks.length);
  const productList = bookmarks.map(item => (
    <ProductCard key={item._id} item={item} />
  ));

  return (
    <section className="mb-[70px]">
      <h2 className="section-title">{label}</h2>
      <div className="overflow-x-scroll scrollbar-hide">
        <ul
          className={`grid
            grid-cols-${bookmarks.length <= 5 ? 5 : bookmarks.length}
            gap-x-[25px]
            mr-[-${bookmarks.length > 5 ? marginRightValue : null}px]`}
        >
          {productList}
        </ul>
      </div>
    </section>
  );
}
