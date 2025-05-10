"use client";
import { Box } from "@mui/material";
import React from "react";
import { usePatients } from "../hooks/usePatients";
import UserTableToolbar from "../UserTableToolbar";
import CustomTable from "@/components/Table/CustomTable";
import CustomBreadcrumbs from "@/components/Breadcrumbs";
import { paths } from "@/common/constants";
import FormAddUser from "../Create/view/CreatePatients";
import { useColumnVisibility } from "@/components/TableColumns/hooks/useSelectColumns";
import { patientsColumns } from "@/components/TableColumns/PatientsColumns";
import { useRouter } from "next/navigation";

export default function PatientsContent(): React.JSX.Element {
  const {
    page,
    perPage,
    setPage,
    setPerPage,
    loading,
    listPatients,
    setListPatients,
    totalItems,
    Columns,
  } = usePatients();

  const { allColumns, setVisibleFields, visibleColumns, visibleFields } =
    useColumnVisibility(Columns);

  const router = useRouter();
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

        <FormAddUser dataRow={listPatients} setDataRow={setListPatients} />
      </Box>
      <Box>
        <UserTableToolbar
          allColumns={allColumns}
          setVisibleFields={setVisibleFields}
          visibleFields={visibleFields}
        />
        <CustomTable
          maxPageSize={perPage}
          currentPage={page}
          rowHeight={60}
          key={JSON.stringify(listPatients)}
          columnHeaders={visibleColumns}
          isLoading={loading}
          items={listPatients}
          totalCount={totalItems ?? 0}
          preventActiveCheckBoxFields={["status", ""]}
          handleSelect={(p0) => console.log(p0)}
          onRowClick={(p) => {
            if (p.id !== "") {
              router.push(paths.dashboard.patients.detail(p.id));
            }
          }}
          onPageChange={function (page: number, pageSize: number): void {
            setPage(page);
            setPerPage(pageSize);
          }}
        />
      </Box>
    </Box>
  );
}
