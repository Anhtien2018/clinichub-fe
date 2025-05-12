" use client";

import { Icon } from "../icons";
import DropDownMoreTable from "../DropDown/DropDownInforTable";
import { Box, Grid } from "@mui/material";
import ColumnSelector from "../TableColumns/SelectorColumns";
import { GridColDef } from "@mui/x-data-grid";
import { KeywordInput } from "../Search/SearchInput";

interface UserTableToolbarProps {
  allColumns: GridColDef[];
  visibleFields: string[];
  setVisibleFields: (value: string[]) => void;
  listIds?: string[];
}

export default function UserTableToolbar({
  allColumns,
  setVisibleFields,
  visibleFields,
  listIds,
}: UserTableToolbarProps) {
  return (
    <>
      <Box sx={{ p: 2, pr: { xs: 2.5, md: 1 } }}>
        <Grid container columnSpacing={2}>
          <Grid size={1} sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Icon
                sx={{ width: "20px", height: "20px" }}
                icon="/assets/icons/action/trash.svg"
              />
            </Box>
          </Grid>
          <Grid size={9}>
            <KeywordInput />
          </Grid>
          <Grid size={2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <ColumnSelector
                columns={allColumns}
                selectedFields={visibleFields}
                onChange={setVisibleFields}
              />
              <DropDownMoreTable />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
