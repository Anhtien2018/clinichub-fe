"use client";
import { usePatientsLazyQuery } from "@/graphql/queries/patients.generated";
import { Patient } from "@/graphql/type.interface";
import { useBoolean } from "@/hooks/use-boolean";
import { SyntheticEvent, useEffect, useState } from "react";

export function useUser() {
  const [status, setStatus] = useState<string>("active");
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [rowData, setRowData] = useState<Patient[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const { value, onToggle } = useBoolean();
  const [getPatients, { loading }] = usePatientsLazyQuery({
    onCompleted(data) {
      setRowData((data.patients.items as Patient[]) || []);
      setTotalItems(data.patients.pageInfo.total ?? 0);
    },
    onError(error) {
      console.log(error);
    },
  });
  const listStatus = [
    { value: "active", label: "Active" },
    { value: "pending", label: "Pending" },
    { value: "banned", label: "Banned" },
    { value: "rejected", label: "Rejected" },
  ];

  useEffect(() => {
    getPatients({
      variables: {
        pagination: {
          page: page,
          limit: perPage,
          search: keyword,
        },
      },
    });
  }, [page, perPage, keyword]);
  const handleFilterStatus = (event: SyntheticEvent, newValue: string) => {
    setStatus(newValue);
  };
  return {
    listStatus,
    handleFilterStatus,
    status,
    keyword,
    setKeyword,
    page,
    setPage,
    perPage,
    setPerPage,
    loading,
    rowData,
    totalItems,
    value,
    onToggle,
  };
}
