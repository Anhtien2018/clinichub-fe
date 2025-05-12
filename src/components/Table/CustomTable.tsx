import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Box, SxProps, Theme } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { TableNoData, TablePaginationCustom } from "./";

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
  isRowSelectable?: (params: T) => boolean;
  rowHeight?: number;
  sx?: SxProps<Theme>;
  maxPageSize: number;
  currentPage: number; // 1-based
  onRowClick?: (params: any) => void;
}

const MemoTableNoData = React.memo(TableNoData);
const MemoTablePaginationCustom = React.memo(TablePaginationCustom);

export default function CustomTable<T>({
  columnHeaders,
  isLoading = true,
  checkboxSelection = true,
  items,
  totalCount,
  onPageChange,
  handleSelect,
  className,
  preventActiveCheckBoxFields = [],
  isRowSelectable,
  rowHeight,
  sx,
  maxPageSize,
  currentPage, // 1-based
  onRowClick,
}: CustomTableProps<T>): React.JSX.Element {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: currentPage - 1, // chuyển về 0-based
    pageSize: maxPageSize,
  });

  const memoizedPaginationModel = useMemo(
    () => ({
      page: currentPage - 1,
      pageSize: maxPageSize,
    }),
    [currentPage, maxPageSize]
  );

  useEffect(() => {
    // Chỉ cập nhật khi paginationModel thực sự thay đổi
    if (
      paginationModel.page !== memoizedPaginationModel.page ||
      paginationModel.pageSize !== memoizedPaginationModel.pageSize
    ) {
      setPaginationModel(memoizedPaginationModel);
    }
  }, [memoizedPaginationModel]);

  const handlePaginationChange = useCallback(
    (model: GridPaginationModel) => {
      if (
        paginationModel.page !== model.page ||
        paginationModel.pageSize !== model.pageSize
      ) {
        setPaginationModel(model);
        onPageChange(model.page + 1, model.pageSize); // truyền về 1-based cho API
      }
    },
    [paginationModel, onPageChange]
  );

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
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        rowCount={totalCount}
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
        hideFooterPagination
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
          footer: () => (
            <MemoTablePaginationCustom
              count={totalCount}
              page={paginationModel.page}
              rowsPerPage={paginationModel.pageSize}
              onPageChange={(_, newPage) => {
                handlePaginationChange({ ...paginationModel, page: newPage });
              }}
              onRowsPerPageChange={(e) => {
                const newPageSize = parseInt(e.target.value, 10);
                handlePaginationChange({ page: 0, pageSize: newPageSize });
              }}
            />
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
