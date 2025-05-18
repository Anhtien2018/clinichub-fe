"use client";

import React from "react";
import { Icon } from "../icons";
import DropDownMoreTable from "../DropDown/DropDownInforTable";
import { Box, Grid } from "@mui/material";
import ColumnSelector from "../TableColumns/SelectorColumns";
import { GridColDef } from "@mui/x-data-grid";
import SearchTable from "../Search/SearchTable";

interface TableToolbarProps {
  allColumns: GridColDef[];
  visibleFields: string[];
  setVisibleFields: (value: string[]) => void;
  keyWordLocal: string;
  setKeywordLocal: (keyword: string) => void;
}

export default function TableToolbar({
  allColumns,
  setVisibleFields,
  visibleFields,
  keyWordLocal,
  setKeywordLocal,
}: TableToolbarProps): React.JSX.Element {
  return (
    <Box sx={{ p: 2, pr: { xs: 2.5, md: 1 } }}>
      <Grid container columnSpacing={2}>
        <Grid size={1} sx={{ display: "flex", alignItems: "center" }}>
          <Icon
            sx={{ width: "20px", height: "20px" }}
            icon="/assets/icons/action/trash.svg"
          />
        </Grid>
        <Grid size={9}>
          <SearchTable
            keyWordLocal={keyWordLocal}
            setKeywordLocal={setKeywordLocal}
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
  );
}
