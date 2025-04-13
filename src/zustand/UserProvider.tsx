"use client";

import React, { useEffect } from "react";
import { useMeLazyQuery } from "@/graphql/queries/me.generated";
import Cookies from "js-cookie";
import { useAuthStore } from "@/stores/User/useAuthStore";
import { TOKEN_KEY } from "@/helpers/constants";
import { User } from "@/graphql/type.interface";

export interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({
  children,
}: UserProviderProps): React.JSX.Element {
  const { setUser, setIsLoading } = useAuthStore();
  const [getMe] = useMeLazyQuery({
    onCompleted: (data) => {
      setUser(data.me as User);
      setIsLoading(false);
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get(TOKEN_KEY);
      if (token) {
        try {
          await getMe(); // chờ response để onCompleted chạy đúng lúc
        } catch (err) {
          console.log(err);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    void fetchUser(); // gọi async function trong useEffect
  }, []);

  return <>{children}</>;
}
