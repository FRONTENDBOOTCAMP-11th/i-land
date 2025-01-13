import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useNavigate } from "react-router-dom"; // 추가: React Router

export default function DetailHeader({ _id, user }) {
  const axios = useAxiosInstance();
  const navigate = useNavigate(); // 추가: useNavigate 훅
  const [cart, setCart] = useState([]); // 장바구니 상태
  const [loading, setLoading] = useState(true); // 로딩
  const [error, setError] = useState(null); // 에러
  const [product, setProduct] = useState(null); // 상품 초기값 null
  const [quantitycount, setQuantityCount] = useState(1); // 상품 수량 초기값 1로 설정
  const [imgcount, setImgCount] = useState(0); // 상품 메인 이미지 배열[0]을 초기값으로 설정

  // 상품 수량 증감
  const plusQuantityCount = () => {
    if (quantitycount < productNowQuantity) {
      setQuantityCount(quantitycount + 1);
    }
  };
  const minusQuantityCount = () => {
    if (quantitycount > 1) {
      setQuantityCount(quantitycount - 1);
    }
  };
  // 상품 이미지 페이지 표시
  const plusImgCount = () => {
    if (imgcount < mainImagesLength - 1) {
      setImgCount(imgcount + 1);
    }
  };
  const minusImgCount = () => {
    if (imgcount > 0) {
      setImgCount(imgcount - 1);
    }
  };
  // 상품 상세 조회 (/products/{_id})
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/products/${_id}`);
      setProduct(response?.data);
    } catch (err) {
      setError(err);
    }
  };
  // 장바구니에 상품 추가 (/carts/)
  const addCart = async () => {
    try {
      const response = await axios.post(`/carts/`, {
        product_id: product?.item?._id,
        quantity: quantitycount,
      });
      setCart(prevCart => [...prevCart, response?.data]);
    } catch (err) {
      setError(err);
    }
  };
  // 비회원 사용자의 장바구니 추가 차단
  const addCartHandleler = event => {
    if (!user?.accessToken) {
      navigate("/carts");
      return;
    }
    addCart();
    const confirmNavigate = window.confirm(
      `${product?.item?.name} ${quantitycount}개가 장바구니에 추가 되었습니다.\n` +
        "장바구니로 이동하시겠습니까?",
    );
    if (!confirmNavigate) {
      event.preventDefault(); // 사용자가 취소하면 링크 이동을 막음
    }
  };
  // _id값 변경시 실행
  useEffect(() => {
    fetchProduct(); // 상품 정보 가져오기
    setLoading(false); // 로딩 종료
  }, [_id]);

  // 상품의 현재 수량
  const productNowQuantity =
    product?.item?.quantity - product?.item?.buyQuantity;

  // 메인 이미지 배열
  const mainImages = product?.item?.mainImages;

  // 메인 이미지 개수
  const mainImagesLength = mainImages?.length;

  // 메인 이미지의 현재 배열
  const imgNowPages = 1 + imgcount;

  // 해당 상품 판매자 이름
  const sellerName = product?.item?.seller?.name;

  // 정상 작동이 안 될 시에 로딩, 에러 표시
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!product) return <div>상품 정보를 불러오는 중입니다...</div>;
  return (
    <main>
      <section name="detailHeader">
        <div className="flex items-center gap-x-20">
          <div className="relative w-[480px] h-[480px]">
            <img
              className="w-full h-full"
              src={"https://11.fesp.shop" + mainImages[imgcount]?.path}
              alt="상품 이미지"
            />
            <button onClick={minusImgCount}>
              <img
                className="absolute left-[16px] top-[50%]"
                src="/assets/icons/left.svg"
                alt=""
              />
            </button>
            <button onClick={plusImgCount}>
              <img
                className="absolute right-[16px] top-[50%]"
                src="/assets/icons/right.svg"
                alt=""
              />
            </button>
            {mainImagesLength > 0 && (
              <p className="absolute left-[50%] -translate-x-1/2 bottom-[10px] w-[51px] h-[23px] flex items-center justify-center text-[14px] text-gray3 bg-white bg-opacity-70 border border-solid rounded-[26px]">
                {imgNowPages}/{mainImagesLength}
              </p>
            )}
          </div>
          <div className="w-96 flex flex-col gap-y-7">
            <a
              className="text-[18px]  text-gray3 flex gap-x-[10px] items-center"
              href=""
            >
              <p className="text-gray3 text-[18px] not-italic font-normal">
                {sellerName}
              </p>
              <img
                src="/src/assets/icons/chevron-right.svg"
                className="w-[6px] h-3"
              />
            </a>
            <p className="text-black text-[32px] not-italic font-bold">
              {product?.item?.name}
            </p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-[24px]">
                {product?.item?.price?.toLocaleString()} 원
              </p>
              <p className="font-bold text-[18px]">
                현재 수량 {productNowQuantity} 개
              </p>
            </div>
            <select
              className="w-100 h-10 px-3 text-[14px] not-italic border border-solid border-gray2 rounded-lg"
              name="productOption"
              id=""
            >
              <option value="">상품 옵션을 선택해 주세요</option>
              <option value="">선택1</option>
              <option value="">선택2</option>
              <option value="">선택3</option>
            </select>
            <div className="flex justify-between">
              <div className="font-bold items-center text-[18px] flex gap-x-2">
                <button onClick={minusQuantityCount}>
                  <img src="/assets/icons/minus.svg" alt="" />
                </button>
                <input
                  className="text-right border border-solid rounded w-7 h-7 border-gray2"
                  type="text"
                  value={quantitycount}
                  min="1"
                  max={productNowQuantity}
                  name="countUp"
                  readOnly={true}
                />
                <button onClick={plusQuantityCount}>
                  <img src="/assets/icons/plus.svg" alt="" />
                </button>
              </div>
              <p className="text-black text-[24px] font-bold">
                총 {(quantitycount * product?.item?.price)?.toLocaleString()} 원
              </p>
            </div>
            <div className="flex justify-between">
              <Link to="/bookmarks">
                <button>
                  <img src="/assets/icons/heart_full_blue.svg" alt="" />
                </button>
              </Link>
              <Link to="/carts" onClick={addCartHandleler}>
                <button className="h-[50px] py-[14px] px-9 border-2 border-gray2 rounded-lg border-solid box-border">
                  <p className="text-[18px] font-bold">장바구니</p>
                </button>
              </Link>
              <Link>
                <button className="h-[50px] py-[14px] px-9 rounded-lg bg-point-blue box-border">
                  <p className="text-[18px] text-white font-bold">바로구매</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="text-gray1 border border-solid my-10"></hr>

      <section name="detailMain">
        <p className="mt-5 section-title">상품 설명</p>
        <div name="productContent">{product?.item?.content}</div>
      </section>
    </main>
  );
}

DetailHeader.propTypes = {
  _id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};
