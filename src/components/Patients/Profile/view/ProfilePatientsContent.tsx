"use client";

import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import CustomBreadcrumbs from "@/components/Breadcrumbs";
import { paths, TABS } from "@/common/constants";
import ProfileCover from "../../ProfileCover";
import { User } from "@/graphql/type.interface";
import { useParams } from "next/navigation";
import { Box } from "@mui/material";
import { useProfilePatient } from "../hooks/useProfilePatient";
import ProfileHome from "../profile-home";

export default function ProfilePatients(): React.JSX.Element {
  const { id } = useParams();

  const { patient, handleChangeTab, valueTab } = useProfilePatient({
    idPatient: id as string,
  });
  return (
    <Box>
      <CustomBreadcrumbs
        heading="Chi tiết bệnh nhân"
        links={[
          { name: "Danh sách bệnh nhân", href: paths.dashboard.patients.index },
          { name: patient?.fullName ?? "" },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Card
        sx={{
          mb: 3,
          height: 290,
          position: "relative",
        }}
      >
        <ProfileCover patient={patient ?? ({} as User)} />

        <Tabs
          value={valueTab}
          onChange={handleChangeTab}
          sx={{
            width: 1,
            bottom: 0,
            zIndex: 9,
            position: "absolute",
            backgroundColor: "#ffffff",
            [`& .${tabsClasses.flexContainer}`]: {
              pr: { md: 3 },
              justifyContent: {
                sm: "center",
                md: "flex-end",
              },
            },
          }}
        >
          {TABS.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              // icon={tab.icon}
              label={tab.label}
            />
          ))}
        </Tabs>
      </Card>
      {valueTab === "profile" && <ProfileHome patient={patient} />}
    </Box>
  );
}
