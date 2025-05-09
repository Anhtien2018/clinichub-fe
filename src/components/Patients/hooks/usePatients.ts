import { patientsColumns } from "@/components/TableColumns/PatientsColumns";
import { usePatientsLazyQuery } from "@/graphql/queries/patients.generated";
import { Patient } from "@/graphql/type.interface";
import { useBoolean } from "@/hooks/use-boolean";
import useDebounce from "@/hooks/useDebounce";
import { set } from "nprogress";
import { SyntheticEvent, useEffect, useMemo, useState } from "react";

export function usePatients() {
  const [keyword, setKeyword] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(25);
  const [rowData, setRowData] = useState<Patient[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const { value, onToggle } = useBoolean();
  const debouncedKeyword = useDebounce(keyword, 500); // Thời gian debounce là 500ms

  const allColumns = useMemo(() => patientsColumns(), []);
  const [visibleFields, setVisibleFields] = useState<string[]>(
    allColumns.map((col) => col.field)
  );

  const visibleColumns = useMemo(
    () => allColumns.filter((col) => visibleFields.includes(col.field)),
    [allColumns, visibleFields]
  );

  const [getPatients, { loading }] = usePatientsLazyQuery({
    onCompleted(data) {
      setRowData((data.patients.items as Patient[]) || []);
      setTotalItems(data.patients.pageInfo.total ?? 0);
    },
    onError(error) {
      console.log(error);
    },
  });

  useEffect(() => {
    const fetchPatients = () => {
      getPatients({
        variables: {
          pagination: {
            page,
            limit: perPage,
            search: debouncedKeyword,
          },
        },
      });
    };

    fetchPatients();
  }, [page, perPage, debouncedKeyword]);

  return {
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
    setRowData,
    allColumns,
    visibleFields,
    setVisibleFields,
    visibleColumns,
  };
}
