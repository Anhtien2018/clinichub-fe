"use client";

import DialogConfirm from "@/components/Dialog/DialogConfirm";
import React from "react";
import { useDeletePatients } from "./hooks/useDeletePatients";

export default function DeletePatients(): React.JSX.Element {
  const {
    loadingDeletePatient,
    handleDeletePatient,
    openDialog,
    setOpenDialog,
  } = useDeletePatients();
  return (
    <DialogConfirm
      open={openDialog}
      setOpen={setOpenDialog}
      title="Xóa bệnh nhân"
      text="Bạn có chắc chắn muốn xóa bệnh nhân này không? Hành động này không thể hoàn tác."
      onDelete={handleDeletePatient}
      textAction="Xác nhận xóa"
      loading={loadingDeletePatient}
    />
  );
}
