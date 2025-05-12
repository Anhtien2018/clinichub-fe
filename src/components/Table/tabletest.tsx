import React, { useState, useEffect } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRowSelectionModel,
} from "@mui/x-data-grid";

interface CustomTableProps<T> {
  columnHeaders: GridColDef[];
  className?: (params: T) => string;
  isLoading: boolean;
  checkboxSelection?: boolean;
  items: T[];
  totalCount: number;
  handleSelect?: (items: GridRowSelectionModel) => void;
  onPageChange: (page: number, pageSize: number) => void;
  preventActiveCheckBoxFields?: string[];
  isRowSelectable?: ((params: T) => boolean) | undefined;
  rowHeight?: number | undefined;
  sx?: SxProps<Theme> | undefined;
  maxPageSize: number;
  currentPage: number;
  hideFooterPagination?: boolean;
}

export default function CustomTable<T>({
  columnHeaders = [],
  isLoading = false,
  checkboxSelection = true,
  items = [],
  totalCount = 0,
  onPageChange,
  handleSelect,
  className,
  preventActiveCheckBoxFields = [],
  isRowSelectable,
  rowHeight,
  sx,
  maxPageSize = 10,
  currentPage = 0,
  hideFooterPagination = false,
}: CustomTableProps<T>): React.JSX.Element {
  const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>([]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: currentPage ?? 0,
    pageSize: maxPageSize ?? 10,
  });

  useEffect(() => {
    setPaginationModel({
      page: currentPage ?? 0,
      pageSize: maxPageSize ?? 10,
    });
  }, [currentPage, maxPageSize]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        maxWidth: "100%",
        ...sx,
      }}
    >
      <DataGrid
        checkboxSelection={checkboxSelection}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={(model) => {
          const page = model?.page ?? 0;
          const pageSize = model?.pageSize ?? 10;
          setPaginationModel({ page, pageSize });
          onPageChange(page, pageSize);
        }}
        rowCount={totalCount}
        rowHeight={rowHeight}
        rows={items ?? []}
        loading={isLoading}
        columns={columnHeaders ?? []}
        getRowId={(row) => (row as any).id ?? ""}
        rowSelectionModel={selectedIds}
        hideFooterPagination={hideFooterPagination}
        getRowClassName={(params) => className?.(params.row) ?? ""}
        initialState={{
          pagination: {
            paginationModel: {
              page: currentPage ?? 0,
              pageSize: maxPageSize ?? 10,
            },
          },
        }}
        onRowSelectionModelChange={(ids: GridRowSelectionModel) => {
          setSelectedIds(ids);
          handleSelect?.(ids);
        }}
        pageSizeOptions={[10, 20, 50]}
        disableColumnResize
        density="compact"
        slotProps={{
          loadingOverlay: {
            variant: "skeleton",
            noRowsVariant: "skeleton",
          },
        }}
        onCellClick={(params, event) => {
          if (preventActiveCheckBoxFields.includes(params.field)) {
            event.stopPropagation();
          }
        }}
        isRowSelectable={(params) =>
          isRowSelectable ? isRowSelectable(params.row) : true
        }
      />
    </Box>
  );
}
