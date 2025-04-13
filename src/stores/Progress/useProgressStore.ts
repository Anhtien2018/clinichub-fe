import { create } from "zustand";

interface TransitionStore {
  progress: number;
  setProgress: (value: number) => void;
}

export const useTransitionStore = create<TransitionStore>((set) => ({
  progress: 0,
  setProgress: (value) => set({ progress: value }),
}));
