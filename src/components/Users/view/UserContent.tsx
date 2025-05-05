import CustomBreadcrumbs from "@/components/Breadcrumbs";
import { Box } from "@mui/material";
import React from "react";

export default function UsersContent(): React.JSX.Element {
  return (
    <Box>
      <CustomBreadcrumbs heading="Bệnh nhân" />
    </Box>
  );
}
