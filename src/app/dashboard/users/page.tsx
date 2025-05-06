import { paths } from "@/common/constants";
import CustomBreadcrumbs from "@/components/Breadcrumbs";
import { ButtonCustom } from "@/components/Button";
import UsersContent from "@/components/Users/view/UserContent";
import { Box } from "@mui/material";
import { Metadata } from "next";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

export const metadata = { title: `Bệnh nhân` } satisfies Metadata;

export default function Page(): React.JSX.Element {
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
            { name: "Thống kê", href: paths.dashboard.users.index },
            { name: "Danh sách bệnh nhân" },
          ]}
        />
        <ButtonCustom
          variant="outlined"
          text="Thêm bệnh nhân"
          icon={<AddIcon />}
          sxText={{ fontWeight: 600 }}
          sx={{
            height: "40px",
            padding: "20px 20px",
            borderRadius: "8px",
            background: "#000",
            color: "#fff",
          }}
        />
      </Box>
      <UsersContent />
    </Box>
  );
}
