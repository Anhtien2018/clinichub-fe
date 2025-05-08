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

export function formatDateTime(
  isoString: string,
  withTime: boolean = false
): string {
  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  if (withTime) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}, ${day}/${month}/${year}`;
  } else {
    return `${day}/${month}/${year}`;
  }
}
