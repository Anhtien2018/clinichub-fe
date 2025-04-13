"use client";

import { Link, Typography } from "@mui/material";
import React from "react";
import RouterLink from "next/link";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  sx?: object;
}

export default function CustomLink({
  children,
  href,
  sx,
}: CustomLinkProps): React.ReactElement {
  return (
    <Link href={href} component={RouterLink} underline="none">
      <Typography sx={sx}>{children}</Typography>
    </Link>
  );
}
