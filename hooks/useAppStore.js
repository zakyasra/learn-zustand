import { create } from "zustand";

const useAppStore = create((set) => ({
  count: 0,
  increase: () => {
    set((data) => ({ count: data.count + 1 })); // ini buat ngambil value saat ini
  },
  decrease: () => {
    set((data) => ({ count: data.count - 1 })); 
  },

  username: "zaki",
  setUsername: (username) => {set({ username })} // ini ga buat ngambil value saat ini
}));

export default useAppStore;
