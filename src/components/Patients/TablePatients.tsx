"use client";

import { usePatientsLazyQuery } from "@/graphql/queries/patients.generated";
import { Patient } from "@/graphql/type.interface";
import { usePatientsStore } from "@/stores/Patients/usePatientsStore";
import React, { useEffect, useState } from "react";
import CustomTable from "../Table/CustomTable";
import { Box } from "@mui/material";
import { patientsColumns } from "../TableColumns/PatientsColumns";
import { useColumnVisibility } from "../TableColumns/hooks/useSelectColumns";
import { paths } from "@/common/constants";
import { useRouter } from "next/navigation";
import TableToolbar from "../TableToolbar/TableToolbar";
import useDebounce from "@/hooks/useDebounce";

export default function TablePatients(): React.JSX.Element {
  const {
    listPatients,
    setListPatients,
    page,
    perPage,
    setTotalItems,
    setIdPatient,
    setOpenEdit,
    setOpenDialog,
    setListIds,
    totalItems,
    setPage,
    setPerPage,
    // keyWord,
    // setKeyword,
  } = usePatientsStore();

  const router = useRouter();

  const [getPatients] = usePatientsLazyQuery();
  const [keyWordLocal, setKeywordLocal] = useState<string>("");
  const debouncedValueSearch = useDebounce(keyWordLocal, 1500);
  const [loadingGetPatients, setLoadingGetPatients] = useState<boolean>(true);

  useEffect(() => {
    void getPatients({
      variables: {
        pagination: {
          page,
          limit: perPage,
          search: keyWordLocal,
        },
      },
      onCompleted(data) {
        if (data?.patients) {
          setListPatients((data.patients.items as Patient[]) || []);
          setTotalItems(data.patients.pageInfo.total ?? 0);
          setLoadingGetPatients(false);
        }
      },
      onError(error) {
        console.log(error);
        setLoadingGetPatients(false);
      },
    });
  }, [page, perPage, debouncedValueSearch]);

  const columns = patientsColumns({
    handleDelete(id) {
      setIdPatient(id);
      setOpenDialog(true);
    },
    handleEdit(id) {
      setIdPatient(id);
      setOpenEdit(true);
    },
  });

  const { allColumns, setVisibleFields, visibleColumns, visibleFields } =
    useColumnVisibility(columns);

  return (
    <Box>
      <Box>
        <TableToolbar
          allColumns={allColumns}
          keyWordLocal={keyWordLocal}
          setKeywordLocal={setKeywordLocal}
          setVisibleFields={setVisibleFields}
          visibleFields={visibleFields}
        />
      </Box>

      <Box>
        <CustomTable
          maxPageSize={perPage}
          currentPage={page}
          rowHeight={60}
          columnHeaders={visibleColumns}
          isLoading={loadingGetPatients}
          items={listPatients}
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
    </Box>
  );
}
