// StatusFilterTabs.tsx
import { BoxShadow, textPrimary } from "@/common/color";
import { Tabs, Tab, Typography } from "@mui/material";
import { SyntheticEvent } from "react";

type StatusOption = {
  value: string;
  label: string;
};

type Props = {
  arrStatus: StatusOption[];
  selectedStatus: string;
  onChange: (event: SyntheticEvent, newValue: string) => void;
};

export default function StatusFilterTabs({
  arrStatus,
  selectedStatus,
  onChange,
}: Props) {
  return (
    <Tabs
      value={selectedStatus}
      onChange={onChange}
      TabIndicatorProps={{
        style: {
          backgroundColor: "#000", // Màu line bottom
          color: "red",
        },
      }}
      sx={{
        px: 2.5,
        boxShadow: BoxShadow,
      }}
    >
      {arrStatus.map((tab) => {
        return (
          <Tab
            key={tab.value}
            iconPosition="end"
            value={tab.value}
            label={tab.label}
            sx={{
              color: "#888 !important", // màu chữ mặc định
              fontSize: "1rem",
              fontWeight: 400,
              "&.Mui-selected": {
                color: `${textPrimary} !important`, // màu khi được chọn
                fontWeight: 700,
              },
            }}
          />
        );
      })}
    </Tabs>
  );
}
