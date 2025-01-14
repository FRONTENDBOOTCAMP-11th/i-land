import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // 추가: React Router
import useAxiosInstance from "@hooks/useAxiosInstance";

export default function ProductsDetailInfomation({
  products,
  products_id,
  like,
  setLike,
}) {
  const axios = useAxiosInstance();
  const navigate = useNavigate(); // 추가: useNavigate 훅
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

  // 장바구니에 상품 추가 (/carts/)
  const addCart = async quantitycount => {
    try {
      await axios.post(`/carts/`, {
        product_id: products?.item?._id,
        quantity: quantitycount,
      });
      const confirmNavigate = window.confirm(
        `${products?.item?.name} ${quantitycount}개가 장바구니에 추가 되었습니다.\n` +
          "장바구니로 이동하시겠습니까?",
      );
      if (confirmNavigate) {
        navigate("/carts");
        return;
      } else return;
    } catch (err) {
      console.log(err);
    }
  };
  // 상품 북마크에 추가/삭제
  const toggleLike = async () => {
    if (!like) {
      // 찜 추가
      try {
        const response = await axios.post("/bookmarks/product", {
          target_id: products_id,
        });
        setLike(response.data.item._id);
        alert("찜한 목록에 추가되었습니다.");
      } catch (err) {
        console.error(err);
        if (err.response) {
          // 서버에서 반환한 에러 메시지 확인
          alert(`찜 추가에 실패했습니다: ${err.response.data.message}`);
        } else {
          alert("찜 추가에 실패했습니다. 나중에 다시 시도해 주세요.");
        }
      }
    } else {
      // 찜 삭제
      try {
        const response = await axios.delete(`/bookmarks/${like}`);
        if (response.status === 200) {
          setLike(null);
          alert("찜한 목록에서 삭제되었습니다.");
        }
      } catch (err) {
        console.error(err.response?.data);
        if (err.response) {
          alert(`찜 삭제에 실패했습니다: ${err.response.data.message}`);
        } else {
          alert("찜 삭제에 실패했습니다. 나중에 다시 시도해 주세요.");
        }
      }
    }
  };

  // 상품의 현재 수량
  const productNowQuantity =
    products?.item?.quantity - products?.item?.buyQuantity;

  // 메인 이미지 배열
  const mainImages = products?.item?.mainImages;

  // 메인 이미지 개수
  const mainImagesLength = mainImages?.length;

  // 메인 이미지의 현재 배열
  const imgNowPages = 1 + imgcount;

  // 해당 상품 판매자 이름
  const sellerName = products?.item?.seller?.name;
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
                src="/assets/icons/chevron-right.svg"
                className="w-[6px] h-3"
              />
            </a>
            <p className="text-black text-[32px] not-italic font-bold">
              {products?.item?.name}
            </p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-[24px]">
                {products?.item?.price?.toLocaleString()} 원
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
              <option value="">안녕하세요!</option>
              <option value="">상품 옵션은 추후에 개발 예정입니다.</option>
              <option value="">감사합니다!</option>
              <option value="">😀😀😀😀😀</option>
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
                총 {(quantitycount * products?.item?.price)?.toLocaleString()}원
              </p>
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={toggleLike}>
                {like ? (
                  <img src="/assets/icons/heart_full.svg" alt="찜한 상품" />
                ) : (
                  <img src="/assets/icons/heart_empty.svg" alt="찜하기 버튼" />
                )}
              </button>
              <Link>
                <button
                  className="h-[50px] py-[14px] px-9 border-2 border-gray2 rounded-lg border-solid box-border"
                  onClick={() => addCart(quantitycount)}
                >
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
    </main>
  );
}

ProductsDetailInfomation.propTypes = {
  products_id: PropTypes.number.isRequired,
  products: PropTypes.object.isRequired,
  setLike: PropTypes.func.isRequired,
  like: PropTypes.number.isRequired,
};
