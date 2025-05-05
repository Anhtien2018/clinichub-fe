"use client";

import { OpacityHover } from "@/common/constants";
import { Box, Link } from "@mui/material";
import React from "react";

interface AvatarProps {
  src?: string;
  sxBox?: object;
  sxImg?: object;
  onClick?: () => void;
}
export default function Avatar({
  onClick,
  src,
  sxBox,
  sxImg,
}: AvatarProps): React.JSX.Element {
  return (
    <Box
      sx={{ "&:hover": { opacity: OpacityHover }, cursor: "pointer", ...sxBox }}
      onClick={onClick}
    >
      <Box
        sx={{ with: "100%", height: "auto", ...sxImg }}
        component="img"
        src={src}
      />
    </Box>
  );
}
