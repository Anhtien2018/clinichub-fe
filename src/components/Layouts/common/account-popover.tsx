"use client";
import { m } from "framer-motion";
// @mui
import { alpha } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import { Icon } from "@/components/icons";
import { NoImage } from "@/common/constants";
import { Avatar } from "@/components/Avatar";
import { usePopover } from "@/components/custom-popover";
import {
  Box,
  Divider,
  Drawer,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useBoolean } from "@/hooks/use-boolean";
import { useAuthStore } from "@/stores/User/useAuthStore";
import { useLogout } from "@/hooks/useLogout";

// const OPTIONS = [
//   {
//     label: "Home",
//     linkTo: "/",
//   },
//   {
//     label: "Profile",
//     linkTo: paths.dashboard.dashboard,
//   },
//   {
//     label: "Settings",
//     linkTo: paths.dashboard.dashboard,
//   },
// ];

export default function AccountPopover() {
  const { handleLogout } = useLogout();
  const popover = usePopover();
  const { value, onToggle } = useBoolean();
  return (
    <>
      <Box onClick={onToggle}>
        <Avatar
          src={NoImage}
          sxBox={{
            width: "36px",
            height: "36px",
            cursor: "pointer",
          }}
          sxImg={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Drawer
        anchor="right"
        open={value}
        onClose={onToggle}
        PaperProps={{
          sx: {
            width: 320,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          },
        }}
        ModalProps={{
          BackdropProps: {
            sx: { backgroundColor: "transparent" },
          },
          onClick: (event) => event.stopPropagation(), // Prevent click propagation
        }}
      >
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Typography variant="subtitle2" noWrap>
            Nguyễn Bùi Anh Tiến
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            nguyenbuianhtien2018@gmail.com
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          <MenuItem>Home</MenuItem>
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem
          onClick={handleLogout}
          sx={{ m: 1, fontWeight: "fontWeightBold", color: "error.main" }}
        >
          Đăng xuất
        </MenuItem>
      </Drawer>
    </>
  );
}
