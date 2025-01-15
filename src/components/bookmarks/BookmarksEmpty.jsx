export default function BookmarksEmpty() {
  return (
    <main className="container px-24 py-5 bg-white">
      <section name="cartHeader">
        <div className="mt-[113px] flex flex-col items-center gap-[30px]">
          <img src="/assets/images/error.png" alt="" />
          <p className="text-[24px] font-bold">찜한 상품이 없어요 😭</p>
        </div>
      </section>
    </main>
  );
}
