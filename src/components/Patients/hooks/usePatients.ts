" use client";

import { patientsColumns } from "@/components/TableColumns/PatientsColumns";
import { usePatientsLazyQuery } from "@/graphql/queries/patients.generated";
import { Patient } from "@/graphql/type.interface";
import { useBoolean } from "@/hooks/use-boolean";
import useDebounce from "@/hooks/useDebounce";
import { usePatientsStore } from "@/stores/Patients/usePatientsStore";
import { useEffect, useMemo, useState } from "react";

export const usePatients = () => {
  const { listPatients, setListPatients, page, perPage, setPage, setPerPage } =
    usePatientsStore();
  const [totalItems, setTotalItems] = useState<number>(0);
  const { value, onToggle } = useBoolean();
  // const debouncedKeyword = useDebounce(keyWord, 500); // Thời gian debounce là 500ms
  const Columns = useMemo(() => patientsColumns(), []);

  const [getPatients, { loading }] = usePatientsLazyQuery({
    onCompleted(data) {
      if (data?.patients) {
        setListPatients((data.patients.items as Patient[]) || []);
        setTotalItems(data.patients.pageInfo.total ?? 0);
      }
    },
    onError(error) {
      console.log(error);
    },
  });

  useEffect(() => {
    void getPatients({
      variables: {
        pagination: {
          page,
          limit: perPage,
          // search: debouncedKeyword,
        },
      },
    });
  }, [page, perPage]);

  return {
    page,
    setPage,
    perPage,
    setPerPage,
    loading,
    listPatients,
    totalItems,
    value,
    onToggle,
    setListPatients,
    Columns,
  };
};
