import { METHODS } from "@/helpers/constants";
import { Box, Link, Tooltip, Typography } from "@mui/material";
import React from "react";
import RouterLink from "next/link";
import Logo from "../Logo";

export default function ImageSignIn(): React.ReactElement {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)),url(/assets/background/overlay_2.jpg)",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "80px" }}>
        <Box>
          <Logo />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              backgroundImage: "/assets/background/overlay_2.jpg",
            }}
          >
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              {"Hi, Welcome back"}
            </Typography>

            <Box
              component="img"
              alt="auth"
              src={"/assets/Images/Sign-In/illustration_dashboard.png"}
              sx={{ maxWidth: 720 }}
            />

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
      </Box>
    </Box>
  );
}
