"use client";

import { Box, IconButton, MenuItem } from "@mui/material";
import React from "react";
import CustomPopover, { usePopover } from "../custom-popover";
import { Icon } from "../icons";
import { textPrimary } from "@/common/color";
import { backgroundImage } from "@/styles/style";

export default function DropDownActionTable(): React.JSX.Element {
  const popover = usePopover();

  return (
    <Box>
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
        sx={{
          width: 200,

          color: textPrimary,
          ...backgroundImage(),
        }}
      >
        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "10px 20px",
          }}
        >
          <Icon
            sx={{ width: "20px", height: "20px" }}
            icon="/assets/icons/action/trash.svg"
          />
          Xóa
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "10px 20px",
          }}
        >
          <Icon
            sx={{ width: "20px", height: "20px" }}
            icon="/assets/icons/action/edit.svg"
          />
          Chỉnh sửa
        </MenuItem>
      </CustomPopover>
    </Box>
  );
}
