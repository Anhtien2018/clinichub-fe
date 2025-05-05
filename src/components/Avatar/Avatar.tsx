"use client";

import { OpacityHover } from "@/helpers/constants";
import { Box } from "@mui/material";
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
      sx={{ "&:hover": { opacity: OpacityHover }, ...sxBox }}
      onClick={onClick}
    >
      <Box sx={sxImg} component="img" src={src} />
    </Box>
  );
}
