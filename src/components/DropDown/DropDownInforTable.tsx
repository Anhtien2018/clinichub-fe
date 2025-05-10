"use client";

import { Box, IconButton, MenuItem } from "@mui/material";
import React, { useEffect } from "react";
import CustomPopover, { usePopover } from "../custom-popover";
import { Icon } from "../icons";
import { textPrimary } from "@/common/color";
import { backgroundImage } from "@/styles/style";

const menuItems = [
  {
    name: "Print",
    icon: "/assets/icons/table/printer.svg",
    onClick: () => {
      console.log("Print clicked");
    },
  },
  {
    name: "Import",
    icon: "/assets/icons/table/import.svg",
    onClick: () => {
      console.log("Import clicked");
    },
  },
  {
    name: "Export",
    icon: "/assets/icons/table/export.svg",
    onClick: () => {
      console.log("Export clicked");
    },
  },
];

export default function DropDownMoreTable(): React.JSX.Element {
  const popover = usePopover();

  return (
    <Box sx={{ width: "20px" }}>
      <IconButton onClick={popover.onOpen}>
        <Icon
          sx={{ width: "20px", height: "20px" }}
          icon="/assets/icons/table/more.svg"
        />
      </IconButton>
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        {menuItems.map((item) => (
          <MenuItem
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              color: textPrimary,
              ...backgroundImage(),
            }}
            key={item.name}
            onClick={() => {
              popover.onClose();
              item.onClick();
            }}
          >
            <Icon sx={{ width: "20px", height: "20px" }} icon={item.icon} />
            {item.name}
          </MenuItem>
        ))}
      </CustomPopover>
    </Box>
  );
}
