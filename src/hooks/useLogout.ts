// useLogout.ts
"use client";

import { paths } from "@/common/constants";
import { getToken, removeToken } from "@/common/cookies";
import { useAuthStore } from "@/stores/User/useAuthStore";
import { useLogoutMutation } from "@/graphql/mutation/logout.generated";
import { useRouter } from "next/navigation";

export function useLogout() {
  const { setUser } = useAuthStore();
  const router = useRouter();

  const [logoutMutation] = useLogoutMutation({
    onCompleted: () => {
      removeToken();
      setUser(undefined);
      router.replace(paths.auth.signIn);
    },
    onError: (error) => {
      console.error("Logout error:", error.message);
    },
  });

  const handleLogout = async () => {
    await logoutMutation({
      variables: {
        refreshToken: getToken() ?? "",
      },
    });
  };

  return { handleLogout };
}
