import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

import useAxiosInstance from "@hooks/useAxiosInstance";
import useLoading from "@hooks/useLoading";

import EmptyState from "@components/common/EmptyState";

export default function Bookmarks() {
  const axios = useAxiosInstance();
  const { startLoading, stopLoading } = useLoading();

  const [bookmarks, setBookmarks] = useState([]); // 상품 초기값 null
  const [product, setProduct] = useState([]); // 상품 초기값 null
  const [error, setError] = useState(null); // 에러

  // 북마크 목록 조회 (/bookmarks/{type})
  const fetchBookmarks = async () => {
    startLoading();
    try {
      const response = await axios.get(`/bookmarks/product`);
      setBookmarks(response?.data);
    } catch (error) {
      setError(error);
    } finally {
      stopLoading();
    }
  };

  // 상품 상세 조회 (/products/{_id})
  const fetchProduct = async () => {
    startLoading();
    try {
      const response = await axios.get(`/products/`);
      setProduct(response?.data);
    } catch (err) {
      setError(err);
    }
  };

  // 북마크 삭제 (/bookmarks/{_id})
  const DeleteBookmarks = async _id => {
    toast.error(
      ({ closeToast }) => (
        <div className="flex flex-col justify-center">
          {/* 아이콘과 텍스트를 같은 줄에 배치 */}
          <div className="text-center">
            <p>찜한 상품을 정말 삭제하시겠습니까?</p>
          </div>
          {/* 버튼은 다음 줄에 배치 */}
          <div className="flex justify-center gap-4 mt-3">
            <button
              onClick={async () => {
                closeToast(); // 토스트 닫기
                startLoading();
                try {
                  await axios.delete(`/bookmarks/${_id}`);
                  // 로컬 상태에서 해당 아이템 제거
                  setBookmarks(prevBookmarks => ({
                    ...prevBookmarks,
                    item: prevBookmarks.item.filter(
                      Bookmark => Bookmark._id !== _id,
                    ),
                  }));
                  toast.success("삭제되었습니다.");
                } catch (error) {
                  toast.error("삭제에 실패했습니다.");
                  setError(error);
                } finally {
                  stopLoading();
                }
              }}
              className="px-4 py-1 text-black bg-white border-2 border-white rounded hover:bg-blue-600"
            >
              예
            </button>
            <button
              onClick={() => {
                closeToast(); // 토스트 닫기
              }}
              className="px-4 py-1 text-black bg-white border-2 border-white rounded hover:bg-gray-600"
            >
              아니오
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
      },
    );
  };

  // 장바구니에 상품 1개 추가
  const addCart = async productId => {
    toast.success("장바구니에 상품이 추가 되었습니다.");
    // alert("장바구니에 상품이 추가 되었습니다.");
    startLoading();
    try {
      await axios.post(`/carts/`, {
        product_id: productId,
        quantity: 1,
      });
    } catch (error) {
      setError(error);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    fetchBookmarks();
    fetchProduct();
  }, []);

  error && <p>Error: {error.message}</p>;
  return (
    <>
      <Helmet>
        <title>찜한 상품 - ILAND</title>

        <meta property="og:title" content="찜한 상품 - ILAND" />
        <meta
          property="og:description"
          content="ILAND에서 내 취향을 모아보세요."
        />
      </Helmet>
      <div className="container">
        <section>
          <h1 className="page-title">찜한 상품</h1>
          <p className="mb-[60px]">
            총 {bookmarks?.item?.length} 개의 상품이 있습니다.
          </p>
        </section>
        <ul className="grid grid-flow-row gap-y-[50px]">
          {bookmarks.item?.length === 0 ? (
            <EmptyState message="찜한 상품이 없어요 😭" />
          ) : (
            <>
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
                      <Link to={`/products/${productItem?._id}`}>
                        <img
                          src={`https://11.fesp.shop//${bookmarkslist?.product?.mainImages[0]?.path}`}
                          className="size-[150px]"
                          alt="상품 대표 이미지"
                        />
                      </Link>
                      <div className="grid grid-flow-row gap-y-[14px] items-center">
                        <div className="text-[18px] text-gray3 flex gap-x-[10px] items-center">
                          {sellerName}
                          <img
                            src="/assets/icons/chevron-right.svg"
                            className="w-[6px] h-3"
                          />
                        </div>
                        <Link to={`/products/${productItem?._id}`}>
                          <h2 className="text-[32px] font-bold">
                            {bookmarkslist?.product?.name}
                          </h2>
                        </Link>
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
                        onClick={() => addCart(bookmarkslist.product._id)}
                      >
                        장바구니
                      </button>
                      <button
                        type="button"
                        className="w-[120px] h-[50px] py-[14px] px-9 rounded-lg text-[18px] font-bold text-white bg-point-red box-border"
                        aria-label="찜하기 목록에서 삭제 버튼"
                        onClick={() => DeleteBookmarks(bookmarkslist._id)}
                      >
                        삭제
                      </button>
                    </div>
                  </li>
                );
              })}
            </>
          )}
        </ul>
      </div>
    </>
  );
}
