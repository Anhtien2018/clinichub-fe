" use client";

import { patientsColumns } from "@/components/TableColumns/PatientsColumns";
import { ToastMessage } from "@/components/Toast/ToastMessage";
import { useRemovePatientMutation } from "@/graphql/mutation/removePatient.generated";
import { usePatientsLazyQuery } from "@/graphql/queries/patients.generated";
import { Patient } from "@/graphql/type.interface";
import { useBoolean } from "@/hooks/use-boolean";
import { usePatientsStore } from "@/stores/Patients/usePatientsStore";
import { useEffect, useMemo, useState } from "react";

export const usePatients = () => {
  const {
    listPatients,
    setListPatients,
    page,
    perPage,
    setPage,
    setPerPage,
    setOpenEdit,
    setIdPatient,
    idPatient,
    totalItems,
    setTotalItems,
    keyWord,
    setListIds,
    listIds,
  } = usePatientsStore();

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const { value, onToggle } = useBoolean();

  const [deletePatient, { loading: loadingDeletePatient }] =
    useRemovePatientMutation({
      onCompleted(data) {
        if (data.removePatient) {
          setListPatients(listPatients.filter((item) => item.id !== idPatient));
          setTotalItems(totalItems - 1);
          setIdPatient("");
          setOpenDialog(false);
          ToastMessage("success", "Xóa bệnh nhân thành công");
        }
      },
    });

  const handleDeletePatient = () => {
    if (idPatient) {
      void deletePatient({
        variables: { id: idPatient },
      });
    }
  };

  const Columns = useMemo(
    () =>
      patientsColumns({
        handleDelete(id) {
          setIdPatient(id);
          setOpenDialog(true);
        },
        handleEdit(id) {
          setIdPatient(id);
          setOpenEdit(true);
        },
      }),
    []
  );

  const [getPatients, { loading: loadingGetPatients }] = usePatientsLazyQuery();

  useEffect(() => {
    if (listPatients.length > 0) {
      return;
    }
    void getPatients({
      variables: {
        pagination: {
          page,
          limit: perPage,
          search: keyWord,
        },
      },
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
  }, [getPatients]);

  return {
    page,
    setPage,
    perPage,
    setPerPage,
    loadingGetPatients,
    listPatients,
    totalItems,
    value,
    onToggle,
    Columns,
    openDialog,
    handleDeletePatient,
    setOpenDialog,
    loadingDeletePatient,
    setListIds,
    listIds,
  };
};
