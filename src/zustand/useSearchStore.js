import { create } from "zustand";

const useSearchStore = create(set => ({
  isSearchOpen: false, // 검색 모달 상태 기본값
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
}));

export default useSearchStore;
