import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { Icon } from "../icons";
import { BoxShadow } from "@/common/color";
import DropDownMoreTable from "../DropDown/DropDownInforTable";

// ----------------------------------------------------------------------

interface UserTableToolbarProps {
  keyword: string;
  setKeyword: (value: string) => void;
}

const ListMoreTable = [
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

export default function UserTableToolbar({
  keyword,
  setKeyword,
}: UserTableToolbarProps) {
  return (
    <>
      <Stack
        spacing={2}
        alignItems={{ xs: "flex-end", md: "center" }}
        direction={{
          xs: "column",
          md: "row",
        }}
        sx={{
          boxShadow: BoxShadow,
          p: 2.5,
          pr: { xs: 2.5, md: 1 },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          flexGrow={1}
          sx={{ width: 1 }}
        >
          <TextField
            sx={{ borderRadius: "8px" }}
            size="small"
            fullWidth
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon="/assets/icons/header/search.svg" />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <DropDownMoreTable menuItems={ListMoreTable} />
      </Stack>
    </>
  );
}
