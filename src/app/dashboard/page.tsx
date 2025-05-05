import DashboardContent from "@/components/Dashboard/View/Dashboard-Content";
import { Box } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const metadata = { title: `Dashboard` } satisfies Metadata;

export default function Page(): React.ReactElement {
  return (
    <Box>
      <DashboardContent />
    </Box>
  );
}
