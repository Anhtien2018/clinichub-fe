import PatientsContent from "@/components/Patients/view/PatientsContent";
import { Box } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const metadata = { title: `Bệnh nhân` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Box>
      <PatientsContent />
    </Box>
  );
}
