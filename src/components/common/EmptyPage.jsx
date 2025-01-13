export default function EmptyPage() {
  return (
    <main className="container px-24 bg-white">
      <section name="cartHeader">
        <div className="mt-[110px] flex flex-col justify-center items-center gap-[30px]">
          <img src="/assets/images/error.png" alt="" />
          <p className="text-[24px] font-bold">
            카테고리에 일치하는 상품이 없어요 😭
          </p>
        </div>
      </section>
    </main>
  );
}
