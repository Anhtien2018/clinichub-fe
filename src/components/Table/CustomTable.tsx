"use client";

import React, { useState } from "react";
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
  currentPage: number;
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
  currentPage,
}: CustomTableProps<T>): React.JSX.Element {
  const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>(
    [] as unknown as GridRowSelectionModel
  );
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: currentPage,
    pageSize: maxPageSize,
  });

  const handlePaginationChange = (model: GridPaginationModel) => {
    setPaginationModel(model);
    onPageChange(model.page, model.pageSize);
  };

  const handleRowSelectionChange = (ids: GridRowSelectionModel) => {
    setSelectedIds(ids);
    handleSelect?.(ids);
  };

  const handleCellClick = (params: any, event: React.MouseEvent) => {
    if (preventActiveCheckBoxFields.includes(params.field)) {
      event.stopPropagation();
    }
  };

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
        onPaginationModelChange={handlePaginationChange}
        rowCount={totalCount}
        rowHeight={rowHeight}
        rows={items}
        loading={isLoading}
        columns={columnHeaders}
        getRowId={(row) => row.id}
        // rowSelectionModel={selectedIds}
        hideFooterPagination
        getRowClassName={(params) => className?.(params.row) || ""}
        initialState={{
          pagination: {
            paginationModel: { pageSize: maxPageSize, page: currentPage },
          },
        }}
        onRowSelectionModelChange={handleRowSelectionChange}
        pageSizeOptions={[10, 20, 50]}
        disableColumnResize
        density="compact"
        slots={{
          noRowsOverlay: (props) => <TableNoData notFound={true} {...props} />,
          noResultsOverlay: (props) => (
            <TableNoData notFound={true} {...props} />
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
      <TablePaginationCustom
        count={totalCount}
        page={paginationModel.page}
        rowsPerPage={paginationModel.pageSize}
        onPageChange={(_, newPage) =>
          handlePaginationChange({ ...paginationModel, page: newPage })
        }
        onRowsPerPageChange={(e) =>
          handlePaginationChange({
            page: 0,
            pageSize: parseInt(e.target.value, 10),
          })
        }
        onChangeDense={() => {}}
      />
    </Box>
  );
}
