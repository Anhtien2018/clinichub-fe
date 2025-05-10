" use client";

import { Icon } from "../icons";
import DropDownMoreTable from "../DropDown/DropDownInforTable";
import { Box, Grid } from "@mui/material";
import ColumnSelector from "../TableColumns/SelectorColumns";
import { GridColDef } from "@mui/x-data-grid";
import { usePatientsStore } from "@/stores/Patients/usePatientsStore";
import { FieldInput } from "../Field";

interface UserTableToolbarProps {
  allColumns: GridColDef[];
  visibleFields: string[];
  setVisibleFields: (value: string[]) => void;
}

export default function UserTableToolbar({
  allColumns,
  setVisibleFields,
  visibleFields,
}: UserTableToolbarProps) {
  const { keyWord, setKeyword } = usePatientsStore();

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
            <FieldInput
              sx={{ borderRadius: "8px" }}
              size="small"
              value={keyWord}
              onChange={(e) => {
                setKeyword(e.target.value as string);
              }}
              placeholder="Search..."
              label={""}
              name={""}
              isError={false} // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <Icon icon="/assets/icons/header/search.svg" />
              //     </InputAdornment>
              //   ),
              // }}
            />
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
