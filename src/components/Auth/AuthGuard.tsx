"use client";

import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/User/useAuthStore";
import SplashScreen from "../Loading/SplashScreen";
import { paths } from "@/common/constants";
import { useRouter } from "next/navigation";

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({
  children,
}: AuthGuardProps): React.ReactElement | null {
  const { isLoading, user, error } = useAuthStore();
  const router = useRouter();

  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!isLoading && (!user || error)) {
      // setShouldRedirect(true);
    }
  }, [isLoading, user, error]);

  useEffect(() => {
    if (shouldRedirect) {
      router.replace(paths.auth.signIn);
    }
  }, [shouldRedirect, router]);

  if (isLoading) {
    return <SplashScreen />;
  }

  if (shouldRedirect) {
    return null; // chặn hiển thị trong lúc redirect
  }

  return <>{children}</>;
}
