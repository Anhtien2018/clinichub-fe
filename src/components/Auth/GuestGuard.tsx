import React from "react";

interface GuestGuardProps {
  children: React.ReactNode;
}
export default function GuestGuard({
  children,
}: GuestGuardProps): React.ReactElement {
  return <React.Fragment>{children}</React.Fragment>;
}
