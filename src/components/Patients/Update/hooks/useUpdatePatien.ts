"use client";

import { formatDateTime } from "@/common/helper";
import { ToastMessage } from "@/components/Toast/ToastMessage";
import { useUpdatePatientMutation } from "@/graphql/mutation/updatePatient.generated";
import { usePatientLazyQuery } from "@/graphql/queries/patient.generated";
import { Gender, UpdatePatientInput } from "@/graphql/type.interface";
import { usePatientsStore } from "@/stores/Patients/usePatientsStore";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Họ tên không được để trống"),
  phoneNumber: Yup.string()
    .required("Số điện thoại không được để trống")
    .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ"),
});

export const useUpdatePatient = () => {
  const {
    idPatient,
    setIdPatient,
    setOpenEdit,
    openedEdit,
    listPatients,
    setListPatients,
  } = usePatientsStore();

  const [loading, setLoading] = useState<boolean>(false);

  const [getPatient] = usePatientLazyQuery({
    onCompleted(data) {
      formik.setValues({
        id: data?.patient?.id,
        fullName: data?.patient?.fullName,
        email: data?.patient?.email,
        address: data?.patient?.address,
        dateOfBirth: formatDateTime(data?.patient?.dateOfBirth),
        gender: data?.patient.gender,
        healthInsuranceId: data?.patient?.healthInsuranceId,
        metadata: data?.patient?.metadata,
        phoneNumber: data?.patient?.phoneNumber,
        phonePrefix: data?.patient?.phonePrefix,
      });
    },
    onError(error) {
      console.log(error);
    },
  });

  const [updatePatient] = useUpdatePatientMutation({
    onCompleted(data) {
      setListPatients(
        listPatients.map((item) =>
          item.id === idPatient ? data.updatePatient : item
        )
      );
      formik.resetForm();
      setOpenEdit(false);
      setIdPatient("");
      ToastMessage("success", "Cập nhật bệnh nhân thành công");
      setLoading(false);
    },
    onError(error) {
      console.log(error);
      setLoading(false);
    },
  });

  useEffect(() => {
    if (idPatient) {
      void getPatient({
        variables: {
          id: idPatient,
        },
      });
    }
  }, [idPatient]);

  const formik = useFormik<UpdatePatientInput>({
    initialValues: {
      id: idPatient,
      fullName: "",
      email: "",
      address: "",
      dateOfBirth: "",
      gender: "" as Gender,
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: (value) => {
      setLoading(true);
      void updatePatient({
        variables: {
          updatePatientInput: {
            id: value.id,
            fullName: value.fullName,
            email: value.email,
            address: value.address,
            dateOfBirth: value.dateOfBirth,
            gender: value.gender,
            phoneNumber: value.phoneNumber,
          },
        },
      });
    },
  });

  return {
    formik,
    setOpenEdit,
    openedEdit,
    loading,
  };
};
