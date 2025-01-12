import PropTypes from "prop-types";

export default function CartsPayment({ checkedItems, carts }) {
  // 선택된 상품의 총합 계산
  console.log("checkedItems", checkedItems);
  const calculateTotalPrice = () => {
    return checkedItems.reduce((total, id) => {
      const cartItem = carts.item.find(cart => cart._id === id);
      console.log("크아악", cartItem);
      return cartItem
        ? total + cartItem.product.price * cartItem.quantity
        : total;
    }, 0);
  };
  const totalPrice = calculateTotalPrice(); // 총합 계산

  return (
    <section name="cartFooter">
      <hr className="text-gray1 border border-solid my-[100px]" />
      <div className="flex flex-col items-center">
        <div className="p-[60px] h-[338px] w-full border border-gray2 border-solid rounded-[8px] flex flex-col gap-y-[40px]">
          <div className="flex justify-between text-[28px] font-bold">
            <p>상품 금액</p>
            <p>{totalPrice.toLocaleString()} 원</p>
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
  carts: PropTypes.object.isRequired, // carts는 객체로 수정
  setCarts: PropTypes.func.isRequired,
  checkedItems: PropTypes.array.isRequired,
};
