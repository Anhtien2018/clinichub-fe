"use client";

import React, { useState, useEffect } from "react";
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
}

export default function CustomTable<T>({
  columnHeaders,
  isLoading,
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
}: CustomTableProps<T>): React.JSX.Element {
  // const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>([]);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: currentPage - 1, // chuyển về 0-based
    pageSize: maxPageSize,
  });

  useEffect(() => {
    // Nếu currentPage (1-based) hoặc maxPageSize thay đổi từ bên ngoài
    setPaginationModel({
      page: currentPage - 1,
      pageSize: maxPageSize,
    });
  }, [currentPage, maxPageSize]);

  const handlePaginationChange = (model: GridPaginationModel) => {
    setPaginationModel(model);
    onPageChange(model.page + 1, model.pageSize); // truyền về 1-based cho API
  };

  const handleRowSelectionChange = (ids: GridRowSelectionModel) => {
    handleSelect?.(ids);
  };

  const handleCellClick = (params: any, event: React.MouseEvent) => {
    if (preventActiveCheckBoxFields.includes(params.field)) {
      event.stopPropagation();
    }
  };

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
        rows={items}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#F4F6F6", // Đặt màu nền cho header
            borderBottom: "none", // Xóa border dưới cùng của header
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#F4F6F6", // Đặt màu nền cho mỗi header của cột
            border: "none", // Xóa border của từng header cột
          },
          "& .MuiDataGrid-columnHeader:focus": {
            outline: "none", // Xóa outline khi header bị focus
          },
          "& .MuiDataGrid-row.Mui-selected": {
            border: "none",
            outline: "none",
          },
          "& .MuiDataGrid-row.Mui-selected:hover": {
            border: "none",
            outline: "none",
            backgroundColor: "#F4F6F6", // Khi hover và đã chọn row
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
            backgroundColor: "#F4F6F6", // Màu nền khi hover vào row
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
          noRowsOverlay: (props) => <TableNoData notFound={true} {...props} />,
          noResultsOverlay: (props) => (
            <TableNoData notFound={true} {...props} />
          ),
          footer: () => (
            <TablePaginationCustom
              count={totalCount}
              page={paginationModel.page} // 0-based
              rowsPerPage={paginationModel.pageSize}
              onPageChange={(_, newPage) => {
                handlePaginationChange({ ...paginationModel, page: newPage });
              }}
              onRowsPerPageChange={(e) => {
                const newPageSize = parseInt(e.target.value, 10);
                handlePaginationChange({
                  page: 0,
                  pageSize: newPageSize,
                });
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
