import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
// import { cookieStorage } from "zustand-cookie-storage";

const BookmarkStore = set => ({
  // 찜 기본값 false
  bookmark: null,
  // 찜 상품의 상태값 지정, 서버로부터 받아온 찜한 정보 표시
  setBookmark: bookmark => set({ bookmark }),
  // 찜 취소
  resetBookmark: () => set({ bookmark: null }),
});

// sessionStorage 에 찜한 정보 저장
const useBookmarkStore = create(
  persist(BookmarkStore, {
    name: "bookmark",
    storage: createJSONStorage(() => sessionStorage),
  }),
);

export default useBookmarkStore;
