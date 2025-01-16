import PropTypes from "prop-types";

export default function CartsPayment({ checkedItems, carts }) {
  // 선택된 상품의 총합 계산
  const calculateTotalPrice = () => {
    return checkedItems.reduce((total, id) => {
      const cartItem = carts.find(cart => cart._id === id);
      return cartItem
        ? total + cartItem.product.price * cartItem.quantity
        : total;
    }, 0);
  };
  const totalPrice = calculateTotalPrice(); // 총합 계산
  // console.log("checkedItems", checkedItems);
  // console.log("carts", carts);

  return (
    <section name="cartFooter">
      <hr className="text-gray1 border border-solid my-[100px]" />
      <div className="flex flex-col items-center">
        <div className="p-[60px]  w-full border border-gray2 border-solid rounded-[8px] flex flex-col gap-y-[40px]">
          <div className="flex justify-between text-[28px] font-bold">
            <ul className="w-full flex flex-col gap-[20px]">
              {checkedItems.map(id => {
                const cartItem = carts.find(cart => cart._id === id);
                return (
                  cartItem && (
                    <li key={id} className="flex gap-x-[30px] justify-between">
                      <p className="max-w-[300px] overflow-hidden line-clamp-1 basis-full">
                        {cartItem.product.name}
                      </p>
                      <div className="flex gap-x-[30px] basis-[300px]">
                        <input
                          className="text-center border border-solid rounded w-[28px] h-[28px] border-gray2"
                          type="text"
                          value={cartItem.quantity}
                        />
                        <img src="/assets/icons/close.svg" alt="" />
                        <p className="text-right basis-[170px]">
                          {(
                            cartItem?.product?.price * cartItem?.quantity
                          ).toLocaleString()}
                          원
                        </p>
                      </div>
                    </li>
                  )
                );
              })}
            </ul>
          </div>
          <p className="border border-solid text-gray1"></p>
          <div className="flex justify-between text-[32px] font-bold">
            <p>총 결제 금액</p>
            <p>{totalPrice.toLocaleString()} 원</p>
          </div>
        </div>

        <button className="w-[400px] h-[60px] mb-[60px] mt-[60px] px-[89px] py-[16px] bg-point-blue text-white rounded-[8px] text-[24px] font-bold">
          선택 상품 결제
        </button>
      </div>
    </section>
  );
}

CartsPayment.propTypes = {
  carts: PropTypes.array.isRequired,
  checkedItems: PropTypes.array.isRequired,
};
