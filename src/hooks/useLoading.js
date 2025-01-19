import useLoadingStore from "@zustand/useLoadingStore";

export default function useLoading() {
  const startLoading = useLoadingStore(state => state.startLoading);
  const stopLoading = useLoadingStore(state => state.stopLoading);

  return { startLoading, stopLoading };
}
