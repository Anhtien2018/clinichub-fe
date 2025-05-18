"use client";

import { ToastMessage } from "@/components/Toast/ToastMessage";
import { useCreatePatientMutation } from "@/graphql/mutation/createPatient.generated";
import { CreatePatientInput, Gender, Patient } from "@/graphql/type.interface";
import { useBoolean } from "@/hooks/use-boolean";
import { usePatientsStore } from "@/stores/Patients/usePatientsStore";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Họ tên không được để trống"),
  phoneNumber: Yup.string()
    .required("Số điện thoại không được để trống")
    .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ"),
});

export function useCreatePatients() {
  const { value, onToggle } = useBoolean();
  const { listPatients, setListPatients, totalItems, setTotalItems } =
    usePatientsStore();

  const [createPatients] = useCreatePatientMutation({
    onCompleted(data) {
      if (data.createPatient) {
        setListPatients([data.createPatient, ...(listPatients as Patient[])]);
        setTotalItems(totalItems + 1);
        ToastMessage("success", "Thêm bệnh nhân thành công");
        formik.resetForm();
        onToggle();
      }
    },
    onError(error) {
      console.log(error);
      onToggle();
    },
  });
  const formik = useFormik<CreatePatientInput>({
    initialValues: {
      fullName: "",
      email: "",
      address: "",
      clinicId: "",
      dateOfBirth: "",
      gender: "UNSPECIFIED" as Gender,
      phoneNumber: "",
      healthInsuranceId: "",
      metadata: {},
      phonePrefix: "",
    },
    validationSchema,
    onSubmit: (value) => {
      onToggle();
      void createPatients({
        variables: {
          createPatientInput: { ...value },
        },
      });
    },
  });

  return {
    formik,
    loading: value,
  };
}
