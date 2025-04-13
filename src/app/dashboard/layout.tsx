import AuthGuard from "@/components/Auth/AuthGuard";
import React from "react";
import AuthLayout from "@/components/Layouts/AuthLayout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <AuthGuard>
      <AuthLayout>{children}</AuthLayout>
    </AuthGuard>
  );
}
