import { useState, useEffect } from "react";
import useAxiosInstance from "@hooks/useAxiosInstance";

export default function Bookmarks() {
  const axios = useAxiosInstance();
  const [bookmarks, setBookmarks] = useState(null); // 상품 초기값 null
  const [product, setProduct] = useState(null); // 상품 초기값 null
  const [loading, setLoading] = useState(true); // 로딩
  const [error, setError] = useState(null); // 에러

  // 북마크 목록 조회 (/bookmarks/{type})
  const fetchBookmarks = async () => {
    try {
      const response = await axios.get(`/bookmarks/product`);
      setBookmarks(response?.data);
    } catch (err) {
      setError(err);
    }
  };
  // 상품 상세 조회 (/products/{_id})
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/products/`);
      setProduct(response?.data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchBookmarks();
    fetchProduct();
    setLoading(false); // 로딩 종료
  }, [0]);
  // console.log("product", product?.item);
  // console.log("bookmarks", bookmarks?.item);
  return (
    <div className="container">
      <section className="mb-[50px]">
        <h1 className="page-title">찜한 상품</h1>
        <p>총 {bookmarks?.item?.length} 개의 찜한 상품이 있습니다</p>
      </section>

      <ul className="grid grid-flow-row gap-y-[50px] pb-[60px]">
        {bookmarks?.item?.map(bookmarkslist => {
          // 각 cartlist에 대한 productItem 찾기
          const productItem = product?.item?.find(
            prod => prod._id === bookmarkslist.product._id,
          );
          // 판매자 정보 가져오기
          const sellerName = productItem?.seller?.name;
          return (
            <li
              key={bookmarkslist.product._id}
              className="p-10 flex justify-between gap-x-[60px] border border-gray2 rounded-lg box-border items-center"
            >
              <div className="flex gap-x-[60px]">
                <img
                  src={`https://11.fesp.shop//${bookmarkslist?.product?.mainImages[0]?.path}`}
                  className="size-[150px]"
                  alt="상품 대표 이미지"
                />
                <div className="grid grid-flow-row gap-y-[14px] items-center">
                  <div className="text-[18px] text-gray3 flex gap-x-[10px] items-center">
                    {sellerName}
                    <img
                      src="/assets/icons/chevron-right.svg"
                      className="w-[6px] h-3"
                    />
                  </div>
                  <h2 className="text-[32px] font-bold">
                    {bookmarkslist?.product?.name}
                  </h2>
                  <p className="text-[18px]">
                    <span className="text-[24px] font-bold">
                      {bookmarkslist?.product?.price.toLocaleString()}
                    </span>
                    원
                  </p>
                </div>
              </div>
              <div className="flex gap-x-[10px]">
                <button
                  type="button"
                  className="w-[150px] h-[50px] py-[14px] px-9 rounded-lg text-[18px] font-bold border-2 border-gray2 box-border"
                  aria-label="장바구니 담기 버튼"
                >
                  장바구니
                </button>
                <button
                  type="button"
                  className="w-[120px] h-[50px] py-[14px] px-9 rounded-lg text-[18px] font-bold text-white bg-point-red box-border"
                  aria-label="찜하기 목록에서 삭제 버튼"
                >
                  삭제
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
