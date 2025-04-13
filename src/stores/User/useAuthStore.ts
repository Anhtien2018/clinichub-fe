import { User } from "@/graphql/type.interface";
import { create } from "zustand";

interface AuthState {
  user?: User;
  error?: string;
  isLoading: boolean;
}

interface Action {
  setUser: (me: User) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (err: string) => void;
}

export const useAuthStore = create<AuthState & Action>()((set) => ({
  user: {} as User,
  error: "",
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
