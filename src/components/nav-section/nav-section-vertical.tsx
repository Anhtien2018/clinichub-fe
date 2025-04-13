"use client";

import { Box } from "@mui/material";
import React from "react";
import NavList from "./nav-list";
import Logo from "../Logo/Logo";

interface NavSectionProps {
  isOpen?: boolean;
}
export default function NavSection({
  isOpen,
}: NavSectionProps): React.JSX.Element {
  return (
    <Box sx={{}}>
      <Box
        sx={{ padding: isOpen ? "20px 16px 8px 16px" : "20px 0px 8px 28px" }}
      >
        <Logo />
      </Box>
      <Box
        sx={{
          padding: isOpen ? "8px 4px" : "8px 16px",
          overflowY: "auto",
          height: "calc(100dvh - 80px)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <NavList isOpen={isOpen} />
      </Box>
    </Box>
  );
}
