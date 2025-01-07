import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
// import { cookieStorage } from "zustand-cookie-storage";

const UserStore = set => ({
  // 기본 사용자 상태값 null
  user: null,
  // 서버로부터 받아온 데이터로 사용자 상태값 지정
  setUser: user => set({ user }),
  // 로그아웃, 사용자 데이터 null 로 초기화
  resetUser: () => set({ user: null }),
});

// cookieStorage 에 로그인 정보 저장
const useUserStore = create(
  persist(UserStore, {
    name: "user",
    storage: createJSONStorage(() => sessionStorage),
  }),
);

export default useUserStore;
