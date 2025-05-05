import { REFRESH_TOKEN_KEY, TOKEN_KEY } from "./constants";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY);
  if (token) {
    return token;
  }
  return null;
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
  Cookies.remove(REFRESH_TOKEN_KEY);
};

export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token);
};
export const setRefreshToken = (token: string) => {
  Cookies.set(REFRESH_TOKEN_KEY, token);
};
export const router = (path: string) => {
  const router = useRouter();
  router.push(path);
};
