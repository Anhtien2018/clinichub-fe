"use client";

import GuestGuard from "@/components/Auth/GuestGuard";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({
  children,
}: AuthLayoutProps): React.ReactElement {
  return <GuestGuard>{children}</GuestGuard>;
}
