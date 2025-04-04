import { Box } from "@mui/material";
import React from "react";

interface LogoProps {
  sx?: object;
}
export default function Logo({ sx }: LogoProps): React.ReactElement {
  return (
    <Box sx={{ width: "40px", height: "40px", ...sx }}>
      <img
        style={{ width: "100%", height: "100%" }}
        src="/logo/logo_single.svg"
        alt=""
      />
    </Box>
  );
}
