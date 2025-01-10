import { useParams } from "react-router-dom";
import DetailFooter from "@components/detail/DetailFooter";
import DetailHeader from "@components/detail/DetailHeader";
import useUserStore from "@zustand/userStore";

export default function Detail() {
  const { user } = useUserStore();
  const { _id } = useParams(); // URL에서 id 추출
  return (
    <main className="container px-24 py-5 bg-white">
      <DetailHeader _id={_id} />
      <hr className="text-gray1 border border-solid my-10"></hr>
      <DetailFooter _id={_id} user={user} />
    </main>
  );
}
