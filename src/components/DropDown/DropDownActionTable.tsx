"use client";

import { Box, IconButton, MenuItem } from "@mui/material";
import React from "react";
import CustomPopover, { usePopover } from "../custom-popover";
import { Icon } from "../icons";
import { textPrimary } from "@/common/color";
import { backgroundImage } from "@/styles/style";

interface DropDownActionTableProps {
  id: string; // cần id để biết đang thao tác trên dòng nào
  handleEdit?: (id: string) => void;
  handleDelete?: (id: string) => void;
}

export default function DropDownActionTable({
  id,
  handleEdit,
  handleDelete,
}: DropDownActionTableProps): React.JSX.Element {
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
            handleDelete?.(id); // gọi xóa
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
            handleEdit?.(id); // gọi chỉnh sửa
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
