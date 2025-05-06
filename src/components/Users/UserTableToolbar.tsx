import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import { Icon } from "../icons";
import { BoxShadow } from "@/common/color";
import DropDownMoreTable from "../DropDown/DropDownInforTable";

// ----------------------------------------------------------------------

interface UserTableToolbarProps {
  keyword: string;
  setKeyword: (value: string) => void;
}

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
            fullWidth
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
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
        <DropDownMoreTable />
      </Stack>
    </>
  );
}
