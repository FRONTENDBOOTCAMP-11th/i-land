import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosInstance from "@hooks/useAxiosInstance";
import BookmarksEmpty from "@components/bookmarks/BookmarksEmpty";
import { Helmet } from "react-helmet-async";

export default function Bookmarks() {
  const axios = useAxiosInstance();
  const [bookmarks, setBookmarks] = useState([]); // 상품 초기값 null
  const [product, setProduct] = useState([]); // 상품 초기값 null
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
  // 북마크 삭제 (/bookmarks/{_id})
  const deleteBookmarks = async _id => {
    const confirmNavigate = window.confirm("상품을 삭제하시겠습니까?");
    if (!confirmNavigate) {
      return;
    }
    setLoading(true); // 삭제 요청 시작 시 로딩 상태 설정
    try {
      await axios.delete(`/bookmarks/${_id}`);
      // 로컬 상태에서 해당 아이템 제거
      setBookmarks(prevBookmarks => ({
        ...prevBookmarks,
        item: prevBookmarks.item.filter(Bookmark => Bookmark._id !== _id), // 삭제된 아이템 제외
      }));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false); // 로딩 종료
    }
  };
  // 장바구니에 상품 1개 추가
  const addCart = async productId => {
    alert("장바구니에 상품이 추가 되었습니다.");
    try {
      const response = await axios.post(`/carts/`, {
        product_id: productId,
        quantity: 1,
      });
      setCarts(prevCart =>
        Array.isArray(prevCart)
          ? [...prevCart, response.data]
          : [response.data],
      );
    } catch (err) {
      setError(err);
    }
  };

  // 모든 북마크 삭제
  const deleteAllBookmarks = async () => {
    const confirmNavigate = window.confirm("모든 북마크를 삭제하시겠습니까?");
    if (!confirmNavigate) {
      return;
    }

    setLoading(true); // 로딩 상태 설정

    try {
      // 모든 북마크의 ID를 가져옵니다
      const allBookmarkIds = bookmarks.item.map(bookmark => bookmark._id);

      // 모든 북마크 삭제 요청
      await Promise.all(
        allBookmarkIds.map(async (id) => {
          await axios.delete(`/bookmarks/${id}`);
        })
      );

      // 로컬 상태에서 모든 아이템 제거
      setBookmarks({ item: [] }); // 북마크를 비운다
    } catch (err) {
      setError(err); // 에러 처리
    } finally {
      setLoading(false); // 로딩 종료
    }
  };
  useEffect(() => {
    fetchBookmarks();
    fetchProduct();
  }, []);
  loading && <p>Loading...</p>;
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
        <section className="mb-[50px]">
          <h1 className="page-title">찜한 상품</h1>
          <div className="flex justify-between">
            <p>총 {bookmarks?.item?.length} 개의 찜한 상품이 있습니다</p>
            <button
            className="w-[96px] h-[24px] border border-solid border-gray2 rounded-[8px]"
            onClick={deleteAllBookmarks}
            >
              모두 삭제
            </button>
          </div>
        </section>

        <ul className="grid grid-flow-row gap-y-[50px] pb-[60px]">
          {bookmarks.item?.length === 0 ? (
            <BookmarksEmpty />
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
                        onClick={() => deleteBookmarks(bookmarkslist._id)}
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
