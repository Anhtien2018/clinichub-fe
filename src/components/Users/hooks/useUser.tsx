"use client";
import { Patient } from "@/graphql/type.interface";
import { SyntheticEvent, useState } from "react";

export function useUser() {
  const [status, setStatus] = useState<string>("active");
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [rowData, setRowData] = useState<Patient[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const listStatus = [
    { value: "active", label: "Active" },
    { value: "pending", label: "Pending" },
    { value: "banned", label: "Banned" },
    { value: "rejected", label: "Rejected" },
  ];
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
  };
}
