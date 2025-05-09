import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Icon } from "../icons";
import DropDownMoreTable from "../DropDown/DropDownInforTable";
import { Box, Grid } from "@mui/material";
import ColumnSelector from "../TableColumns/SelectorColumns";
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
      <Box sx={{ p: 2, pr: { xs: 2.5, md: 1 } }}>
        <Grid container columnSpacing={2}>
          <Grid size={6} sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Icon
                sx={{ width: "20px", height: "20px" }}
                icon="/assets/icons/action/trash.svg"
              />
            </Box>
          </Grid>
          <Grid size={5}>
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
          </Grid>
          {/* <Grid size={1} sx={{}}> */}
          <DropDownMoreTable />

          {/* </Grid> */}
        </Grid>
      </Box>
    </>
  );
}
