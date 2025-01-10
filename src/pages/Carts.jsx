import CartsBox from "@components/carts/CartsBox";
import CartsPayment from "@components/carts/CartsPayment";

export default function Carts() {
  return (
    <div className="container">
      <CartsBox />
      <CartsPayment />
    </div>
  );
}
