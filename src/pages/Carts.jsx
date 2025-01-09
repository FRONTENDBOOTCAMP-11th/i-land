import CartsBox from "@components/carts/CartsBox";
import CartsDelete from "@components/carts/CartsDelete";
import CartsPayment from "@components/carts/CartsPayment";

export default function Carts() {
  return (
    <div className="container">
      <CartsDelete />
      <CartsBox />
      <CartsPayment />
    </div>
  );
}
