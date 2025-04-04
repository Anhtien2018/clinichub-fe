import { create } from "zustand";

interface AuthState {
  user?: undefined;
  error?: string | undefined;
  isLoading: boolean;
}

interface Action {
  setUser: (me: undefined) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (err: string) => void;
}

export const useAuthStore = create<AuthState & Action>()((set) => ({
  user: undefined,
  error: undefined,
  isLoading: true,
  setUser: (me) => {
    set({ user: me });
  },
  setError: (err) => {
    set({ error: err });
  },
  setIsLoading: (isLoading) => {
    set({ isLoading });
  },
}));
