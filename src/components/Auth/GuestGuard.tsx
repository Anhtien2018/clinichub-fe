import { useAuthStore } from "@/stores/User/useAuthStore";
import React from "react";
import SplashScreen from "../Loading/SplashScreen";

interface GuestGuardProps {
  children: React.ReactNode;
}
export default function GuestGuard({
  children,
}: GuestGuardProps): React.ReactElement | null {
  const { isLoading } = useAuthStore();
  // if (user) {
  //   router.replace(paths.dashboard.dashboard);
  //   return null;
  // }
  if (isLoading) {
    return <SplashScreen />;
  }
  return <React.Fragment>{children}</React.Fragment>;
}
