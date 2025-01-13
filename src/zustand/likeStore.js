import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
// import { cookieStorage } from "zustand-cookie-storage";

const LikeStore = set => ({
  // 찜 기본값 false
  like: false,
  // 찜 상품의 상태값 지정, 서버로부터 받아온 찜한 정보 표시
  setLike: like => set({ like }),
  // 찜 취소
  resetLike: () => set({ like: null }),
});

// sessionStorage 에 찜한 정보 저장
const useLikeStore = create(
  persist(LikeStore, {
    name: "like",
    storage: createJSONStorage(() => sessionStorage),
  }),
);

export default useLikeStore;
