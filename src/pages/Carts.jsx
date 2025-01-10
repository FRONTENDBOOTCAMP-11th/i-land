import CartsBox from "@components/carts/CartsBox";
import CartsPayment from "@components/carts/CartsPayment";
import { useParams } from "react-router-dom";

export default function Carts() {
  const { _id } = useParams(); // URL에서 id 추출
  return (
    <div className="container">
      <CartsBox />
      <CartsPayment />
    </div>
  );
}
