import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosInstance from "@hooks/useAxiosInstance";

export default function DetailHeader({_id}) {
  const axios = useAxiosInstance();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantitycount, setQuantityCount] = useState(1);
  const [imgcount, setImgCount] = useState(0);
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
  const inputNum = event => {
    const value = event.target.value;
    if (!isNaN(value) && value.trim() !== "") {
      setQuantityCount(Number(value));
    }
  };
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/products/${_id}`);
      setProduct(response?.data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    fetchProduct(); // 상품 정보 가져오기
    setLoading(false); // 로딩 종료
  }, [_id]);

  const productNowQuantity =
    product?.item?.quantity - product?.item?.buyQuantity; // 상품의 현재 수량
  const mainImages = product?.item?.mainImages; // 메인 이미지 배열
  const mainImagesLength = mainImages?.length; // 메인 이미지 개수
  const imgNowPages = 1 + imgcount; // 메인 이미지의 현재 배열
  const sellerName = product?.item?.seller?.name; // 해당 상품 판매자 이름
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
              src={"https://11.fesp.shop" + mainImages[imgcount]?.path} // [imageCount] 이런식으로 변수를 줘서 여러장의 이미지를 변경할 수 있게할 수 있을듯함
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
                  onChange={inputNum}
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
              <Link to="/carts">
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
