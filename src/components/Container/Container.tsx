import React from "react";
import { Box, type SxProps, type Theme } from "@mui/material";

interface ContainerProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}
export function Container({
  sx,
  children,
}: ContainerProps): React.ReactElement {
  return (
    <Box
      sx={{
        maxWidth: "1920px",
        margin: "auto",
        padding: {
          xs: "16px 20px",
          lg: "16px 0px ",
          md: "16px 20",
          sm: "16px 20px",
        },
        boxSizing: "border-box",
        width: "100% !important",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
