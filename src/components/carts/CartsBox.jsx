import PropTypes from "prop-types";
import { useEffect } from "react";

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
}) {
  // 상품 수량 증감

  useEffect(() => {
    fetchCarts(); // 장바구니 정보 가져오기
  }, [_id]);

  console.log("ada", carts.item);
  if (loading) return <div>Loading...</div>; // 로딩 중일 때
  if (error) return <div>Error: {error.message}</div>; // 에러 발생 시
  return (
    <section name="cartMain">
      <div className="flex flex-col gap-y-[50px]">
        {carts?.item?.map(cartlist => (
          <div
            key={cartlist._id}
            className="relative h-[282px] p-[40px] flex justify-between border border-solid border-gray2 rounded-[8px]"
          >
            <div className="flex gap-x-[60px]">
              <div>
                <label className="mb-[20px] flex gap-[10px] items-center text-[14px]">
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(cartlist._id)} // 개별 체크박스 상태 연결
                    onChange={() => handleCheckboxChange(cartlist._id)} // 개별 체크 상태 변경 핸들러 연결
                    className="appearance-none size-5 bg-[url('/assets/icons/checkbox.svg')] checked:bg-[url('/assets/icons/checkbox-checked.svg')] bg-cover align-middle"
                  />
                  선택
                </label>
                <img
                  className="w-[150px] h-[150px]"
                  src={"https://11.fesp.shop" + cartlist?.product?.image?.path}
                  alt="상품 이미지"
                />
              </div>
              <div className="flex flex-col gap-y-[14px] self-center">
                <a href="">
                  <p className="text-gray3 text-[18px] not-italic font-normal">
                    {`${cartlist.name}`}
                  </p>
                </a>
                <p className="text-black text-[32px] not-italic font-bold">
                  {`${cartlist.product.name}`}
                </p>
                <p className="font-bold text-[24px]">
                  {(
                    cartlist.product.price * cartlist.quantity
                  )?.toLocaleString()}
                  원
                </p>
              </div>
            </div>
            <div className="font-bold items-center text-[18px] flex gap-x-2">
              <button onClick={() => patchQuantityMinusCart(cartlist._id)}>
                <img src="/assets/icons/minus.svg" alt="" />
              </button>
              <input
                className="text-center border border-solid rounded w-7 h-7 border-gray2"
                type="text"
                value={cartlist.quantity}
                name="countUp"
              />
              <button onClick={() => patchQuantityPlusCart(cartlist._id)}>
                <img src="/assets/icons/plus.svg" alt="" />
              </button>
            </div>
            <button className="absolute right-[40px] top-[40px]">
              <img src="/assets/icons/close.svg" alt="" />
            </button>
          </div>
        ))}
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
};
