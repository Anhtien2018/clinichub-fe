"use client";

import { Box, Grid } from "@mui/material";
import React from "react";
import NavSection from "../nav-section/navLeft";
import Header from "./Components/header";
import { useBoolean } from "@/hooks/use-boolean";
import { Icon } from "../icons";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const { onToggle, value } = useBoolean(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100dvh",
          overflowY: "hidden",
        }}
      >
        <Box sx={{ maxWidth: "1920px", width: "100%" }}>
          <Grid container spacing={0}>
            <Grid
              size={!value ? 1.75 : 0.5}
              sx={{
                height: "100dvh",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                borderRight: "1px solid #d6d6d6",
                position: "relative",
              }}
            >
              <Box
                onClick={onToggle}
                sx={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: -12,
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  top: 23,
                  transform: value ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#f5f5f5",
                  },
                }}
              >
                <Icon icon="/assets/icons/navbar/ic_arrow_open.svg" />
              </Box>
              <NavSection isOpen={value} />
            </Grid>
            <Grid size={value ? 11.5 : 10.25}>
              <Header />
              {children}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
