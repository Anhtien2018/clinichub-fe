"use client";

// @mui
import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// theme
// import { bgBlur } from "src/theme/css";
// hooks
// components
// import SvgColor from "src/components/svg-color";
// import { useSettingsContext } from "src/components/settings";
//

import { useResponsive } from "@/hooks/use-responsive";
import { HEADER, NAV } from "../config-layout";
import {
  AccountPopover,
  // ContactsPopover,
  LanguagePopover,
  Searchbar,
  SettingsButton,
} from "../common";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  //   const settings = useSettingsContext();

  //   const isNavHorizontal = settings.themeLayout === "horizontal";

  //   const isNavMini = settings.themeLayout === "mini";

  const lgUp = useResponsive("up", "lg");

  //   const offsetTop = offset && !isNavHorizontal;

  const renderContent = (
    <>
      {/* {lgUp && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />} */}

      {!lgUp && (
        <IconButton onClick={onOpenNav}>
          {/* <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" /> */}
        </IconButton>
      )}

      <Searchbar />

      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1 }}
      >
        <LanguagePopover />

        {/* <NotificationsPopover /> */}

        {/* <ContactsPopover /> */}

        <SettingsButton />

        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <Box
      sx={{
        height: "72px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        width: "100%",
        background: "#fff",
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter,
        }),
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
