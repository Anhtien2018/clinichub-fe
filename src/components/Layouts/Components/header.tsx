"use client";

import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import {
  AccountPopover,
  NotificationsPopover,
  Searchbar,
  SettingsButton,
} from "../common";
import { Box, Typography } from "@mui/material";
import { useHeader } from "./useHeader";
import { Avatar } from "@/components/Avatar";

export default function Header() {
  const { clinic } = useHeader();

  const renderContent = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {clinic.logoUrl !== null && (
          <Avatar sxImg={{ width: "200px" }} src={clinic.logoUrl} />
        )}
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: 1,
            marginTop: "3px",
          }}
        >
          {clinic?.name}
        </Typography>
      </Box>
      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1 }}
      >
        <Searchbar />

        {/* <LanguagePopover /> */}

        <NotificationsPopover />

        {/* <ContactsPopover /> */}

        <SettingsButton />

        <AccountPopover />
      </Stack>
    </Box>
  );

  return (
    <Box
      sx={{
        height: "72px",
        // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        width: "100%",
        background: "#fff",
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </Box>
  );
}
