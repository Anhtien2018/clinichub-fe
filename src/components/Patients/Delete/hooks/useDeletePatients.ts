import { ToastMessage } from "@/components/Toast/ToastMessage";
import { useRemovePatientMutation } from "@/graphql/mutation/removePatient.generated";
import { usePatientsStore } from "@/stores/Patients/usePatientsStore";

export const useDeletePatients = () => {
  const {
    idPatient,
    listPatients,
    setListPatients,
    totalItems,
    setIdPatient,
    setTotalItems,
    setOpenDialog,
    openDialog,
  } = usePatientsStore();
  const [deletePatient, { loading: loadingDeletePatient }] =
    useRemovePatientMutation({
      onCompleted(data) {
        if (data.removePatient) {
          setListPatients(listPatients.filter((item) => item.id !== idPatient));
          setTotalItems(totalItems - 1);
          setIdPatient("");
          setOpenDialog(false);
          ``;
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
  return {
    loadingDeletePatient,
    handleDeletePatient,
    openDialog,
    setOpenDialog,
  };
};
