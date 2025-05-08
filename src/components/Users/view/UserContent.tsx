"use client";
import StatusFilterTabs from "@/components/Table/FilterStatusTable";
import { Box, Card } from "@mui/material";
import React from "react";
import { useUser } from "../hooks/useUser";
import UserTableToolbar from "../UserTableToolbar";
import CustomTable from "@/components/Table/CustomTable";
import { userColumns } from "@/components/TableColumns/UserColumns";
import CustomBreadcrumbs from "@/components/Breadcrumbs";
import { paths } from "@/common/constants";
import FormAddUser from "../add/FormAddUser";

export default function UsersContent(): React.JSX.Element {
  const {
    status,
    handleFilterStatus,
    listStatus,
    keyword,
    setKeyword,
    page,
    perPage,
    setPage,
    setPerPage,
    loading,
    rowData,
    totalItems,
  } = useUser();
  const columns = userColumns();

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
            { name: "Thống kê", href: paths.dashboard.users.index },
            { name: "Danh sách bệnh nhân" },
          ]}
        />

        <FormAddUser />
      </Box>
      <Card>
        <StatusFilterTabs
          arrStatus={listStatus}
          selectedStatus={status}
          onChange={handleFilterStatus}
        />
        <UserTableToolbar keyword={keyword} setKeyword={setKeyword} />
        <CustomTable
          maxPageSize={perPage}
          currentPage={page}
          rowHeight={80}
          key={JSON.stringify(rowData)}
          columnHeaders={columns}
          isLoading={loading}
          items={rowData}
          totalCount={totalItems}
          preventActiveCheckBoxFields={["status", ""]}
          handleSelect={(p0) => console.log(p0)}
          onPageChange={function (page: number, pageSize: number): void {
            setPage(page);
            setPerPage(pageSize);
          }}
        />
      </Card>
    </Box>
  );
}
