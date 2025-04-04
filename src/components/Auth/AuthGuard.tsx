"use client";

import React, { useEffect } from "react";
import { useAuthStore } from "@/stores/User/useAuthStore";
import { paths } from "@/helpers/constants";
import { useRouter } from "next/navigation";

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({
  children,
}: AuthGuardProps): React.ReactElement | null {
  const { user, setIsLoading, isLoading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push(paths.auth.signIn);
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  if (isLoading) {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
