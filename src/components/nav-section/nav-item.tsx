"use client";

import { Box, Typography } from "@mui/material";
import { childrenNav } from "@/types/interface";

interface NavItemProps {
  data: childrenNav;
  sx?: object;
  hasChildren?: boolean;
  isOpen?: boolean;
}
export default function NavItem({
  data,
  sx,
  isOpen = false,
  hasChildren = false,
}: NavItemProps) {
  return (
    <Box
      sx={{
        ...sx,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        cursor: "pointer",
        "&:hover": {
          background: "#919EAB14",
        },
        padding: "10px 6px",
        borderRadius: "8px",
        position: "relative",
      }}
    >
      {hasChildren && (
        <Box
          sx={{ position: "absolute", left: -14 }}
          component="img"
          src="/assets/icons/navbar/ic_arrow.svg"
          alt="arrow"
        />
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: isOpen ? "column" : "row",
          gap: data.icon ? "10px" : "0",
          justifyContent: isOpen ? "center" : "start",
        }}
      >
        {data.icon && (
          <Box sx={{ width: "24px", height: "24px", position: "relative" }}>
            {data.icon}
            {isOpen && hasChildren && (
              <Box
                sx={{
                  transform: "rotate(180deg)",
                  position: "absolute",
                  right: -20,
                  top: 4,
                }}
                component="img"
                src="/assets/icons/navbar/ic_arrow_open.svg"
              />
            )}
          </Box>
        )}

        <Typography
          sx={{ fontWeight: 500, fontSize: isOpen ? "0.625rem" : "1rem" }}
        >
          {data.title}
        </Typography>
      </Box>
    </Box>
  );
}
