"use client";

import { METHODS } from "@/common/constants";
import { Box, Link, Tooltip, Typography } from "@mui/material";
import React from "react";
import RouterLink from "next/link";
import Logo from "../Logo/Logo";

export default function ImageSignUp(): React.ReactElement {
  return (
    <Box
      sx={{
        height: "100dvh",
        background:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)),url(/assets/background/overlay_2.jpg)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "80px",
          height: "100%",
        }}
      >
        <Box>
          <Logo />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h3"
            sx={{ maxWidth: "480px", textAlign: "center" }}
          >
            {"Quản lý công việc hiệu quả hơn với Minimal"}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            alt="auth"
            src={"/assets/Images/Sign-In/illustration_dashboard.png"}
            sx={{ maxWidth: 720 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {METHODS.map((option) => (
            <Tooltip key={option.label} title={option.label}>
              <Link component={RouterLink} href="#">
                <Box
                  component="img"
                  alt={option.label}
                  src={option.icon}
                  sx={{
                    width: 32,
                    height: 32,
                    // ...(method !== option.id && {
                    //   filter: "grayscale(100%)",
                    // }),
                  }}
                />
              </Link>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
