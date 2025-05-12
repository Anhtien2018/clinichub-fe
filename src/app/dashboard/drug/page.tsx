import DrugContent from "@/components/Drug/view/DrugContent";
import PatientsContent from "@/components/Patients/view/PatientsContent";
import { Box } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const metadata = { title: `Thuốc` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Box>
      <DrugContent />
    </Box>
  );
}
