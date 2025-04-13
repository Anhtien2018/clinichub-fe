"use client";

import React from "react";
import { useAuthStore } from "@/stores/User/useAuthStore";
import SplashScreen from "../Loading/SplashScreen";

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({
  children,
}: AuthGuardProps): React.ReactElement | null {
  const { isLoading } = useAuthStore();
  // if (!user) {
  //   router.replace(paths.auth.signIn);
  //   return null;
  // }
  if (isLoading) {
    return <SplashScreen />;
  }
  return <React.Fragment>{children}</React.Fragment>;
}
