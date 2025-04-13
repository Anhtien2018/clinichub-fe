import SignUpContent from "@/components/Sign-up/view/Sign-Up-Content";
import { Box } from "@mui/material";
import React from "react";
import { type Metadata } from "next";

export const metadata = { title: `Đăng Ký` } satisfies Metadata;
export default function SignUp(): React.ReactElement {
  return (
    <Box>
      <SignUpContent />
    </Box>
  );
}
