"use client";

import { paths } from "@/common/constants";
import CustomBreadcrumbs from "@/components/Breadcrumbs";
import DialogConfirm from "@/components/Dialog/DialogConfirm";
import UpdatePatient from "@/components/Patients/Update/view/UpdatePatient";
import CustomTable from "@/components/Table/CustomTable";
import TableToolbar from "@/components/TableToolbar/TableToolbar";
import { Box } from "@mui/material";
import React, { useMemo } from "react";
import { useDrugs } from "../hooks/useDrug";
import { useColumnVisibility } from "@/components/TableColumns/hooks/useSelectColumns";
import { useRouter } from "next/navigation";
import { Drug } from "@/graphql/type.interface";

export default function DrugContent(): React.JSX.Element {
  const {
    listIds,
    columns,
    listDrugs,
    setListIds,
    openDialog,
    page,
    perPage,
    setOpenDialog,
    setPage,
    setPerPage,
    totalItems,
    loadingGetDrugs,
  } = useDrugs();
  console.log("render DrugContent - listDrugs:", listDrugs);

  const router = useRouter();
  const { allColumns, setVisibleFields, visibleColumns, visibleFields } =
    useColumnVisibility(columns);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {/* {listDrugs.map((item) => (
        <Box>{item.code}</Box>
      ))} */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <CustomBreadcrumbs
          heading="Thuốc"
          links={[
            { name: "Thống kê", href: paths.dashboard.patients.index },
            { name: "Danh sách thuốc" },
          ]}
        />
      </Box>

      <Box>
        <TableToolbar
          listIds={listIds}
          allColumns={allColumns}
          setVisibleFields={setVisibleFields}
          visibleFields={visibleFields}
        />

        <CustomTable
          maxPageSize={perPage}
          currentPage={page}
          rowHeight={60}
          // key={JSON.stringify(listDrugs)}
          columnHeaders={visibleColumns}
          isLoading={loadingGetDrugs}
          items={listDrugs}
          totalCount={totalItems ?? 0}
          preventActiveCheckBoxFields={["status", ""]}
          handleSelect={(p0) => {
            setListIds(Array.from(p0.ids) as string[]);
          }}
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

      {/* <UpdatePatient /> */}

      {/* <DialogConfirm
        open={openDialog}
        setOpen={setOpenDialog}
        title="Xóa bệnh nhân"
        text="Bạn có chắc chắn muốn xóa bệnh nhân này không? Hành động này không thể hoàn tác."
        onDelete={handleDeletePatient}
        textAction="Xác nhận xóa"
        loading={loadingDeletePatient}
      /> */}
    </Box>
  );
}
