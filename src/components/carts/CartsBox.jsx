import PropTypes from "prop-types";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CartsBox({
  _id,
  carts,
  error,
  loading,
  fetchCarts,
  handleCheckboxChange,
  checkedItems,
  patchQuantityPlusCart,
  patchQuantityMinusCart,
  DeleteCarts,
  setError,
  setCheckedItems,
}) {
  const axios = useAxiosInstance();
  const [product, setProduct] = useState(null); // 상품 초기값 null

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
    fetchProduct();
    fetchCarts(); // 장바구니 정보 가져오기
  }, [_id]);

  useEffect(() => {
    if (carts?.item) {
      setCheckedItems(carts.item.map(cartlist => cartlist._id)); // 모든 체크박스를 선택됨으로 설정
    }
  }, [carts]);

  // 로딩 중일 때
  if (loading) return <div>Loading...</div>;
  // 에러 발생 시
  if (error) return <div>Error: {error.message}</div>;
  return (
    <section name="cartMain">
      <div className="flex flex-col gap-y-[50px]">
        {carts?.item?.map(cartlist => {
          // 각 cartlist에 대한 productItem 찾기
          const productItem = product?.item?.find(
            prod => prod._id === cartlist.product_id,
          );
          // 판매자 정보 가져오기
          const sellerName = productItem?.seller?.name;
          return (
            <div
              key={cartlist._id}
              className="relative h-[282px] p-[40px] flex gap-[120px] justify-between border border-solid border-gray2 rounded-[8px] overflow-hidden"
            >
              <div className="flex gap-x-[60px]">
                <div className="shrink-0">
                  <label className="mb-[20px] flex gap-[10px] items-center text-[14px]">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes(cartlist._id)} // 개별 체크박스 상태 연결
                      onChange={() => handleCheckboxChange(cartlist._id)} // 개별 체크 상태 변경 핸들러 연결
                      className="appearance-none size-5 bg-[url('/assets/icons/checkbox.svg')] checked:bg-[url('/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
                    />
                    선택
                  </label>
                  <Link to={`/products/${productItem?._id}`}>
                    <img
                      className="w-[150px] h-[150px]"
                      src={
                        "https://11.fesp.shop" + cartlist?.product?.image?.path
                      }
                      alt="상품 이미지"
                    />
                  </Link>
                </div>
                <div className="flex flex-col gap-y-[14px] self-center grow max-w-[500px] overflow-hidden">
                  <a href="">
                    <p className="text-gray3 text-[18px] not-italic font-normal line-clamp-2">
                      {sellerName}
                    </p>
                  </a>
                  <Link to={`/products/${productItem?._id}`}>
                    <p className="text-black text-[32px] not-italic font-bold line-clamp-2">
                      {`${cartlist.product.name}`}
                    </p>
                  </Link>
                  <p className="font-bold text-[24px]">
                    {(
                      cartlist.product.price * cartlist.quantity
                    )?.toLocaleString()}
                    원
                  </p>
                </div>
              </div>
              <div className="font-bold items-center text-[18px] flex gap-x-2 shrink-0">
                <button onClick={() => patchQuantityMinusCart(cartlist._id)}>
                  <img src="/assets/icons/minus.svg" alt="" />
                </button>
                <input
                  className="text-center border border-solid rounded w-[28px] h-[28px] border-gray2"
                  type="text"
                  value={cartlist.quantity}
                  name="countUp"
                />
                <button onClick={() => patchQuantityPlusCart(cartlist._id)}>
                  <img src="/assets/icons/plus.svg" alt="" />
                </button>
              </div>
              <button
                onClick={() => DeleteCarts(cartlist._id)}
                className="absolute right-[40px] top-[40px]"
              >
                <img src="/assets/icons/close.svg" alt="" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

CartsBox.propTypes = {
  _id: PropTypes.string.isRequired,
  carts: PropTypes.array.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  fetchCarts: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  checkedItems: PropTypes.array.isRequired,
  patchQuantityMinusCart: PropTypes.func.isRequired,
  patchQuantityPlusCart: PropTypes.func.isRequired,
  DeleteCarts: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setCheckedItems: PropTypes.func.isRequired,
};
