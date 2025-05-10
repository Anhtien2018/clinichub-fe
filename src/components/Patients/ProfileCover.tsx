// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { Patient, User } from "@/graphql/type.interface";
import { avatarDefault } from "@/common/constants";

interface ProfileCoverProps {
  patient?: Patient;
}
export default function ProfileCover({
  patient,
}: ProfileCoverProps): React.JSX.Element {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(0deg, rgba(122, 9, 48, 0.8), rgba(122, 9, 48, 0.8)), url(/assets/images/cover/cover-4.webp)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "100%",
        color: "#ffffff",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          left: { md: 24 },
          bottom: { md: 24 },
          zIndex: { md: 10 },
          pt: { xs: 6, md: 0 },
          position: { md: "absolute" },
        }}
      >
        <Avatar
          src={avatarDefault}
          alt={patient?.fullName ?? ""}
          sx={{
            mx: "auto",
            width: { xs: 64, md: 128 },
            height: { xs: 64, md: 128 },
          }}
        />

        <ListItemText
          sx={{
            mt: 3,
            ml: { md: 3 },
            textAlign: { xs: "center", md: "unset" },
          }}
          primary={patient?.fullName ?? ""}
          secondary="Bệnh nhân"
          primaryTypographyProps={{
            typography: "h4",
          }}
          secondaryTypographyProps={{
            mt: 0.5,
            color: "inherit",
            component: "span",
            typography: "body2",
            sx: { opacity: 0.48 },
          }}
        />
      </Stack>
    </Box>
  );
}
