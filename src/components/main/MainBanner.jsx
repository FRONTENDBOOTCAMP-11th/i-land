export default function MainBanner() {
  return (
    <section className="aspect-[50/21] border border-gray2 rounded-lg mb-[60px] relative flex place-items-center justify-center">
      <div className="absolute top-0 left-0 flex items-center size-full px-9">
        <button className="mr-auto">
          <img src="/assets/icons/chevron-left.svg" />
        </button>
        <div className="px-3 py-1 mt-auto mb-5 border rounded-full border-gray3 text-gray3">
          <span>1</span> / <span>1</span>
        </div>
        <button className="ml-auto">
          <img src="/assets/icons/chevron-right.svg" />
        </button>
      </div>
      <h1 className="text-[32px] font-bold w-[288px] mr-[60px] text-point-blue">
        나의 취향을 한 곳에서 모아보세요
      </h1>
      <img
        src="/assets/logos/logo-favicon.svg"
        className="w-[112px] h-[123px]"
        alt="메인 로고 캐릭터"
      />
    </section>
  );
}
