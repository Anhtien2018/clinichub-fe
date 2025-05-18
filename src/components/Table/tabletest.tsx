import React, { useCallback } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { TableNoData } from ".";

interface CustomTableProps<T> {
  columnHeaders: GridColDef[];
  className?: (params: T) => string;
  isLoading: boolean;
  checkboxSelection?: boolean;
  items: T[];
  handleSelect?: (items: GridRowSelectionModel) => void;
  preventActiveCheckBoxFields?: string[];
  isRowSelectable?: (params: T) => boolean;
  rowHeight?: number;
  sx?: SxProps<Theme>;
  onRowClick?: (params: any) => void;
}

const MemoTableNoData = React.memo(TableNoData);

export default function CustomTable<T>({
  columnHeaders,
  isLoading = true,
  checkboxSelection = true,
  items,
  handleSelect,
  className,
  preventActiveCheckBoxFields = [],
  isRowSelectable,
  rowHeight,
  sx,
  onRowClick,
}: CustomTableProps<T>): React.JSX.Element {
  const handleRowSelectionChange = useCallback(
    (ids: GridRowSelectionModel) => {
      handleSelect?.(ids);
    },
    [handleSelect]
  );

  const handleCellClick = useCallback(
    (params: any, event: React.MouseEvent) => {
      if (preventActiveCheckBoxFields.includes(params.field)) {
        event.stopPropagation();
      }
    },
    [preventActiveCheckBoxFields]
  );

  const handleRowClickInternal = useCallback(
    (params: any) => {
      onRowClick?.(params);
    },
    [onRowClick]
  );

  return (
    <Box sx={{ width: "100%", overflowX: "hidden", ...sx }}>
      <DataGrid
        checkboxSelection={checkboxSelection}
        rowHeight={rowHeight}
        disableRowSelectionOnClick
        onRowClick={handleRowClickInternal}
        rows={items}
        sx={{
          cursor: "pointer",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#F4F6F6",
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#F4F6F6",
            border: "none",
          },
          "& .MuiDataGrid-columnHeader:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-row.Mui-selected": {
            border: "none",
            outline: "none",
          },
          "& .MuiDataGrid-row.Mui-selected:hover": {
            border: "none",
            outline: "none",
            backgroundColor: "#F4F6F6",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "& .MuiDataGrid-row:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-row:focus-within": {
            outline: "none",
          },
          "& .MuiDataGrid-row.Mui-hover": {
            backgroundColor: "#F4F6F6",
          },
        }}
        loading={isLoading}
        columns={columnHeaders}
        getRowId={(row) => row.id}
        getRowClassName={(params) => className?.(params.row) || ""}
        onRowSelectionModelChange={handleRowSelectionChange}
        disableColumnResize
        density="compact"
        slots={{
          noRowsOverlay: (props) => (
            <MemoTableNoData notFound={true} {...props} />
          ),
          noResultsOverlay: (props) => (
            <MemoTableNoData notFound={true} {...props} />
          ),
        }}
        slotProps={{
          loadingOverlay: {
            variant: "skeleton",
            noRowsVariant: "skeleton",
          },
        }}
        onCellClick={handleCellClick}
        isRowSelectable={(params) =>
          isRowSelectable ? isRowSelectable(params.row) : true
        }
      />
    </Box>
  );
}
