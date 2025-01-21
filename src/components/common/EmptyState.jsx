import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function EmptyState({
  message,
  showButton = false,
  buttonText,
  onButtonClick,
}) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <main className="container px-24 py-5 bg-white">
      <section
        name="emptyState"
        className="mt-[113px] flex flex-col items-center gap-[30px]"
      >
        <img src="/assets/images/error.png" alt={message} />
        <p className="text-[24px] font-bold">{message}</p>
        {showButton && (
          <button
            onClick={onButtonClick || handleGoBack}
            className="px-4 py-2 text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
          >
            {buttonText}
          </button>
        )}
      </section>
    </main>
  );
}

EmptyState.propTypes = {
  message: PropTypes.string.isRequired, // 상태 메시지
  showButton: PropTypes.bool, // 버튼 표시 여부
  buttonText: PropTypes.string, // 버튼 텍스트
  onButtonClick: PropTypes.func, // 버튼 클릭 동작
};
