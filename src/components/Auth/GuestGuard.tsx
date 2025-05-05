"use client";

import { useAuthStore } from "@/stores/User/useAuthStore";
import React, { useEffect } from "react";
import SplashScreen from "../Loading/SplashScreen";
import { useRouter } from "next/navigation";
import { paths } from "@/common/constants";

interface GuestGuardProps {
  children: React.ReactNode;
}

export default function GuestGuard({
  children,
}: GuestGuardProps): React.ReactElement | null {
  const { isLoading, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace(paths.dashboard.dashboard);
    }
  }, [user, router]);

  if (isLoading) {
    return <SplashScreen />;
  }

  if (user) {
    return null; // tránh render khi đang redirect
  }

  return <>{children}</>;
}
