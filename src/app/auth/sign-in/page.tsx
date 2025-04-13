import { SignInContent } from "@/components/Sign-In/view";
import { Box } from "@mui/material";
import React from "react";
import { type Metadata } from "next";

export const metadata = { title: `Đăng Nhập` } satisfies Metadata;
export default function SignIn(): React.ReactElement {
  return (
    <Box>
      <SignInContent />
    </Box>
  );
}
