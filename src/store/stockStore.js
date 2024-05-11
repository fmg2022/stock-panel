import { create } from "zustand";

export const useStockStore = create((set) => ({
  currentAccesory: [],
  setCurrentAccesory: (currentAccesory) => set({ currentAccesory })
}))