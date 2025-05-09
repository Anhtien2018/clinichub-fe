"use client";
import { Box, Card } from "@mui/material";
import React from "react";
import { usePatients } from "../hooks/usePatients";
import UserTableToolbar from "../UserTableToolbar";
import CustomTable from "@/components/Table/CustomTable";
import CustomBreadcrumbs from "@/components/Breadcrumbs";
import { paths } from "@/common/constants";
import FormAddUser from "../create/CreatePatients";
import ColumnSelector from "@/components/TableColumns/SelectorColumns";

export default function PatientsContent(): React.JSX.Element {
  const {
    keyword,
    setKeyword,
    page,
    perPage,
    setPage,
    setPerPage,
    loading,
    rowData,
    setRowData,
    totalItems,
    allColumns,
    setVisibleFields,
    visibleFields,
    visibleColumns,
  } = usePatients();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <CustomBreadcrumbs
          heading="Bệnh nhân"
          links={[
            { name: "Thống kê", href: paths.dashboard.patients.index },
            { name: "Danh sách bệnh nhân" },
          ]}
        />

        <FormAddUser dataRow={rowData} setDataRow={setRowData} />
      </Box>
      <Box>
        <UserTableToolbar keyword={keyword} setKeyword={setKeyword} />
        <ColumnSelector
          columns={allColumns}
          selectedFields={visibleFields}
          onChange={setVisibleFields}
        />
        <CustomTable
          maxPageSize={perPage}
          currentPage={page}
          rowHeight={60}
          key={JSON.stringify(rowData)}
          columnHeaders={visibleColumns}
          isLoading={loading}
          items={rowData}
          totalCount={totalItems ?? 0}
          preventActiveCheckBoxFields={["status", ""]}
          handleSelect={(p0) => console.log(p0)}
          onPageChange={function (page: number, pageSize: number): void {
            setPage(page);
            setPerPage(pageSize);
          }}
        />
      </Box>
    </Box>
  );
}
