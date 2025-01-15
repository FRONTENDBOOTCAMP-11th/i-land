import PropTypes from "prop-types";

export default function CartsPayment({ checkedItems, carts }) {
  // 선택된 상품의 총합 계산
  const calculateTotalPrice = () => {
    return checkedItems.reduce((total, id) => {
      const cartItem = carts.item.find(cart => cart._id === id);
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
            <ul className="w-full">
              {checkedItems.map(id => {
                const cartItem = carts.item.find(cart => cart._id === id);
                return (
                  cartItem && (
                    <li key={id} className="flex justify-between">
                      <p className="max-w-[300px] overflow-hidden line-clamp-1">{cartItem.product.name}</p>
                      <div className="flex">
                        <p>{cartItem.quantity}개</p>
                        <p>
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
  carts: PropTypes.object.isRequired,
  setCarts: PropTypes.func.isRequired,
  checkedItems: PropTypes.array.isRequired,
};
