"use client";

import GuestGuard from "@/components/Auth/GuestGuard";
import { Container } from "@/components/Container";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({
  children,
}: AuthLayoutProps): React.ReactElement {
  return (
    <GuestGuard>
      <Container sx={{ minHeight: "100dvh" }}>{children}</Container>
    </GuestGuard>
  );
}
