"use client";

import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { usePatients } from "../hooks/usePatients";
import UserTableToolbar from "../../TableToolbar/TableToolbar";
import CustomBreadcrumbs from "@/components/Breadcrumbs";
import { paths } from "@/common/constants";
import UpdatePatient from "../Update/view/UpdatePatient";
import CreatePatients from "../Create/view/CreatePatients";
import TablePatients from "../TablePatients";
import DeletePatients from "../Delete/DeletePatients";

export default function PatientsContent(): React.JSX.Element {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <CustomBreadcrumbs
          heading="Bệnh nhân"
          links={[
            { name: "Thống kê", href: paths.dashboard.patients.index },
            { name: "Danh sách bệnh nhân" },
          ]}
        />

        <CreatePatients />
      </Box>

      <TablePatients />

      <UpdatePatient />

      <DeletePatients />
    </Box>
  );
}
