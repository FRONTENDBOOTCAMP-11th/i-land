import useLoadingStore from "@zustand/useLoadingStore";

export default function Spinner() {
  const isLoading = useLoadingStore(state => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <PacmanLoader color="#0093FF" size={50} />
    </div>
  );
}
