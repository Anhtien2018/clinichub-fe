"use client";

import { Box } from "@mui/material";
import React from "react";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <Box sx={{ minHeight: "100dvh" }}>{children}</Box>
    </>
  );
}
