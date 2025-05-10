import React, { useEffect } from "react";
import {
  FormControlLabel,
  Checkbox,
  FormGroup,
  Typography,
  Box,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import CustomPopover from "../custom-popover";
import { usePopover } from "../custom-popover";
import { textPrimary } from "@/common/color";
import { backgroundImage } from "@/styles/style";
import { Icon } from "../icons";
import { OpacityHover } from "@/common/constants";

type Props = {
  columns: GridColDef[];
  selectedFields: string[];
  onChange: (fields: string[]) => void;
};

export default function ColumnSelector({
  columns,
  selectedFields,
  onChange,
}: Props) {
  const popover = usePopover();
  const handleToggle = (field: string) => {
    if (selectedFields.includes(field)) {
      onChange(selectedFields.filter((f) => f !== field));
    } else {
      onChange([...selectedFields, field]);
    }
  };

  return (
    <>
      <Box
        onClick={popover.onOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          border: `1px solid ${textPrimary}`,
          borderRadius: "8px",
          height: "40px",
          padding: "0 20px",
          cursor: "pointer",
          "&:hover": {
            opacity: OpacityHover,
          },
        }}
      >
        <Icon
          sx={{ height: "20px", width: "20px" }}
          icon="/assets/icons/table/setting.svg"
        />
        <Typography>Chọn cột hiển thị</Typography>
      </Box>
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="top-center"
        sx={{
          width: 200,
          color: textPrimary,
          ...backgroundImage(),
        }}
      >
        <FormGroup>
          {columns.map((col) => (
            <FormControlLabel
              key={col.field}
              sx={{ padding: "0px 10px" }}
              control={
                <Checkbox
                  checked={selectedFields.includes(col.field)}
                  onChange={() => handleToggle(col.field)}
                />
              }
              label={col.headerName}
            />
          ))}
        </FormGroup>
      </CustomPopover>
    </>
  );
}
