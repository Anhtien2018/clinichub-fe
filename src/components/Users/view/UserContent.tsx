"use client";
import StatusFilterTabs from "@/components/Table/FilterStatusTable";
import { Card } from "@mui/material";
import React from "react";
import { useUser } from "../hooks/useUser";
import UserTableToolbar from "../UserTableToolbar";
import CustomTable from "@/components/Table/CustomTable";
import { Patient } from "@/graphql/type.interface";
import { userColumns } from "@/components/TableColumns/UserColumns";

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
  console.log(columns);

  return (
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
        rowHeight={350}
        key={JSON.stringify(rowData)}
        columnHeaders={columns}
        isLoading={loading}
        items={rowData}
        totalCount={totalItems}
        preventActiveCheckBoxFields={["status", ""]}
        handleSelect={(p0) => console.log(p0)}
        onPageChange={function (page: number, pageSize: number): void {
          setPage(page + 1);
          setPerPage(pageSize);
        }}
      />
    </Card>
  );
}
